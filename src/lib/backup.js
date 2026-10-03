// Every localStorage key the 4 calculators + currency preference use — the
// single source of truth for what a backup includes. Add a key here if a
// tool ever gets a new piece of persisted state.
const KEYS = [
  'split.people',
  'split.expenses',
  'budget.entries',
  'bills.list',
  'savings.form',
  'debtpayoff.debts',
  'debtpayoff.settings',
  'loan.form',
  'currency',
]

export function exportAllData() {
  const data = {}
  for (const key of KEYS) {
    const raw = localStorage.getItem(key)
    if (raw !== null) data[key] = JSON.parse(raw)
  }

  const blob = new Blob([JSON.stringify({ exportedAt: new Date().toISOString(), data }, null, 2)], {
    type: 'application/json',
  })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `common-expenses-backup-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// Throws on malformed/unexpected input — caller is responsible for catching
// and showing a friendly error, since this reads an arbitrary user file.
export async function importAllData(file) {
  const text = await file.text()
  const payload = JSON.parse(text)
  if (!payload || typeof payload.data !== 'object') {
    throw new Error('This file is not a Common Expenses Tracker backup.')
  }
  for (const key of KEYS) {
    if (key in payload.data) localStorage.setItem(key, JSON.stringify(payload.data[key]))
  }
}
