import { createContext, useContext, useState } from 'react'

const ConsentContext = createContext(null)

export function ConsentProvider({ children }) {
  const [consent, setConsent] = useState(() => localStorage.getItem('adConsent'))

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
