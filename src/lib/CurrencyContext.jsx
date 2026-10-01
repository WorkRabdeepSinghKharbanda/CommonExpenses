import { createContext, useContext, useEffect, useState } from 'react'
import { CURRENCIES, formatAmount } from './currency.js'

const CurrencyContext = createContext(null)

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(() => {
    try {
      return localStorage.getItem('currency') || 'USD'
    } catch {
      return 'USD'
    }
  })

  useEffect(() => {
    localStorage.setItem('currency', currency)
  }, [currency])

  const format = (amount) => formatAmount(amount, currency)

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, format, currencies: CURRENCIES }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  return useContext(CurrencyContext)
}
