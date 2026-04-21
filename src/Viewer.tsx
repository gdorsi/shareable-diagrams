import { useState } from 'react'
import { ComarkClient } from '@comark/react'
import mermaid from '@comark/react/plugins/mermaid'
import { Mermaid } from '@comark/react/plugins/mermaid'
import highlight from '@comark/react/plugins/highlight'
import githubLight from '@shikijs/themes/github-light'
import githubDark from '@shikijs/themes/github-dark'
import { buildShareUrl } from './lib/urlState'

const plugins = [
  mermaid(),
  highlight({ themes: { light: githubLight, dark: githubDark } }),
]

const components = { mermaid: Mermaid }

type GrantStatus = 'idle' | 'pending' | 'failed' | 'succeeded'

export default function Viewer({
  documentId,
  content,
  canEdit,
  canRequestGrant,
  grantStatus = 'idle',
  grantError = null,
  onEdit,
}: {
  documentId: string
  content: string
  canEdit: boolean
  canRequestGrant: boolean
  grantStatus?: GrantStatus
  grantError?: string | null
  onEdit?: () => void
}) {
  const [copied, setCopied] = useState<'markdown' | 'url' | null>(null)

  const handleCopy = async (text: string, kind: 'markdown' | 'url') => {
    await navigator.clipboard.writeText(text)
    setCopied(kind)
    setTimeout(() => setCopied(null), 2000)
  }

  let statusMessage: string | null = null

  if (canRequestGrant) {
    if (grantStatus === 'pending') {
      statusMessage = 'Grant link detected. Requesting edit access...'
    } else if (grantStatus === 'failed') {
      statusMessage = grantError
        ? `Grant request failed: ${grantError}`
        : 'Grant request failed. Ask the owner for a new grant link.'
    } else if (grantStatus === 'succeeded') {
      statusMessage = 'Edit access granted. Waiting for document permissions to refresh...'
    } else {
      statusMessage = 'This document is read-only. Ask the owner for a grant link if you need edit access.'
    }
  }

  return (
    <div className="viewer">
      <div className="viewer-toolbar">
        <button
          className="toolbar-btn"
          onClick={() => handleCopy(content, 'markdown')}
        >
          {copied === 'markdown' ? 'Copied!' : 'Copy Markdown'}
        </button>
        <button
          className="share-btn"
          onClick={() => handleCopy(buildShareUrl(documentId), 'url')}
        >
          {copied === 'url' ? 'Copied!' : 'Copy Share URL'}
        </button>
        {canEdit && onEdit ? (
          <button className="share-btn" onClick={onEdit}>
            Edit
          </button>
        ) : null}
      </div>
      {statusMessage ? <p className="viewer-note">{statusMessage}</p> : null}
      <div className="viewer-content">
        <ComarkClient plugins={plugins} components={components}>
          {content}
        </ComarkClient>
      </div>
    </div>
  )
}
