import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JazzProvider, useLocalFirstAuth } from 'jazz-tools/react'
import App from './App'
import { browserDbConfig } from './lib/jazzConfig'
import './style.css'

function Root() {
  const auth = useLocalFirstAuth()

  if (auth.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <JazzProvider
      config={{
        ...browserDbConfig,
        secret: auth.secret ?? undefined,
      }}
    >
      <App auth={auth} />
    </JazzProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
