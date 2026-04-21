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
    const payload = await response.json().catch(() => ({ error: 'grant request failed' }))
    throw new Error(payload.error ?? 'grant request failed')
  }
}
