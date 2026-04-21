import { describe, expect, test } from 'vitest'
import {
  DEFAULT_GRANT_SERVICE_URL,
  DEFAULT_SHARE_BASE_URL,
  GRANT_CODE_TTL_MS,
  isApprovedGrantOrigin,
  resolveSharedConfig,
} from './sharedConfig'

describe('resolveSharedConfig', () => {
  test('uses explicit env values when present', () => {
    expect(
      resolveSharedConfig({
        VITE_JAZZ_APP_ID: 'app_prod',
        VITE_JAZZ_SERVER_URL: 'https://sync.example.com',
        VITE_JAZZ_PASSKEY_RP_ID: 'gdorsi.github.io',
        SHARE_DIAGRAM_BASE_URL: 'https://gdorsi.github.io/shareable-diagrams/',
      }),
    ).toEqual({
      appId: 'app_prod',
      serverUrl: 'https://sync.example.com',
      passkeyRpId: 'gdorsi.github.io',
      shareBaseUrl: 'https://gdorsi.github.io/shareable-diagrams/',
      grantServiceUrl: DEFAULT_GRANT_SERVICE_URL,
      grantCodeTtlMs: GRANT_CODE_TTL_MS,
    })
  })

  test('falls back to the production defaults', () => {
    expect(resolveSharedConfig({})).toMatchObject({
      shareBaseUrl: DEFAULT_SHARE_BASE_URL,
      grantServiceUrl: DEFAULT_GRANT_SERVICE_URL,
      grantCodeTtlMs: GRANT_CODE_TTL_MS,
    })
  })
})

describe('isApprovedGrantOrigin', () => {
  test('accepts the production site and local dev origins', () => {
    expect(isApprovedGrantOrigin('https://gdorsi.github.io')).toBe(true)
    expect(isApprovedGrantOrigin('http://localhost:5173')).toBe(true)
    expect(isApprovedGrantOrigin('http://127.0.0.1:4173')).toBe(true)
  })

  test('rejects everything else', () => {
    expect(isApprovedGrantOrigin('https://evil.example')).toBe(false)
    expect(isApprovedGrantOrigin('file://local')).toBe(false)
  })
})
