import {
  chmodSync,
  mkdirSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join } from 'node:path'
import { homedir } from 'node:os'
import { createHash, randomBytes, randomUUID } from 'node:crypto'
import { GRANT_CODE_TTL_MS } from '../../../src/lib/sharedConfig.ts'

function getGrantCodeStoreDir() {
  return join(homedir(), '.shareable-diagrams')
}

function getGrantCodeStorePath() {
  return join(getGrantCodeStoreDir(), 'grant-codes.json')
}

function ensurePrivateDirectory(dirPath) {
  mkdirSync(dirPath, { recursive: true, mode: 0o700 })
  chmodSync(dirPath, 0o700)
}

function atomicWriteFile(filePath, contents) {
  const dirPath = dirname(filePath)
  ensurePrivateDirectory(dirPath)

  const tempPath = `${filePath}.${process.pid}.${Math.random().toString(16).slice(2)}.tmp`
  try {
    writeFileSync(tempPath, contents, { mode: 0o600 })
    renameSync(tempPath, filePath)
  } finally {
    try {
      unlinkSync(tempPath)
    } catch {}
  }
}

function sha256Hex(value) {
  return createHash('sha256').update(value).digest('hex')
}

function normalizeRecord(record) {
  return {
    codeHash: typeof record.codeHash === 'string' ? record.codeHash : '',
    ownerId: typeof record.ownerId === 'string' ? record.ownerId : '',
    issuedAt: Number.isFinite(record.issuedAt) ? record.issuedAt : 0,
    expiresAt: Number.isFinite(record.expiresAt) ? record.expiresAt : 0,
    usedAt: Number.isFinite(record.usedAt) ? record.usedAt : null,
    reservedAt: Number.isFinite(record.reservedAt) ? record.reservedAt : null,
    reservationId: typeof record.reservationId === 'string' ? record.reservationId : null,
  }
}

function readGrantCodeStateFile() {
  try {
    const raw = readFileSync(getGrantCodeStorePath(), 'utf8')
    const parsed = JSON.parse(raw)

    if (parsed && typeof parsed === 'object' && Array.isArray(parsed.records)) {
      return parsed.records
        .filter((record) => record && typeof record === 'object')
        .map(normalizeRecord)
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
  atomicWriteFile(
    getGrantCodeStorePath(),
    `${JSON.stringify({ records: records.map(normalizeRecord) }, null, 2)}\n`,
  )
}

function ensureState(state) {
  if (!state || typeof state !== 'object') {
    return {
      records: readGrantCodeStateFile(),
      persist() {
        writeGrantCodeStateFile(this.records)
      },
    }
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

function findRecordByCodeHash(state, codeHash) {
  return state.records.find((entry) => entry && entry.codeHash === codeHash) ?? null
}

function validateAvailableRecord(record, now) {
  if (!record) {
    throw new Error('grant code not found')
  }

  if (record.usedAt != null) {
    throw new Error('grant code already used')
  }

  if (record.reservationId) {
    throw new Error('grant code already reserved')
  }

  if (record.expiresAt <= now) {
    throw new Error('grant code expired')
  }
}

export function reserveGrantCode({ code, now = () => Date.now(), state }) {
  if (typeof code !== 'string' || !code) {
    throw new Error('code is required')
  }

  const grantState = ensureState(state)
  const codeHash = sha256Hex(code)
  const record = findRecordByCodeHash(grantState, codeHash)
  const nowMs = now()

  validateAvailableRecord(record, nowMs)

  record.reservedAt = nowMs
  record.reservationId = randomUUID()
  persistState(grantState)

  return {
    codeHash: record.codeHash,
    ownerId: record.ownerId,
    issuedAt: record.issuedAt,
    expiresAt: record.expiresAt,
    reservedAt: record.reservedAt,
    reservationId: record.reservationId,
  }
}

export function finalizeGrantCode({ reservation, state, now = () => Date.now() }) {
  if (!reservation || typeof reservation !== 'object') {
    throw new Error('reservation is required')
  }

  const grantState = ensureState(state)
  const record = findRecordByCodeHash(grantState, reservation.codeHash)

  if (!record) {
    throw new Error('grant code not found')
  }

  if (record.usedAt != null) {
    throw new Error('grant code already used')
  }

  if (record.reservationId !== reservation.reservationId || record.reservationId == null) {
    throw new Error('grant code reservation missing')
  }

  record.usedAt = now()
  record.reservedAt = null
  record.reservationId = null
  persistState(grantState)

  return {
    ownerId: record.ownerId,
    issuedAt: record.issuedAt,
    expiresAt: record.expiresAt,
    usedAt: record.usedAt,
  }
}

export function releaseGrantCode({ reservation, state }) {
  if (!reservation || typeof reservation !== 'object') {
    return false
  }

  const grantState = ensureState(state)
  const record = findRecordByCodeHash(grantState, reservation.codeHash)

  if (!record || record.usedAt != null) {
    return false
  }

  if (record.reservationId !== reservation.reservationId) {
    return false
  }

  record.reservedAt = null
  record.reservationId = null
  persistState(grantState)
  return true
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
  const reservation = reserveGrantCode({ code, now, state })

  try {
    return finalizeGrantCode({ reservation, state, now })
  } catch (error) {
    releaseGrantCode({ reservation, state })
    throw error
  }
}
