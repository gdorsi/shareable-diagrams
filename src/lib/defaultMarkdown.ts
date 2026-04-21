export const defaultMarkdown = `# My POC Document

## Architecture Overview

\`\`\`mermaid
graph LR
    A[User] --> B[API Gateway]
    B --> C[Service A]
    B --> D[Service B]
    C --> E[(Database)]
    D --> E
\`\`\`

## Key Decisions

- **Decision 1**: Use event-driven architecture
- **Decision 2**: PostgreSQL for persistence

## Implementation Notes

This is a proof of concept demonstrating the shareable diagrams feature.

\`\`\`typescript
const handler = async (event: Event) => {
  await processEvent(event)
}
\`\`\`
`
