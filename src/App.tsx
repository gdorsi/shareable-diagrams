import { useState, useEffect } from 'react'
import Viewer from './Viewer'
import Encoder from './Encoder'

export default function App() {
  const [hasHash, setHasHash] = useState(false)

  useEffect(() => {
    setHasHash(window.location.hash.length > 1)
    const handleHashChange = () => setHasHash(window.location.hash.length > 1)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return hasHash ? <Viewer /> : <Encoder />
}
