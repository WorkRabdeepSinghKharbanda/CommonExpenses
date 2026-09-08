import { createContext, useContext, useEffect, useState } from 'react'
import { loadAdsenseScript } from './adsense.js'

const ConsentContext = createContext(null)

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(() => localStorage.getItem('adConsent'))

  // Loads regardless of accept/decline — the banner only records a preference.
  useEffect(() => {
    loadAdsenseScript()
  }, [])

  const accept = () => {
    localStorage.setItem('adConsent', 'accepted')
    setConsent('accepted')
  }

  const decline = () => {
    localStorage.setItem('adConsent', 'declined')
    setConsent('declined')
  }

  return (
    <ConsentContext.Provider value={{ consent, accept, decline }}>
      {children}
    </ConsentContext.Provider>
  )
}

export function useConsent() {
  return useContext(ConsentContext)
}
