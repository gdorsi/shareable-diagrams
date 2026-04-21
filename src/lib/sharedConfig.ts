export const DEFAULT_SHARE_BASE_URL = 'https://gdorsi.github.io/shareable-diagrams/'
export const DEFAULT_GRANT_SERVICE_URL = 'http://127.0.0.1:43110'
export const DEFAULT_PASSKEY_RP_ID = 'gdorsi.github.io'
export const GRANT_CODE_TTL_MS = 10 * 60 * 1000

type EnvInput = Record<string, string | undefined>

export interface SharedConfig {
  appId: string
  serverUrl: string
  passkeyRpId: string
  shareBaseUrl: string
  grantServiceUrl: string
  grantCodeTtlMs: number
}

export function resolveSharedConfig(env: EnvInput): SharedConfig {
  return {
    appId: env.VITE_JAZZ_APP_ID ?? 'shareable-diagrams',
    serverUrl: env.VITE_JAZZ_SERVER_URL ?? 'https://cloud.jazz.tools',
    passkeyRpId: env.VITE_JAZZ_PASSKEY_RP_ID ?? DEFAULT_PASSKEY_RP_ID,
    shareBaseUrl:
      env.VITE_SHARE_DIAGRAM_BASE_URL ?? env.SHARE_DIAGRAM_BASE_URL ?? DEFAULT_SHARE_BASE_URL,
    grantServiceUrl:
      env.VITE_SHARE_DIAGRAM_GRANT_SERVICE_URL ??
      env.SHARE_DIAGRAM_GRANT_SERVICE_URL ??
      DEFAULT_GRANT_SERVICE_URL,
    grantCodeTtlMs: GRANT_CODE_TTL_MS,
  }
}

export function isApprovedGrantOrigin(origin: string): boolean {
  if (origin === 'https://gdorsi.github.io') return true

  try {
    const url = new URL(origin)
    return (
      url.protocol === 'http:' &&
      (url.hostname === 'localhost' || url.hostname === '127.0.0.1')
    )
  } catch {
    return false
  }
}
