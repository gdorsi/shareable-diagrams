import { BrowserPasskeyBackup } from 'jazz-tools/passkey-backup'

const PASSKEY_BACKUP_CREATED_KEY = 'shareable-diagrams.passkey-backup-created'

type PasskeyBackupOptions = {
  appName: string
  appHostname: string
}

export function createPasskeyBackupClient({
  appName,
  appHostname,
}: PasskeyBackupOptions) {
  return new BrowserPasskeyBackup({
    appName,
    appHostname,
  })
}

export function markPasskeyBackupCreated() {
  localStorage.setItem(PASSKEY_BACKUP_CREATED_KEY, 'true')
}

export function shouldPromptForPasskeyBackup(secret: string | null) {
  return Boolean(secret) && localStorage.getItem(PASSKEY_BACKUP_CREATED_KEY) === null
}
