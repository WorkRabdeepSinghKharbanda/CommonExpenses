// Month-by-month amortization simulation for the debt payoff calculator.
// Pure function so it's independently testable and shared between the
// selected-strategy result and the snowball-vs-avalanche comparison.
const MAX_MONTHS = 600 // 50 years — a real cap, not a magic number for its own sake

export function simulatePayoff(debts, extraMonthly, strategy) {
  const order =
    strategy === 'snowball'
      ? [...debts].sort((a, b) => a.balance - b.balance)
      : [...debts].sort((a, b) => b.apr - a.apr)

  const active = new Map(debts.map((d) => [d.id, { ...d }]))
  const payoffMonth = new Map()
  let months = 0
  let totalInterest = 0

  const allPaid = () => [...active.values()].every((d) => d.balance <= 0.01)

  while (!allPaid() && months < MAX_MONTHS) {
    months++

    for (const d of active.values()) {
      if (d.balance <= 0.01) continue
      const interest = d.balance * (d.apr / 100 / 12)
      d.balance += interest
      totalInterest += interest
    }

    for (const d of active.values()) {
      if (d.balance <= 0.01) continue
      d.balance -= Math.min(d.minPayment, d.balance)
    }

    let extraPool = extraMonthly
    for (const target of order) {
      if (extraPool <= 0) break
      const d = active.get(target.id)
      if (!d || d.balance <= 0.01) continue
      const pay = Math.min(extraPool, d.balance)
      d.balance -= pay
      extraPool -= pay
    }

    for (const d of active.values()) {
      if (d.balance <= 0.01 && !payoffMonth.has(d.id)) payoffMonth.set(d.id, months)
    }
  }

  const neverPaidOff = !allPaid()

  return {
    months,
    totalInterest,
    neverPaidOff,
    order: order.map((d) => ({ id: d.id, name: d.name, month: payoffMonth.get(d.id) ?? null })),
  }
}
