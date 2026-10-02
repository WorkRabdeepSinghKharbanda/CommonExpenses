// No test framework in this repo — run directly with `node src/lib/debtPayoff.test.mjs`.
// Covers the 3 cases manually verified before DebtPayoff.jsx was wired up.
import assert from 'node:assert/strict'
import { simulatePayoff } from './debtPayoff.js'

// Avalanche (targets highest APR first) must save at least as much total
// interest as snowball (targets smallest balance first) when the two orders
// genuinely diverge.
{
  const debts = [
    { id: 1, name: 'Low-rate small loan', balance: 500, apr: 3, minPayment: 20 },
    { id: 2, name: 'High-rate big loan', balance: 5000, apr: 22, minPayment: 100 },
  ]
  const avalanche = simulatePayoff(debts, 300, 'avalanche')
  const snowball = simulatePayoff(debts, 300, 'snowball')

  assert.ok(avalanche.totalInterest <= snowball.totalInterest, 'avalanche should not cost more interest than snowball')
  assert.equal(avalanche.order[0].id, 2, 'avalanche should target the highest-APR debt first')
  assert.equal(snowball.order[0].id, 1, 'snowball should target the smallest-balance debt first')
}

// Payments that don't outpace accruing interest must be flagged, not
// silently simulated out to the 600-month cap as if it were a real payoff.
{
  const result = simulatePayoff([{ id: 1, name: 'Bad', balance: 10000, apr: 29, minPayment: 10 }], 0, 'avalanche')
  assert.equal(result.neverPaidOff, true, 'insufficient minimums should be flagged as never paid off')
}

// A debt that's paid off ends up with a finite payoff month, not null.
{
  const result = simulatePayoff([{ id: 1, name: 'Small', balance: 100, apr: 10, minPayment: 50 }], 0, 'avalanche')
  assert.equal(result.neverPaidOff, false)
  assert.ok(Number.isInteger(result.order[0].month), 'a payable debt should have a finite payoff month')
}

console.log('debtPayoff.js: all checks passed')
