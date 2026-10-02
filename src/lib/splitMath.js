// Shared by SplitExpense.jsx and Dashboard.jsx so the balance/settlement math
// only lives in one place.
export function computeSettlements(people, expenses) {
  const net = Object.fromEntries(people.map((p) => [p, 0]))

  for (const e of expenses) {
    const share = e.amount / e.participants.length
    net[e.payer] += e.amount
    for (const p of e.participants) net[p] -= share
  }

  const creditors = Object.entries(net)
    .filter(([, v]) => v > 0.01)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount)
  const debtors = Object.entries(net)
    .filter(([, v]) => v < -0.01)
    .map(([name, amount]) => ({ name, amount: -amount }))
    .sort((a, b) => b.amount - a.amount)

  const settlements = []
  let i = 0
  let j = 0
  while (i < debtors.length && j < creditors.length) {
    const amount = Math.min(debtors[i].amount, creditors[j].amount)
    settlements.push({ from: debtors[i].name, to: creditors[j].name, amount })
    debtors[i].amount -= amount
    creditors[j].amount -= amount
    if (debtors[i].amount < 0.01) i++
    if (creditors[j].amount < 0.01) j++
  }

  return { net, settlements }
}
