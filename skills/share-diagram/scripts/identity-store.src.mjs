import { chmodSync, mkdirSync, readFileSync, renameSync, unlinkSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { homedir } from 'node:os'
import { createDb, generateAuthSecret } from 'jazz-tools'
import { resolveSharedConfig } from '../../../src/lib/sharedConfig.ts'

function getScriptIdentityDir() {
  return join(homedir(), '.shareable-diagrams')
}

function getScriptIdentityPath() {
  return join(getScriptIdentityDir(), 'script-identity.json')
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

function readScriptIdentityFile() {
  try {
    const raw = readFileSync(getScriptIdentityPath(), 'utf8')
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
  atomicWriteFile(getScriptIdentityPath(), `${JSON.stringify({ secret }, null, 2)}\n`)
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
