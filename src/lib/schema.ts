import { co, z } from 'jazz-tools'

export const MarkdownDoc = co.map({
  content: z.string(),
})
