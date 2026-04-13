import { useState, useEffect } from 'react'
import { ComarkClient } from '@comark/react'
import mermaid from '@comark/react/plugins/mermaid'
import { Mermaid } from '@comark/react/plugins/mermaid'
import highlight from '@comark/react/plugins/highlight'
import githubLight from '@shikijs/themes/github-light'
import githubDark from '@shikijs/themes/github-dark'
import { decodeFromHash } from './lib/decode'

const plugins = [
  mermaid(),
  highlight({ themes: { light: githubLight, dark: githubDark } }),
]

const components = { mermaid: Mermaid }

export default function Viewer() {
  const [content, setContent] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) {
      setError('No content found in URL.')
      return
    }
    decodeFromHash(hash)
      .then((markdown) => setContent(markdown))
      .catch((err) => setError(`Failed to decode document: ${err.message}`))
  }, [])

  if (error) {
    return (
      <div className="viewer-error">
        <h2>Error</h2>
        <p>{error}</p>
        <a href={window.location.origin + window.location.pathname}>Create a new document</a>
      </div>
    )
  }

  if (content === null) {
    return <div className="viewer-loading">Loading document...</div>
  }

  return (
    <div className="viewer">
      <div className="viewer-toolbar">
        <button
          className="share-btn"
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          Copy Share URL
        </button>
      </div>
      <div className="viewer-content">
        <ComarkClient plugins={plugins} components={components}>
          {content}
        </ComarkClient>
      </div>
    </div>
  )
}
