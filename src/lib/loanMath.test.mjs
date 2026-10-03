// No test framework in this repo — run directly with `node src/lib/loanMath.test.mjs`.
import assert from 'node:assert/strict'
import { computeEMI, amortizationSchedule } from './loanMath.js'

// Known reference value: $100,000 at 10% annual, 12 months -> EMI ~ $8,791.59
// (standard reducing-balance formula, cross-checked by hand).
{
  const emi = computeEMI(100000, 10, 12)
  assert.ok(Math.abs(emi - 8791.59) < 1, `expected ~8791.59, got ${emi}`)
}

// 0% interest degenerates to a simple even split.
{
  const emi = computeEMI(1200, 0, 12)
  assert.equal(emi, 100)
}

// The schedule's final balance must be ~0, and total interest + total
// principal across the schedule must equal total paid (EMI * months).
{
  const principal = 50000
  const months = 24
  const schedule = amortizationSchedule(principal, 8, months)
  const last = schedule[schedule.length - 1]
  assert.ok(last.balance < 0.01, `expected final balance ~0, got ${last.balance}`)

  const totalInterest = schedule.reduce((s, m) => s + m.interest, 0)
  const totalPrincipal = schedule.reduce((s, m) => s + m.principal, 0)
  assert.ok(Math.abs(totalPrincipal - principal) < 0.1, `principal paid should sum to ${principal}, got ${totalPrincipal}`)
  assert.ok(totalInterest > 0, 'a non-zero-rate loan should have non-zero total interest')
}

console.log('loanMath.js: all checks passed')
