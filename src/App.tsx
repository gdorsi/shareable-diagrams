import { useState, useEffect } from 'react'
import { useCoState } from 'jazz-tools/react'
import Viewer from './Viewer'
import Encoder from './Encoder'
import { MarkdownDoc } from './lib/schema'

function readIdFromUrl(): string | null {
  const params = new URLSearchParams(window.location.search)
  return params.get('id')
}

export default function App() {
  const [docId, setDocId] = useState<string | null>(() => readIdFromUrl())

  useEffect(() => {
    const handlePopState = () => setDocId(readIdFromUrl())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const doc = useCoState(MarkdownDoc, docId ?? undefined)

  if (!docId) {
    return <Encoder />
  }

  if (!doc.$isLoaded) {
    if (doc.$jazz.loadingState === 'unavailable' || doc.$jazz.loadingState === 'unauthorized') {
      return (
        <div className="viewer-error">
          <h2>Document not found</h2>
          <p>This document does not exist or is not accessible.</p>
          <a href={window.location.origin + window.location.pathname}>Create a new document</a>
        </div>
      )
    }
    return <div className="viewer-loading">Loading document...</div>
  }

  const role = doc.$jazz.owner?.myRole()
  const canEdit = role === 'admin' || role === 'writer'

  return canEdit ? <Encoder doc={doc} /> : <Viewer doc={doc} />
}
