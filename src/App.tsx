import { useEffect, useRef, useState } from 'react'
import { useAll, useSession, type LocalFirstAuth } from 'jazz-tools/react'
import Encoder from './Encoder'
import IdentitySettings from './components/IdentitySettings'
import Viewer from './Viewer'
import { grantScriptDocumentAccess } from './lib/localhostGrant'
import { shareableDiagramsApp } from './lib/schema'
import {
  clearGrantCode,
  pushEditMode,
  readDocumentId,
  readEditMode,
  readGrantCode,
} from './lib/urlState'

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

type GrantStatus = 'idle' | 'pending' | 'failed' | 'succeeded'

type GrantRequestState = {
  code: string | null
  documentId: string | null
  error: string | null
  status: GrantStatus
}

function readGrantErrorMessage(error: unknown): string {
  if (error instanceof Error && error.message.trim()) {
    return error.message.trim()
  }

  return 'Grant request failed'
}

type AppProps = {
  auth: LocalFirstAuth
}

export default function App({ auth }: AppProps) {
  return <AppBody auth={auth} />
}

function AppBody({ auth }: AppProps) {
  const session = useSession()
  const grantingKeyRef = useRef<string | null>(null)
  const [location, setLocation] = useState<DocumentLocation>(() => ({
    hash: window.location.hash,
    search: window.location.search,
  }))
  const [grantRequest, setGrantRequest] = useState<GrantRequestState>({
    code: null,
    documentId: null,
    error: null,
    status: 'idle',
  })

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
  const editMode = readEditMode(location.search)
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
      setGrantRequest((current) => {
        if (current.status === 'succeeded') {
          return current
        }

        if (current.status === 'idle' && current.documentId === documentId) {
          return current
        }

        return {
          code: null,
          documentId,
          error: null,
          status: 'idle',
        }
      })
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
    setGrantRequest({
      code: grantCode,
      documentId,
      error: null,
      status: 'pending',
    })

    void (async () => {
      try {
        await grantScriptDocumentAccess({
          browserUserId: session.user_id,
          code: grantCode,
        })
        setGrantRequest({
          code: grantCode,
          documentId,
          error: null,
          status: 'succeeded',
        })
        clearGrantCode()
      } catch (error) {
        setGrantRequest({
          code: grantCode,
          documentId,
          error: readGrantErrorMessage(error),
          status: 'failed',
        })
      }
    })()
  }, [documentId, grantCode, session])

  if (!documentId) {
    return (
      <>
        <IdentitySettings auth={auth} />
        <Encoder />
      </>
    )
  }

  if (documents === undefined) {
    return (
      <>
        <IdentitySettings auth={auth} />
        <div className="viewer-loading">Loading document...</div>
      </>
    )
  }

  const document = documents[0]

  if (!document) {
    return (
      <>
        <IdentitySettings auth={auth} />
        <div className="viewer-error">
          <h2>Document not found</h2>
          <p>This document does not exist or is not accessible.</p>
          <a href={window.location.origin + window.location.pathname}>Create a new document</a>
        </div>
      </>
    )
  }

  if (document.$canEdit && editMode) {
    return (
      <>
        <IdentitySettings auth={auth} />
        <Encoder
          document={{
            id: document.id,
            ownerId: document.ownerId,
            content: document.content,
          }}
        />
      </>
    )
  }

  const canEdit = Boolean(document.$canEdit)
  const canRequestGrant = Boolean(
    session && !canEdit && session.user_id !== document.ownerId,
  )
  const activeGrantState =
    grantRequest.documentId === document.id ? grantRequest : null
  let viewerGrantStatus: GrantStatus = 'idle'
  let viewerGrantError: string | null = null

  if (canRequestGrant) {
    if (grantCode) {
      viewerGrantStatus =
        activeGrantState?.code === grantCode ? activeGrantState.status : 'pending'
      viewerGrantError =
        activeGrantState?.code === grantCode ? activeGrantState.error : null
    } else if (activeGrantState?.status === 'succeeded') {
      viewerGrantStatus = 'succeeded'
    } else if (activeGrantState?.status === 'failed') {
      viewerGrantStatus = 'failed'
      viewerGrantError = activeGrantState.error
    }
  }

  return (
    <>
      <IdentitySettings auth={auth} />
      <Viewer
        documentId={document.id}
        content={document.content}
        canEdit={canEdit}
        canRequestGrant={canRequestGrant}
        grantStatus={viewerGrantStatus}
        grantError={viewerGrantError}
        onEdit={() => pushEditMode(true)}
      />
    </>
  )
}
