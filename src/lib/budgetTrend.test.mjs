// No test framework in this repo — run directly with `node src/lib/budgetTrend.test.mjs`.
import assert from 'node:assert/strict'
import { groupByMonth } from './budgetTrend.js'

// Entries without a date are excluded entirely, not grouped under "undefined".
{
  const { byMonth, months } = groupByMonth([
    { date: '2026-06-15', type: 'income', amount: 1000 },
    { date: '2026-06-20', type: 'expense', amount: 300 },
    { type: 'expense', amount: 50 }, // no date — must be ignored
  ])
  assert.deepEqual(months, ['2026-06'])
  assert.equal(byMonth['2026-06'], 700)
}

// Multiple months sort chronologically regardless of input order.
{
  const { months } = groupByMonth([
    { date: '2026-08-01', type: 'expense', amount: 10 },
    { date: '2026-06-01', type: 'expense', amount: 10 },
    { date: '2026-07-01', type: 'expense', amount: 10 },
  ])
  assert.deepEqual(months, ['2026-06', '2026-07', '2026-08'])
}

// No entries at all -> empty result, not a crash.
{
  const { byMonth, months } = groupByMonth([])
  assert.deepEqual(byMonth, {})
  assert.deepEqual(months, [])
}

console.log('budgetTrend.js: all checks passed')
