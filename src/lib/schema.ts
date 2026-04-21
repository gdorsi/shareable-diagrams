import { col, definePermissions, schema } from 'jazz-tools'

export const shareableDiagramsApp = schema.defineApp({
  documents: schema.table({
    ownerId: col.string(),
    content: col.string(),
  }).index('documents_by_owner', ['ownerId']),
  documentWriteGrants: schema.table({
    ownerId: col.string(),
    granteeId: col.string(),
  }).index('grants_by_owner_grantee', ['ownerId', 'granteeId']),
})

export const shareableDiagramsPermissions = definePermissions(
  shareableDiagramsApp,
  ({ anyOf, policy, session }) => {
    policy.documents.allowRead.always()
    policy.documents.allowInsert.where({ ownerId: session.user_id })
    policy.documents.allowUpdate.where((row) =>
      anyOf([
        { ownerId: session.user_id },
        policy.exists(
          policy.documentWriteGrants.where({
            ownerId: row.ownerId,
            granteeId: session.user_id,
          }),
        ),
      ]),
    )
    policy.documents.allowDelete.where((row) =>
      anyOf([
        { ownerId: session.user_id },
        policy.exists(
          policy.documentWriteGrants.where({
            ownerId: row.ownerId,
            granteeId: session.user_id,
          }),
        ),
      ]),
    )

    policy.documentWriteGrants.allowRead.where({ ownerId: session.user_id })
    policy.documentWriteGrants.allowInsert.where({ ownerId: session.user_id })
    policy.documentWriteGrants.allowDelete.where({ ownerId: session.user_id })
  },
)
