import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JazzReactProvider } from 'jazz-tools/react'
import App from './App'
import './style.css'

const JAZZ_API_KEY = 'shareable-diagrams@jazz.tools'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JazzReactProvider
      sync={{ peer: `wss://cloud.jazz.tools/?key=${JAZZ_API_KEY}` }}
    >
      <App />
    </JazzReactProvider>
  </StrictMode>,
)
