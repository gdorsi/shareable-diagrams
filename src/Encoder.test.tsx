// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import Encoder from './Encoder'

const { mockUseDb, mockUseSession } = vi.hoisted(() => ({
  mockUseDb: vi.fn(),
  mockUseSession: vi.fn(),
}))

vi.mock('@comark/react', async () => {
  const React = await import('react')

  return {
    ComarkClient: ({ children }: { children?: string }) =>
      React.createElement('div', { 'data-testid': 'client-comark' }, children),
  }
})

vi.mock('@comark/react/plugins/mermaid', () => ({
  default: () => ({}),
  Mermaid: () => null,
}))

vi.mock('@comark/react/plugins/highlight', () => ({
  default: () => ({}),
}))

vi.mock('@shikijs/themes/github-light', () => ({ default: {} }))
vi.mock('@shikijs/themes/github-dark', () => ({ default: {} }))

vi.mock('jazz-tools/react', () => ({
  useDb: mockUseDb,
  useSession: mockUseSession,
}))

describe('Encoder', () => {
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    vi.clearAllMocks()

    window.history.replaceState(null, '', '/')

    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: vi.fn(async () => undefined),
      },
    })

    mockUseSession.mockReturnValue({ user_id: 'user_123' })
    mockUseDb.mockReturnValue({
      insert: vi.fn(() => ({
        value: {
          id: 'doc_new',
          ownerId: 'user_123',
          content: '# inserted',
        },
      })),
      update: vi.fn(),
    })
  })

  test('does not insert a document eagerly on mount', () => {
    const db = mockUseDb()

    render(<Encoder />)

    expect(db.insert).not.toHaveBeenCalled()
  })

  test('inserts on share and updates the URL with the new document id', async () => {
    const user = userEvent.setup()
    const db = mockUseDb()

    render(<Encoder />)

    await user.click(screen.getByRole('button', { name: 'Copy Shareable URL' }))

    expect(db.insert).toHaveBeenCalledTimes(1)
    expect(db.insert).toHaveBeenCalledWith(expect.anything(), {
      ownerId: 'user_123',
      content: expect.any(String),
    })
    expect(window.location.search).toBe('?id=doc_new')
  })

  test('debounces updates to an existing document row by 300ms', async () => {
    vi.useFakeTimers()
    const db = mockUseDb()

    render(
      <Encoder
        document={{
          id: 'doc_existing',
          ownerId: 'user_123',
          content: '# Original',
        }}
      />,
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '# Updated' },
    })

    expect(db.update).not.toHaveBeenCalled()

    vi.advanceTimersByTime(299)
    expect(db.update).not.toHaveBeenCalled()

    vi.advanceTimersByTime(1)
    expect(db.update).toHaveBeenCalledTimes(1)

    expect(db.update).toHaveBeenCalledWith(expect.anything(), 'doc_existing', {
      content: '# Updated',
    })

    vi.useRealTimers()
  })
})
