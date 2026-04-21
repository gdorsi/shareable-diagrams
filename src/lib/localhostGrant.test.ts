import { afterEach, describe, expect, test, vi } from 'vitest'
import { grantScriptDocumentAccess } from './localhostGrant'

const fetchMock = vi.fn()

describe('grantScriptDocumentAccess', () => {
  afterEach(() => {
    fetchMock.mockReset()
    vi.unstubAllGlobals()
  })

  test('posts the code and browser user id to localhost', async () => {
    vi.stubGlobal(
      'fetch',
      fetchMock.mockResolvedValue(
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
      ),
    )

    await grantScriptDocumentAccess({
      browserUserId: 'browser-user',
      code: 'grant-123',
      grantServiceUrl: 'http://127.0.0.1:43110',
    })

    expect(fetchMock).toHaveBeenCalledWith(
      'http://127.0.0.1:43110/grant-access',
      expect.objectContaining({
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ browserUserId: 'browser-user', code: 'grant-123' }),
      }),
    )
  })

  test('throws the server message on failure', async () => {
    vi.stubGlobal(
      'fetch',
      fetchMock.mockResolvedValue(
        new Response(JSON.stringify({ error: 'invalid grant code' }), {
          status: 403,
          headers: { 'content-type': 'application/json' },
        }),
      ),
    )

    await expect(
      grantScriptDocumentAccess({
        browserUserId: 'browser-user',
        code: 'bad',
        grantServiceUrl: 'http://127.0.0.1:43110',
      }),
    ).rejects.toThrow('invalid grant code')
  })
})
