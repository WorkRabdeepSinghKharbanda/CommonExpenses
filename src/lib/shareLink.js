// Encodes split-expense state into a URL-safe string so it can be shared
// via a plain link — no backend, no accounts, just the data round-tripped
// through the URL itself.
export function encodeSplitState(people, expenses) {
  const json = JSON.stringify({ people, expenses })
  // btoa works on binary strings, not arbitrary UTF-8 — encodeURIComponent
  // first so names/descriptions with non-ASCII characters survive.
  const base64 = btoa(encodeURIComponent(json))
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function isValidExpense(e, peopleSet) {
  return (
    e &&
    typeof e.description === 'string' &&
    typeof e.amount === 'number' &&
    Number.isFinite(e.amount) &&
    e.amount > 0 &&
    typeof e.payer === 'string' &&
    peopleSet.has(e.payer) &&
    Array.isArray(e.participants) &&
    e.participants.length > 0 &&
    e.participants.every((p) => typeof p === 'string' && peopleSet.has(p))
  )
}

// Returns null on any malformed/invalid input rather than throwing — the
// caller treats "no valid shared data" and "no shared data at all" the
// same. This is an untrusted-input boundary (the ?s= param can be
// hand-crafted by anyone, not just produced by encodeSplitState), so every
// field actually used downstream (computeSettlements, CSV export, render)
// is validated here, not just the outer {people, expenses} shape.
export function decodeSplitState(encoded) {
  try {
    const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/')
    const json = decodeURIComponent(atob(base64))
    const data = JSON.parse(json)
    if (!Array.isArray(data.people) || !data.people.every((p) => typeof p === 'string')) return null
    const peopleSet = new Set(data.people)
    if (!Array.isArray(data.expenses) || !data.expenses.every((e) => isValidExpense(e, peopleSet))) return null
    return { people: data.people, expenses: data.expenses }
  } catch {
    return null
  }
}
