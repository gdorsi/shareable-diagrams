export function readDocumentId(search = window.location.search): string | null {
  const params = new URLSearchParams(search)
  return params.get('id')
}

export function replaceDocumentId(documentId: string): void {
  const url = new URL(window.location.href)
  url.searchParams.set('id', documentId)
  window.history.replaceState(null, '', url.toString())
}

export function readGrantCode(hash = window.location.hash): string | null {
  const value = hash.startsWith('#') ? hash.slice(1) : hash
  const params = new URLSearchParams(value)
  return params.get('grantCode')
}

export function clearGrantCode(): void {
  const url = new URL(window.location.href)
  url.hash = ''
  window.history.replaceState(null, '', url.toString())
}
