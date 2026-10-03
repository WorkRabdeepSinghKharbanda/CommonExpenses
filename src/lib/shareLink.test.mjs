// No test framework in this repo — run directly with `node src/lib/shareLink.test.mjs`.
import assert from 'node:assert/strict'
import { encodeSplitState, decodeSplitState } from './shareLink.js'

// Unicode names/descriptions survive a full roundtrip (the whole reason
// encodeURIComponent wraps the JSON before btoa, which only handles
// binary/Latin1 strings).
{
  const people = ['Alice', 'Böb', '李雷']
  const expenses = [{ id: 1, description: 'Dinner 🍜', amount: 42.5, payer: 'Alice', participants: ['Alice', 'Böb'] }]
  const decoded = decodeSplitState(encodeSplitState(people, expenses))
  assert.deepEqual(decoded, { people, expenses })
}

// decodeSplitState is an untrusted-input boundary — it must return null,
// never throw, for every kind of malformed/hostile input a hand-crafted
// ?s= param could contain.
{
  assert.equal(decodeSplitState('not-valid-base64!!!'), null, 'garbage input')
  assert.equal(decodeSplitState(''), null, 'empty string')
  assert.equal(decodeSplitState(encodeSplitState([], []).slice(0, -2)), null, 'truncated valid encoding')
}

// Outer shape present but inner fields wrong/missing/referencing an
// unlisted person — exactly the payload shape that would otherwise reach
// computeSettlements/the expense-list render and crash on undefined
// fields. Each must be rejected, not just type-checked at the top level.
{
  const encode = (data) => encodeSplitState(data.people, data.expenses)
  assert.equal(decodeSplitState(encode({ people: ['a'], expenses: [{}] })), null, 'empty expense object')
  assert.equal(
    decodeSplitState(encode({ people: ['a'], expenses: [{ description: 'x', amount: 10, payer: 'a', participants: [] }] })),
    null,
    'empty participants list'
  )
  assert.equal(
    decodeSplitState(
      encode({ people: ['a'], expenses: [{ description: 'x', amount: 10, payer: 'ghost', participants: ['a'] }] })
    ),
    null,
    'payer not in the people list'
  )
  assert.equal(
    decodeSplitState(
      encode({ people: ['a'], expenses: [{ description: 'x', amount: 10, payer: 'a', participants: ['a', 'ghost'] }] })
    ),
    null,
    'a participant not in the people list'
  )
  assert.equal(
    decodeSplitState(encode({ people: ['a'], expenses: [{ description: 'x', amount: 'ten', payer: 'a', participants: ['a'] }] })),
    null,
    'amount is not a number'
  )
  assert.equal(
    decodeSplitState(encode({ people: ['a'], expenses: [{ description: 'x', amount: -10, payer: 'a', participants: ['a'] }] })),
    null,
    'negative amount'
  )
  assert.equal(
    decodeSplitState(encode({ people: ['a'], expenses: [{ description: 'x', amount: 10, payer: 'a', participants: 'a' }] })),
    null,
    'participants is not an array'
  )
}

console.log('shareLink.js: all checks passed')
