export function readDocumentId(search = window.location.search): string | null {
  const params = new URLSearchParams(search)
  return params.get('id')
}

export function readEditMode(search = window.location.search): boolean {
  const params = new URLSearchParams(search)
  return params.get('edit') === '1'
}

export function replaceDocumentId(documentId: string, options: { edit?: boolean } = {}): void {
  const url = new URL(window.location.href)
  url.searchParams.set('id', documentId)
  if (options.edit) {
    url.searchParams.set('edit', '1')
  } else {
    url.searchParams.delete('edit')
  }
  window.history.replaceState(null, '', url.toString())
}

export function pushEditMode(edit: boolean): void {
  const url = new URL(window.location.href)
  if (edit) {
    url.searchParams.set('edit', '1')
  } else {
    url.searchParams.delete('edit')
  }
  window.history.pushState(null, '', url.toString())
}

export function buildShareUrl(documentId: string): string {
  const url = new URL(window.location.href)
  url.search = ''
  url.hash = ''
  url.searchParams.set('id', documentId)
  return url.toString()
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
