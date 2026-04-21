// @vitest-environment jsdom

import { cleanup, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import IdentitySettings from './IdentitySettings'

const {
  mockCreatePasskeyBackupClient,
  mockBackup,
  mockRestore,
  mockLogin,
} = vi.hoisted(() => ({
  mockCreatePasskeyBackupClient: vi.fn(),
  mockBackup: vi.fn(),
  mockRestore: vi.fn(),
  mockLogin: vi.fn(),
}))

vi.mock('../lib/passkeyBackup', async () => {
  const actual = await vi.importActual<typeof import('../lib/passkeyBackup')>(
    '../lib/passkeyBackup',
  )

  return {
    ...actual,
    createPasskeyBackupClient: mockCreatePasskeyBackupClient,
  }
})

describe('IdentitySettings', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.clearAllMocks()
    mockCreatePasskeyBackupClient.mockReturnValue({
      backup: mockBackup,
      restore: mockRestore,
    })
    mockLogin.mockResolvedValue(undefined)
  })

  afterEach(() => {
    cleanup()
  })

  test('hides the backup prompt when there is no secret', () => {
    render(
      <IdentitySettings
        auth={{
          secret: null,
          isLoading: false,
          login: mockLogin,
          signOut: vi.fn(),
        }}
      />,
    )

    expect(screen.queryByRole('button', { name: 'Back up passkey' })).toBeNull()
    expect(screen.getByRole('button', { name: 'Restore passkey' })).toBeTruthy()
  })

  test('shows the backup prompt when a secret exists', () => {
    render(
      <IdentitySettings
        auth={{
          secret: 'secret',
          isLoading: false,
          login: mockLogin,
          signOut: vi.fn(),
        }}
      />,
    )

    expect(screen.getByRole('button', { name: 'Back up passkey' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Restore passkey' })).toBeTruthy()
  })

  test('disables both actions while a backup is in flight', async () => {
    let resolveBackup = () => {}
    mockBackup.mockImplementation(
      () =>
        new Promise<void>((resolve) => {
          resolveBackup = () => resolve()
        }),
    )

    render(
      <IdentitySettings
        auth={{
          secret: 'secret',
          isLoading: false,
          login: mockLogin,
          signOut: vi.fn(),
        }}
      />,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Back up passkey' }))

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: 'Back up passkey' }) as HTMLButtonElement,
      ).toHaveProperty('disabled', true)
      expect(
        screen.getByRole('button', { name: 'Restore passkey' }) as HTMLButtonElement,
      ).toHaveProperty('disabled', true)
    })

    resolveBackup()
    await waitFor(() => {
      expect(screen.getByText('Passkey backup saved')).toBeTruthy()
    })
  })

  test('hides the backup prompt and shows success after backup completes', async () => {
    mockBackup.mockResolvedValue(undefined)

    render(
      <IdentitySettings
        auth={{
          secret: 'secret',
          isLoading: false,
          login: mockLogin,
          signOut: vi.fn(),
        }}
      />,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Back up passkey' }))

    await waitFor(() => {
      expect(screen.getByText('Passkey backup saved')).toBeTruthy()
    })

    expect(screen.queryByRole('button', { name: 'Back up passkey' })).toBeNull()
    expect(screen.getByRole('button', { name: 'Restore passkey' })).toBeTruthy()
  })

  test('shows an error when restore fails', async () => {
    mockRestore.mockRejectedValue(new Error('Restore failed'))

    render(
      <IdentitySettings
        auth={{
          secret: 'secret',
          isLoading: false,
          login: mockLogin,
          signOut: vi.fn(),
        }}
      />,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Restore passkey' }))

    await waitFor(() => {
      expect(screen.getByText('Restore failed')).toBeTruthy()
    })
  })
})
