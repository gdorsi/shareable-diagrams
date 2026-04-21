import { useState } from 'react'
import { type LocalFirstAuth } from 'jazz-tools/react'
import { browserSharedConfig } from '../lib/jazzConfig'
import {
  createPasskeyBackupClient,
  markPasskeyBackupCreated,
  shouldPromptForPasskeyBackup,
} from '../lib/passkeyBackup'

type IdentitySettingsProps = {
  auth: LocalFirstAuth
}

type Feedback = {
  kind: 'success' | 'error'
  text: string
}

function readErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error && error.message.trim()) {
    return error.message.trim()
  }

  return fallback
}

export default function IdentitySettings({ auth }: IdentitySettingsProps) {
  const [feedback, setFeedback] = useState<Feedback | null>(null)
  const [isPending, setIsPending] = useState(false)
  const client = createPasskeyBackupClient({
    appName: 'Shareable Diagrams Browser',
    appHostname: browserSharedConfig.passkeyRpId,
  })
  const canPromptForBackup = shouldPromptForPasskeyBackup(auth.secret)

  const handleBackup = async () => {
    if (!auth.secret || isPending) {
      return
    }

    setIsPending(true)
    setFeedback(null)

    try {
      await client.backup(auth.secret, 'Shareable Diagrams Browser')
      markPasskeyBackupCreated()
      setFeedback({ kind: 'success', text: 'Passkey backup saved' })
    } catch (error) {
      setFeedback({
        kind: 'error',
        text: readErrorMessage(error, 'Passkey backup failed'),
      })
    } finally {
      setIsPending(false)
    }
  }

  const handleRestore = async () => {
    if (isPending) {
      return
    }

    setIsPending(true)
    setFeedback(null)

    try {
      const secret = await client.restore()

      await auth.login(secret)
      markPasskeyBackupCreated()
      setFeedback({ kind: 'success', text: 'Passkey restored' })
    } catch (error) {
      setFeedback({
        kind: 'error',
        text: readErrorMessage(error, 'Passkey restore failed'),
      })
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section className="identity-settings" aria-label="Identity settings">
      <div className="identity-settings__actions">
        {canPromptForBackup ? (
          <button
            type="button"
            className="identity-settings__btn identity-settings__btn--primary"
            onClick={handleBackup}
            disabled={isPending}
          >
            Save passkey
          </button>
        ) : null}
        <button
          type="button"
          className="identity-settings__btn"
          onClick={handleRestore}
          disabled={isPending}
        >
          Sign in
        </button>
      </div>
      {feedback ? (
        <p
          className={`identity-settings__status identity-settings__status--${feedback.kind}`}
          aria-live={feedback.kind === 'error' ? 'assertive' : 'polite'}
          role={feedback.kind === 'error' ? 'alert' : undefined}
        >
          {feedback.text}
        </p>
      ) : null}
    </section>
  )
}
