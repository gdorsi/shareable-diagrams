// @vitest-environment jsdom

import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import App from './App'

const {
  mockUseAll,
  mockUseSession,
  mockReadDocumentId,
  mockReadGrantCode,
  mockClearGrantCode,
  mockGrantScriptDocumentAccess,
  whereSpy,
  selectSpy,
  limitSpy,
  query,
} = vi.hoisted(() => ({
  mockUseAll: vi.fn(),
  mockUseSession: vi.fn(),
  mockReadDocumentId: vi.fn(),
  mockReadGrantCode: vi.fn(),
  mockClearGrantCode: vi.fn(),
  mockGrantScriptDocumentAccess: vi.fn(),
  whereSpy: vi.fn(),
  selectSpy: vi.fn(),
  limitSpy: vi.fn(),
  query: { kind: 'documentsQuery' },
}))

vi.mock('jazz-tools/react', () => ({
  useAll: mockUseAll,
  useSession: mockUseSession,
}))

vi.mock('./Encoder', () => ({
  default: ({ document }: { document?: { id: string } }) => (
    <div data-testid="encoder">
      {document ? `editor:${document.id}` : 'new-document'}
    </div>
  ),
}))

vi.mock('./Viewer', () => ({
  default: ({
    content,
    canRequestGrant,
  }: {
    content: string
    canRequestGrant: boolean
  }) => (
    <div data-testid="viewer">
      {`viewer:${content}:${String(canRequestGrant)}`}
    </div>
  ),
}))

vi.mock('./lib/schema', () => ({
  shareableDiagramsApp: {
    documents: {
      where: whereSpy,
    },
  },
}))

vi.mock('./lib/urlState', () => ({
  readDocumentId: mockReadDocumentId,
  readGrantCode: mockReadGrantCode,
  clearGrantCode: mockClearGrantCode,
}))

vi.mock('./lib/localhostGrant', () => ({
  grantScriptDocumentAccess: mockGrantScriptDocumentAccess,
}))

describe('App', () => {
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    vi.clearAllMocks()

    limitSpy.mockReturnValue(query)
    selectSpy.mockReturnValue({ limit: limitSpy })
    whereSpy.mockReturnValue({ select: selectSpy })

    mockUseSession.mockReturnValue({ user_id: 'user_123' })
    mockUseAll.mockReturnValue(undefined)
    mockReadDocumentId.mockReturnValue(null)
    mockReadGrantCode.mockReturnValue(null)
    mockGrantScriptDocumentAccess.mockResolvedValue(undefined)
  })

  test('renders the encoder when there is no document id in the URL', () => {
    render(<App />)

    expect(screen.getByTestId('encoder').textContent).toBe('new-document')
    expect(whereSpy).not.toHaveBeenCalled()
  })

  test('renders loading while the document query is unresolved', () => {
    mockReadDocumentId.mockReturnValue('doc_loading')
    mockUseAll.mockReturnValue(undefined)

    render(<App />)

    expect(screen.getByText('Loading document...')).toBeTruthy()
    expect(whereSpy).toHaveBeenCalledWith({ id: 'doc_loading' })
    expect(selectSpy).toHaveBeenCalledWith('id', 'ownerId', 'content', '$canEdit')
    expect(limitSpy).toHaveBeenCalledWith(1)
    expect(mockUseAll).toHaveBeenCalledWith(query)
  })

  test('renders not found when the document query resolves empty', () => {
    mockReadDocumentId.mockReturnValue('doc_missing')
    mockUseAll.mockReturnValue([])

    render(<App />)

    expect(screen.getByText('Document not found')).toBeTruthy()
  })

  test('renders the viewer for a read-only document row', () => {
    mockReadDocumentId.mockReturnValue('doc_view')
    mockUseAll.mockReturnValue([
      {
        id: 'doc_view',
        ownerId: 'owner_456',
        content: '# Read only',
        $canEdit: false,
      },
    ])

    render(<App />)

    expect(screen.getByTestId('viewer').textContent).toBe('viewer:# Read only:true')
  })

  test('renders the editor for a writable document row', () => {
    mockReadDocumentId.mockReturnValue('doc_edit')
    mockUseAll.mockReturnValue([
      {
        id: 'doc_edit',
        ownerId: 'user_123',
        content: '# Editable',
        $canEdit: true,
      },
    ])

    render(<App />)

    expect(screen.getByTestId('encoder').textContent).toBe('editor:doc_edit')
  })

  test('grants script document access from the URL fragment and clears the hash', async () => {
    mockReadGrantCode.mockReturnValue('grant_abc123')

    render(<App />)

    await waitFor(() => {
      expect(mockGrantScriptDocumentAccess).toHaveBeenCalledWith({
        browserUserId: 'user_123',
        code: 'grant_abc123',
      })
    })

    await waitFor(() => {
      expect(mockClearGrantCode).toHaveBeenCalledTimes(1)
    })
  })
})
