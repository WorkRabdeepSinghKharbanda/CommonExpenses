export function formatCurrency(amount) {
  const n = Number(amount) || 0
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n)
}
