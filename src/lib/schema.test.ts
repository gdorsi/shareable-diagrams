import { describe, expect, test } from 'vitest'
import { shareableDiagramsApp, shareableDiagramsPermissions } from './schema'

describe('schema exports', () => {
  test('exports the expected Jazz2 tables', () => {
    expect(shareableDiagramsApp.documents._table).toBe('documents')
    expect(shareableDiagramsApp.documentWriteGrants._table).toBe('documentWriteGrants')
  })

  test('exports compiled permissions for both tables', () => {
    expect(shareableDiagramsPermissions.documents).toBeDefined()
    expect(shareableDiagramsPermissions.documentWriteGrants).toBeDefined()
  })

  test('compiles document permissions for read, insert, update, and delete', () => {
    expect(shareableDiagramsPermissions.documents).toEqual(
      expect.objectContaining({
        select: expect.any(Object),
        insert: expect.any(Object),
        update: expect.any(Object),
        delete: expect.any(Object),
      }),
    )
  })

  test('compiles grant permissions for read, insert, and delete operations', () => {
    expect(shareableDiagramsPermissions.documentWriteGrants).toEqual(
      expect.objectContaining({
        select: expect.any(Object),
        insert: expect.any(Object),
        delete: expect.any(Object),
      }),
    )
  })
})
