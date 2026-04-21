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

export default function IdentitySettings({ auth }: IdentitySettingsProps) {
  const [status, setStatus] = useState<string | null>(null)
  const client = createPasskeyBackupClient({
    appName: 'Shareable Diagrams Browser',
    appHostname: browserSharedConfig.passkeyRpId,
  })
  const canPromptForBackup = shouldPromptForPasskeyBackup(auth.secret)

  const handleBackup = async () => {
    if (!auth.secret) {
      return
    }

    await client.backup(auth.secret, 'Shareable Diagrams Browser')
    markPasskeyBackupCreated()
    setStatus('Passkey backup saved')
  }

  const handleRestore = async () => {
    const secret = await client.restore()

    await auth.login(secret)
    setStatus('Passkey restored')
  }

  return (
    <section className="identity-settings" aria-label="Identity settings">
      <div className="identity-settings__actions">
        {canPromptForBackup ? (
          <button type="button" onClick={handleBackup}>
            Back up passkey
          </button>
        ) : null}
        <button type="button" onClick={handleRestore}>
          Restore passkey
        </button>
      </div>
      {status ? (
        <p className="identity-settings__status" aria-live="polite">
          {status}
        </p>
      ) : null}
    </section>
  )
}
