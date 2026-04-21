import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { mkdtempSync, rmSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { consumeGrantCode, issueGrantCode } from './grant-code-store.src.mjs'
import { loadOrCreateScriptSecret } from './identity-store.src.mjs'
import { createGrantServer } from './grant-server.src.mjs'
import { shareableDiagramsApp } from '../../../src/lib/schema.ts'

const testHome = vi.hoisted(() => ({ current: '' }))

vi.mock('node:os', () => ({
  homedir: () => testHome.current,
}))

describe('script identity store', () => {
  beforeEach(() => {
    testHome.current = mkdtempSync('/tmp/shareable-diagrams-')
  })

  afterEach(() => {
    rmSync(testHome.current, { recursive: true, force: true })
  })

  test('persists the script identity with private directory and file permissions', async () => {
    const secret = await loadOrCreateScriptSecret()

    expect(secret).toBeTypeOf('string')
    expect(secret).not.toHaveLength(0)

    const identityDir = join(testHome.current, '.shareable-diagrams')
    const identityFile = join(identityDir, 'script-identity.json')

    expect(statSync(identityDir).mode & 0o777).toBe(0o700)
    expect(statSync(identityFile).mode & 0o777).toBe(0o600)
  })
})

describe('grant code store', () => {
  beforeEach(() => {
    testHome.current = mkdtempSync('/tmp/shareable-diagrams-')
  })

  afterEach(() => {
    rmSync(testHome.current, { recursive: true, force: true })
  })

  test('issueGrantCode and consumeGrantCode use the default disk-backed store', () => {
    const code = issueGrantCode({
      ownerId: 'owner-123',
    })

    const consumed = consumeGrantCode({
      code,
    })

    expect(consumed.ownerId).toBe('owner-123')
    expect(() =>
      consumeGrantCode({
        code,
      }),
    ).toThrow('grant code already used')

    const storeDir = join(testHome.current, '.shareable-diagrams')
    const storeFile = join(storeDir, 'grant-codes.json')

    expect(statSync(storeDir).mode & 0o777).toBe(0o700)
    expect(statSync(storeFile).mode & 0o777).toBe(0o600)
  })

  test('consumeGrantCode rejects expired default disk-backed codes', () => {
    const code = issueGrantCode({
      ownerId: 'owner-123',
      ttlMs: 1,
      now: () => 1_000,
    })

    expect(() =>
      consumeGrantCode({
        code,
        now: () => 1_002,
      }),
    ).toThrow('grant code expired')
  })
})

describe('grant server', () => {
  beforeEach(() => {
    testHome.current = mkdtempSync('/tmp/shareable-diagrams-')
  })

  afterEach(() => {
    rmSync(testHome.current, { recursive: true, force: true })
  })

  test('rejects unapproved origins before any Jazz write', async () => {
    const db = {
      upsertDurable: vi.fn(),
    }
    const server = createGrantServer({ db })
    const code = issueGrantCode({ ownerId: 'owner-123' })

    const response = await server.handle(
      new Request('http://127.0.0.1:43110/grant-access', {
        method: 'POST',
        headers: {
          origin: 'https://evil.example',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          browserUserId: 'browser-1',
          code,
        }),
      }),
    )

    expect(response.status).toBe(403)
    await expect(response.text()).resolves.toContain('grant origin not approved')
    expect(db.upsertDurable).not.toHaveBeenCalled()
    expect(() =>
      consumeGrantCode({
        code,
      }),
    ).not.toThrow()
  })

  test('returns approved CORS headers for preflight requests', async () => {
    const db = {
      upsertDurable: vi.fn(),
    }
    const server = createGrantServer({ db })

    const response = await server.handle(
      new Request('http://127.0.0.1:43110/grant-access', {
        method: 'OPTIONS',
        headers: {
          origin: 'https://gdorsi.github.io',
          'access-control-request-method': 'POST',
        },
      }),
    )

    expect(response.status).toBe(204)
    expect(response.headers.get('access-control-allow-origin')).toBe('https://gdorsi.github.io')
    expect(response.headers.get('access-control-allow-private-network')).toBe('true')
    expect(response.headers.get('access-control-allow-methods')).toContain('POST')
    expect(response.headers.get('access-control-allow-headers')).toContain('content-type')
    expect(db.upsertDurable).not.toHaveBeenCalled()
  })

  test('persists a grant and waits for durable write before returning success', async () => {
    let resolveWrite
    const writePromise = new Promise((resolve) => {
      resolveWrite = resolve
    })
    const db = {
      upsertDurable: vi.fn().mockReturnValue(writePromise),
    }
    const server = createGrantServer({ db })
    const code = issueGrantCode({ ownerId: 'owner-123' })

    const responsePromise = server.handle(
      new Request('http://127.0.0.1:43110/grant-access', {
        method: 'POST',
        headers: {
          origin: 'https://gdorsi.github.io',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          browserUserId: 'browser-1',
          code,
        }),
      }),
    )

    let settled = false
    responsePromise.then(() => {
      settled = true
    })

    await Promise.resolve()
    expect(settled).toBe(false)

    resolveWrite()
    const response = await responsePromise

    expect(response.status).toBe(200)
    expect(response.headers.get('access-control-allow-origin')).toBe('https://gdorsi.github.io')
    expect(response.headers.get('access-control-allow-private-network')).toBe('true')
    expect(db.upsertDurable).toHaveBeenCalledWith(
      shareableDiagramsApp.documentWriteGrants,
      {
        ownerId: 'owner-123',
        granteeId: 'browser-1',
      },
      {
        id: 'grant:owner-123:browser-1',
      },
    )
  })
})
