export const CURRENCIES = {
  USD: { locale: 'en-US', label: 'US Dollar' },
  INR: { locale: 'en-IN', label: 'Indian Rupee' },
  AUD: { locale: 'en-AU', label: 'Australian Dollar' },
  EUR: { locale: 'de-DE', label: 'Euro' },
}

export function formatAmount(amount, currency) {
  const { locale } = CURRENCIES[currency] || CURRENCIES.USD
  const n = Number(amount) || 0
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(n)
}
