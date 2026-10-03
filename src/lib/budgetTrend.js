// Entries without a `date` (logged before this field existed) are excluded
// — they still count in every other total, they just can't be placed in a
// month. Returns { '2026-07': net, ... } and a months array already sorted
// chronologically (string-sortable since dates are YYYY-MM-DD).
export function groupByMonth(entries) {
  const byMonth = entries
    .filter((e) => e.date)
    .reduce((acc, e) => {
      const month = e.date.slice(0, 7)
      acc[month] = (acc[month] || 0) + (e.type === 'income' ? e.amount : -e.amount)
      return acc
    }, {})

  return { byMonth, months: Object.keys(byMonth).sort() }
}
