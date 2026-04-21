import { DEFAULT_GRANT_SERVICE_URL } from './sharedConfig'

export interface GrantScriptDocumentAccessInput {
  browserUserId: string
  code: string
  grantServiceUrl?: string
}

export async function grantScriptDocumentAccess({
  browserUserId,
  code,
  grantServiceUrl = DEFAULT_GRANT_SERVICE_URL,
}: GrantScriptDocumentAccessInput): Promise<void> {
  const response = await fetch(`${grantServiceUrl}/grant-access`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ browserUserId, code }),
  })

  if (!response.ok) {
    let message: string | undefined

    const payload = await response.clone().json().catch(() => null)
    if (payload && typeof payload === 'object') {
      if (typeof payload.error === 'string' && payload.error.trim()) {
        message = payload.error.trim()
      } else if (typeof payload.message === 'string' && payload.message.trim()) {
        message = payload.message.trim()
      }
    }

    if (!message) {
      const text = await response.text().catch(() => '')
      if (text.trim()) {
        message = text.trim()
      }
    }

    throw new Error(message || response.statusText || 'grant request failed')
  }
}
