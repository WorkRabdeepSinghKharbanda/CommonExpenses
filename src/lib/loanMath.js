// Standard reducing-balance (amortizing) loan math — the method almost
// every real loan/EMI product uses, as opposed to flat-rate interest (which
// charges interest on the original principal for the whole term and is a
// genuinely worse deal, see the accompanying blog post).
export function computeEMI(principal, annualRatePct, months) {
  const r = annualRatePct / 100 / 12
  if (months <= 0) return 0
  if (r === 0) return principal / months
  const factor = Math.pow(1 + r, months)
  return (principal * r * factor) / (factor - 1)
}

// Full month-by-month breakdown: how much of each payment is interest vs.
// principal, and the remaining balance after each payment.
export function amortizationSchedule(principal, annualRatePct, months) {
  const emi = computeEMI(principal, annualRatePct, months)
  const r = annualRatePct / 100 / 12
  let balance = principal
  const schedule = []

  for (let month = 1; month <= months; month++) {
    const interest = balance * r
    const principalPaid = Math.min(emi - interest, balance)
    balance = Math.max(balance - principalPaid, 0)
    schedule.push({ month, interest, principal: principalPaid, balance })
  }

  return schedule
}
