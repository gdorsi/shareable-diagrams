import { useEffect, useState } from 'react'
import { ComarkClient } from '@comark/react'
import mermaid from '@comark/react/plugins/mermaid'
import { Mermaid } from '@comark/react/plugins/mermaid'
import highlight from '@comark/react/plugins/highlight'
import githubLight from '@shikijs/themes/github-light'
import githubDark from '@shikijs/themes/github-dark'
import { useDb, useSession } from 'jazz-tools/react'
import { defaultMarkdown } from './lib/defaultMarkdown'
import { shareableDiagramsApp } from './lib/schema'
import { buildShareUrl, replaceDocumentId } from './lib/urlState'

const plugins = [
  mermaid(),
  highlight({ themes: { light: githubLight, dark: githubDark } }),
]

const components = { mermaid: Mermaid }
const UPDATE_DEBOUNCE_MS = 300

type DocumentRow = {
  id: string
  ownerId: string
  content: string
}

export default function Encoder({ document }: { document?: DocumentRow } = {}) {
  const db = useDb()
  const session = useSession()
  const [row, setRow] = useState<DocumentRow | undefined>(document)
  const [markdown, setMarkdown] = useState(document?.content ?? defaultMarkdown)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!document) {
      return
    }

    setRow(document)
    setMarkdown(document.content)
  }, [document])

  useEffect(() => {
    if (!row || markdown === row.content) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      db.update(shareableDiagramsApp.documents, row.id, { content: markdown })
      setRow({ ...row, content: markdown })
    }, UPDATE_DEBOUNCE_MS)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [db, markdown, row])

  const currentRow = row ?? document
  const shareUrl = currentRow ? buildShareUrl(currentRow.id) : ''

  const getOrCreateRow = () => {
    if (currentRow) {
      return currentRow
    }

    if (!session) {
      return null
    }

    const inserted = db.insert(shareableDiagramsApp.documents, {
      ownerId: session.user_id,
      content: markdown,
    }).value as DocumentRow

    setRow(inserted)
    replaceDocumentId(inserted.id, { edit: true })

    return inserted
  }

  const handleCopy = async () => {
    const nextRow = getOrCreateRow()
    if (!nextRow) {
      return
    }

    await navigator.clipboard.writeText(buildShareUrl(nextRow.id))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="encoder">
      <div className="encoder-header">
        <h1>Shareable Diagrams</h1>
        <p>Paste or write markdown with Mermaid diagrams, then share the URL.</p>
      </div>
      <div className="encoder-panels">
        <div className="encoder-input">
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div className="encoder-preview">
          <ComarkClient plugins={plugins} components={components}>
            {markdown}
          </ComarkClient>
        </div>
      </div>
      <div className="encoder-footer">
        <button
          className="copy-btn"
          onClick={handleCopy}
          disabled={!session && !shareUrl}
        >
          {copied ? 'Copied!' : 'Copy Shareable URL'}
        </button>
      </div>
    </div>
  )
}
