import { describe, expect, test } from 'vitest'
import {
  DEFAULT_GRANT_SERVICE_URL,
  DEFAULT_SHARE_BASE_URL,
  GRANT_CODE_TTL_MS,
  JAZZ_APP_ID,
  JAZZ_SERVER_URL,
  isApprovedGrantOrigin,
  resolveSharedConfig,
} from './sharedConfig'

describe('resolveSharedConfig', () => {
  test('keeps the Jazz app identity and server URL pinned in code', () => {
    expect(
      resolveSharedConfig({
        VITE_JAZZ_APP_ID: 'app_prod',
        VITE_JAZZ_SERVER_URL: 'https://sync.example.com',
        VITE_JAZZ_PASSKEY_RP_ID: 'gdorsi.github.io',
        VITE_SHARE_DIAGRAM_BASE_URL: 'https://gdorsi.github.io/shareable-diagrams/',
        VITE_SHARE_DIAGRAM_GRANT_SERVICE_URL: 'https://grant.example.com',
      }),
    ).toEqual({
      appId: JAZZ_APP_ID,
      serverUrl: JAZZ_SERVER_URL,
      passkeyRpId: 'gdorsi.github.io',
      shareBaseUrl: 'https://gdorsi.github.io/shareable-diagrams/',
      grantServiceUrl: 'https://grant.example.com',
      grantCodeTtlMs: GRANT_CODE_TTL_MS,
    })
  })

  test('uses the Node-side share and grant env values when present', () => {
    expect(
      resolveSharedConfig({
        SHARE_DIAGRAM_BASE_URL: 'https://node.example.com/share/',
        SHARE_DIAGRAM_GRANT_SERVICE_URL: 'https://node.example.com/grant',
      }),
    ).toEqual({
      appId: JAZZ_APP_ID,
      serverUrl: JAZZ_SERVER_URL,
      passkeyRpId: 'gdorsi.github.io',
      shareBaseUrl: 'https://node.example.com/share/',
      grantServiceUrl: 'https://node.example.com/grant',
      grantCodeTtlMs: GRANT_CODE_TTL_MS,
    })
  })

  test('prefers unprefixed Node-side values when both env forms are present', () => {
    expect(
      resolveSharedConfig({
        SHARE_DIAGRAM_BASE_URL: 'https://node.example.com/share/',
        VITE_SHARE_DIAGRAM_BASE_URL: 'https://vite.example.com/share/',
        SHARE_DIAGRAM_GRANT_SERVICE_URL: 'https://node.example.com/grant',
        VITE_SHARE_DIAGRAM_GRANT_SERVICE_URL: 'https://vite.example.com/grant',
      }),
    ).toEqual({
      appId: JAZZ_APP_ID,
      serverUrl: JAZZ_SERVER_URL,
      passkeyRpId: 'gdorsi.github.io',
      shareBaseUrl: 'https://node.example.com/share/',
      grantServiceUrl: 'https://node.example.com/grant',
      grantCodeTtlMs: GRANT_CODE_TTL_MS,
    })
  })

  test('falls back to the production defaults', () => {
    expect(resolveSharedConfig({})).toEqual({
      appId: JAZZ_APP_ID,
      serverUrl: JAZZ_SERVER_URL,
      passkeyRpId: 'gdorsi.github.io',
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
