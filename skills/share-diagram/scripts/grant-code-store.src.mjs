import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { homedir } from 'node:os'
import { createHash, randomBytes } from 'node:crypto'
import { GRANT_CODE_TTL_MS } from '../../../src/lib/sharedConfig.ts'

const GRANT_CODE_STORE_DIR = join(homedir(), '.shareable-diagrams')
const GRANT_CODE_STORE_PATH = join(GRANT_CODE_STORE_DIR, 'grant-codes.json')

function sha256Hex(value) {
  return createHash('sha256').update(value).digest('hex')
}

function readGrantCodeStateFile() {
  try {
    const raw = readFileSync(GRANT_CODE_STORE_PATH, 'utf8')
    const parsed = JSON.parse(raw)

    if (parsed && typeof parsed === 'object' && Array.isArray(parsed.records)) {
      return parsed.records.filter((record) => record && typeof record === 'object')
    }
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') {
      return []
    }
    throw error
  }

  return []
}

function writeGrantCodeStateFile(records) {
  mkdirSync(dirname(GRANT_CODE_STORE_PATH), { recursive: true })
  writeFileSync(
    GRANT_CODE_STORE_PATH,
    `${JSON.stringify({ records }, null, 2)}\n`,
    'utf8',
  )
}

export function createGrantCodeState() {
  const records = readGrantCodeStateFile()
  return {
    records,
    persist() {
      writeGrantCodeStateFile(records)
    },
  }
}

function ensureState(state) {
  if (!state || typeof state !== 'object') {
    throw new Error('grant code state is required')
  }

  if (!Array.isArray(state.records)) {
    state.records = []
  }

  return state
}

function persistState(state) {
  if (typeof state.persist === 'function') {
    state.persist()
  }
}

export function issueGrantCode({ ownerId, ttlMs = GRANT_CODE_TTL_MS, now = () => Date.now(), state }) {
  if (typeof ownerId !== 'string' || !ownerId) {
    throw new Error('ownerId is required')
  }

  const grantState = ensureState(state)
  const issuedAt = now()
  const code = randomBytes(32).toString('base64url')
  grantState.records.push({
    codeHash: sha256Hex(code),
    ownerId,
    issuedAt,
    expiresAt: issuedAt + ttlMs,
    usedAt: null,
  })
  persistState(grantState)

  return code
}

export function consumeGrantCode({ code, now = () => Date.now(), state }) {
  if (typeof code !== 'string' || !code) {
    throw new Error('code is required')
  }

  const grantState = ensureState(state)
  const codeHash = sha256Hex(code)
  const record = grantState.records.find((entry) => entry.codeHash === codeHash)

  if (!record) {
    throw new Error('grant code not found')
  }

  if (record.usedAt != null) {
    throw new Error('grant code already used')
  }

  if (record.expiresAt <= now()) {
    throw new Error('grant code expired')
  }

  record.usedAt = now()
  persistState(grantState)

  return {
    ownerId: record.ownerId,
    issuedAt: record.issuedAt,
    expiresAt: record.expiresAt,
    usedAt: record.usedAt,
  }
}
