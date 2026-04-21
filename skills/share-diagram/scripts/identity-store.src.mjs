import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { homedir } from 'node:os'
import { createDb, generateAuthSecret } from 'jazz-tools'
import { resolveSharedConfig } from '../../../src/lib/sharedConfig.ts'

const SCRIPT_IDENTITY_DIR = join(homedir(), '.shareable-diagrams')
const SCRIPT_IDENTITY_PATH = join(SCRIPT_IDENTITY_DIR, 'script-identity.json')

function readScriptIdentityFile() {
  try {
    const raw = readFileSync(SCRIPT_IDENTITY_PATH, 'utf8')
    const parsed = JSON.parse(raw)

    if (parsed && typeof parsed === 'object' && typeof parsed.secret === 'string' && parsed.secret) {
      return parsed.secret
    }
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') {
      return null
    }
    throw error
  }

  return null
}

function writeScriptIdentityFile(secret) {
  mkdirSync(dirname(SCRIPT_IDENTITY_PATH), { recursive: true })
  writeFileSync(
    SCRIPT_IDENTITY_PATH,
    `${JSON.stringify({ secret }, null, 2)}\n`,
    'utf8',
  )
}

export async function loadOrCreateScriptSecret() {
  const existingSecret = readScriptIdentityFile()
  if (existingSecret) {
    return existingSecret
  }

  const secret = generateAuthSecret()
  writeScriptIdentityFile(secret)
  return secret
}

export async function createScriptDb(env = process.env) {
  const config = resolveSharedConfig(env)
  const secret = await loadOrCreateScriptSecret()
  const db = await createDb({
    appId: config.appId,
    serverUrl: config.serverUrl,
    secret,
  })
  const ownerId = db.getAuthState().session?.user_id

  if (!ownerId) {
    throw new Error('script identity has no ownerId')
  }

  return {
    db,
    ownerId,
    config,
    secret,
  }
}
