import { describe, expect, test, vi } from 'vitest'
import { consumeGrantCode, issueGrantCode } from './grant-code-store.src.mjs'
import { createGrantServer } from './grant-server.src.mjs'

describe('grant code store', () => {
  test('issueGrantCode can be consumed once and then rejects reuse', () => {
    const state = { records: [] }
    const code = issueGrantCode({
      ownerId: 'owner-123',
      ttlMs: 60_000,
      now: () => 1_000,
      state,
    })

    const consumed = consumeGrantCode({
      code,
      now: () => 2_000,
      state,
    })

    expect(consumed.ownerId).toBe('owner-123')
    expect(() =>
      consumeGrantCode({
        code,
        now: () => 3_000,
        state,
      }),
    ).toThrow('grant code already used')
  })
})

describe('grant server', () => {
  test('rejects unapproved origins before any Jazz write', async () => {
    const db = {
      upsert: vi.fn(),
    }
    const server = createGrantServer({
      db,
      grantCodeState: { records: [] },
    })

    const response = await server.handle(
      new Request('http://127.0.0.1:43110/grant-access', {
        method: 'POST',
        headers: {
          origin: 'https://evil.example',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          browserUserId: 'browser-1',
          code: 'grant-1',
        }),
      }),
    )

    expect(response.status).toBe(403)
    await expect(response.text()).resolves.toContain('grant origin not approved')
    expect(db.upsert).not.toHaveBeenCalled()
  })
})
