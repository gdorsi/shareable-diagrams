// @vitest-environment jsdom

import { beforeEach, describe, expect, test, vi } from 'vitest'
import {
  createPasskeyBackupClient,
  markPasskeyBackupCreated,
  shouldPromptForPasskeyBackup,
} from './passkeyBackup'

const {
  mockBackup,
  mockRestore,
  mockConstructor,
  MockBrowserPasskeyBackup,
} = vi.hoisted(() => ({
  mockBackup: vi.fn(),
  mockRestore: vi.fn(),
  mockConstructor: vi.fn(),
  MockBrowserPasskeyBackup: class BrowserPasskeyBackup {
    backup = mockBackup
    restore = mockRestore

    constructor(options: unknown) {
      mockConstructor(options)
    }
  },
}))

vi.mock('jazz-tools/passkey-backup', () => {
  return {
    BrowserPasskeyBackup: MockBrowserPasskeyBackup,
  }
})

describe('passkeyBackup', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
  })

  test('shouldPromptForPasskeyBackup returns true until a backup is created', () => {
    expect(shouldPromptForPasskeyBackup('secret')).toBe(true)

    markPasskeyBackupCreated()

    expect(shouldPromptForPasskeyBackup('secret')).toBe(false)
  })

  test('createPasskeyBackupClient proxies backup and restore to BrowserPasskeyBackup', async () => {
    const client = createPasskeyBackupClient({
      appName: 'Shareable Diagrams Browser',
      appHostname: 'shareable.example',
    })

    expect(client).toBeInstanceOf(MockBrowserPasskeyBackup)
    await client.backup('secret', 'Shareable Diagrams Browser')
    await client.restore()

    expect(mockConstructor).toHaveBeenCalledWith({
      appName: 'Shareable Diagrams Browser',
      appHostname: 'shareable.example',
    })
    expect(mockBackup).toHaveBeenCalledWith('secret', 'Shareable Diagrams Browser')
    expect(mockRestore).toHaveBeenCalledTimes(1)
  })
})
