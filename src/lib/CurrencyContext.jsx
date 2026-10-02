import { createContext, useContext } from 'react'
import { CURRENCIES, formatAmount } from './currency.js'
import { useLocalState } from './useLocalState.js'

const CurrencyContext = createContext(null)

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useLocalState('currency', 'USD')

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
