import { useEffect, useRef, useState } from 'react'
import { useAll, useSession } from 'jazz-tools/react'
import Encoder from './Encoder'
import Viewer from './Viewer'
import { grantScriptDocumentAccess } from './lib/localhostGrant'
import { shareableDiagramsApp } from './lib/schema'
import { clearGrantCode, readDocumentId, readGrantCode } from './lib/urlState'

type DocumentLocation = {
  hash: string
  search: string
}

type QueriedDocument = {
  id: string
  ownerId: string
  content: string
  $canEdit: boolean
}

export default function App() {
  const session = useSession()
  const grantingKeyRef = useRef<string | null>(null)
  const [location, setLocation] = useState<DocumentLocation>(() => ({
    hash: window.location.hash,
    search: window.location.search,
  }))

  useEffect(() => {
    const updateLocation = () => {
      setLocation({
        hash: window.location.hash,
        search: window.location.search,
      })
    }
    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState

    window.history.pushState = function (...args: Parameters<History['pushState']>) {
      originalPushState.apply(window.history, args)
      updateLocation()
    }

    window.history.replaceState = function (...args: Parameters<History['replaceState']>) {
      originalReplaceState.apply(window.history, args)
      updateLocation()
    }

    window.addEventListener('popstate', updateLocation)
    window.addEventListener('hashchange', updateLocation)

    return () => {
      window.history.pushState = originalPushState
      window.history.replaceState = originalReplaceState
      window.removeEventListener('popstate', updateLocation)
      window.removeEventListener('hashchange', updateLocation)
    }
  }, [])

  const documentId = readDocumentId(location.search)
  const grantCode = readGrantCode(location.hash)
  const documents = useAll(
    documentId
      ? shareableDiagramsApp.documents
          .where({ id: documentId })
          .select('id', 'ownerId', 'content', '$canEdit')
          .limit(1)
      : undefined,
  ) as QueriedDocument[] | undefined

  useEffect(() => {
    if (!grantCode) {
      grantingKeyRef.current = null
      return
    }

    if (!session) {
      return
    }

    const grantingKey = `${session.user_id}:${grantCode}`
    if (grantingKeyRef.current === grantingKey) {
      return
    }

    grantingKeyRef.current = grantingKey

    void (async () => {
      try {
        await grantScriptDocumentAccess({
          browserUserId: session.user_id,
          code: grantCode,
        })
        clearGrantCode()
      } catch (error) {
        grantingKeyRef.current = null
        console.error(error)
      }
    })()
  }, [grantCode, session])

  if (!documentId) {
    return <Encoder />
  }

  if (documents === undefined) {
    return <div className="viewer-loading">Loading document...</div>
  }

  const document = documents[0]

  if (!document) {
    return (
      <div className="viewer-error">
        <h2>Document not found</h2>
        <p>This document does not exist or is not accessible.</p>
        <a href={window.location.origin + window.location.pathname}>Create a new document</a>
      </div>
    )
  }

  if (document.$canEdit) {
    return (
      <Encoder
        document={{
          id: document.id,
          ownerId: document.ownerId,
          content: document.content,
        }}
      />
    )
  }

  return (
    <Viewer
      content={document.content}
      canRequestGrant={Boolean(session && session.user_id !== document.ownerId)}
    />
  )
}
