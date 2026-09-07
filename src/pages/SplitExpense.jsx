import { useState } from 'react'
import { useLocalState } from '../lib/useLocalState.js'
import { useCurrency } from '../lib/CurrencyContext.jsx'
import { downloadCSV } from '../lib/csv.js'
import { nonNegative } from '../lib/forms.js'
import { useSeo } from '../lib/useSeo.js'
import PageToolbar from '../components/PageToolbar.jsx'

function computeSettlements(people, expenses) {
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

export default function SplitExpense() {
  useSeo({
    title: 'Split Expense Calculator — Bill Splitter for Groups | Common Expenses Tracker',
    description:
      'Split bills among friends or roommates and see exactly who owes who, with automatic settle-up. Free, no sign-up, runs entirely in your browser.',
    path: '/split',
  })
  const { format } = useCurrency()
  const [people, setPeople] = useLocalState('split.people', [])
  const [expenses, setExpenses] = useLocalState('split.expenses', [])
  const [personName, setPersonName] = useState('')
  const [form, setForm] = useState({ description: '', amount: '', payer: '', participants: [] })
  const [search, setSearch] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    const name = personName.trim()
    if (!name || people.includes(name)) return
    setPeople([...people, name])
    setPersonName('')
  }

  const removePerson = (name) => {
    setPeople(people.filter((p) => p !== name))
    setExpenses(expenses.filter((ex) => ex.payer !== name && !ex.participants.includes(name)))
  }

  const toggleParticipant = (name) => {
    setForm((f) => ({
      ...f,
      participants: f.participants.includes(name)
        ? f.participants.filter((p) => p !== name)
        : [...f.participants, name],
    }))
  }

  const addExpense = (e) => {
    e.preventDefault()
    const amount = parseFloat(form.amount)
    if (!form.description.trim() || !amount || !form.payer || form.participants.length === 0) return
    setExpenses([...expenses, { ...form, amount, id: Date.now() }])
    setForm({ description: '', amount: '', payer: '', participants: [] })
  }

  const removeExpense = (id) => setExpenses(expenses.filter((e) => e.id !== id))

  const { net, settlements } = computeSettlements(people, expenses)

  const exportCSV = () =>
    downloadCSV(
      'split-expenses.csv',
      expenses.map((e) => ({
        description: e.description,
        amount: e.amount,
        payer: e.payer,
        participants: e.participants.join('; '),
      }))
    )

  const clearAll = () => {
    setPeople([])
    setExpenses([])
  }

  return (
    <div>
      <PageToolbar title="Split Expense" onExport={expenses.length > 0 ? exportCSV : undefined} onClear={clearAll} />
      <div className="grid lg:grid-cols-3 gap-6">
      <div className="card space-y-4">
        <h2 className="font-semibold text-lg dark:text-white">People</h2>
        <form onSubmit={addPerson} className="flex gap-2">
          <input
            className="input"
            placeholder="Add a name"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
          <button className="btn-primary shrink-0">Add</button>
        </form>
        <ul className="space-y-1">
          {people.map((p) => (
            <li key={p} className="flex justify-between items-center text-sm py-1">
              <span>{p}</span>
              <button onClick={() => removePerson(p)} className="text-slate-400 hover:text-red-500 text-xs">
                remove
              </button>
            </li>
          ))}
          {people.length === 0 && <li className="text-sm text-slate-400 dark:text-slate-500">Add people to get started.</li>}
        </ul>
      </div>

      <div className="card space-y-4 lg:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-semibold text-lg dark:text-white">Expenses</h2>
          <input
            className="input max-w-[10rem] py-1.5"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <form onSubmit={addExpense} className="grid sm:grid-cols-2 gap-3">
          <input
            className="input sm:col-span-2"
            placeholder="Description (e.g. Dinner)"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <input
            className="input"
            placeholder="Amount"
            type="number"
            min="0"
            step="0.01"
            value={form.amount}
            onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, amount: e.target.value })}
            onFocus={(e) => e.target.select()}
          />
          <select
            className="input"
            value={form.payer}
            onChange={(e) => setForm({ ...form, payer: e.target.value })}
          >
            <option value="">Paid by...</option>
            {people.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <div className="sm:col-span-2 flex flex-wrap items-center gap-2">
            {people.map((p) => (
              <button
                type="button"
                key={p}
                onClick={() => toggleParticipant(p)}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  form.participants.includes(p)
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300'
                }`}
              >
                {p}
              </button>
            ))}
            {people.length > 0 && (
              <button
                type="button"
                onClick={() =>
                  setForm((f) => ({
                    ...f,
                    participants: f.participants.length === people.length ? [] : [...people],
                  }))
                }
                className="text-xs text-brand-600 hover:underline ml-1"
              >
                {form.participants.length === people.length ? 'Clear all' : 'Select all'}
              </button>
            )}
          </div>
          <button className="btn-primary sm:col-span-2" disabled={people.length === 0}>
            Add expense
          </button>
        </form>

        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {expenses
            .filter((e) => e.description.toLowerCase().includes(search.toLowerCase()))
            .map((e) => (
            <li key={e.id} className="py-2 flex justify-between items-center text-sm">
              <div>
                <div className="font-medium">{e.description}</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs">
                  {e.payer} paid {format(e.amount)} for {e.participants.join(', ')}
                </div>
              </div>
              <button onClick={() => removeExpense(e.id)} className="text-slate-400 hover:text-red-500 text-xs">
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card space-y-3">
        <h2 className="font-semibold text-lg dark:text-white">Balances</h2>
        {people.map((p) => (
          <div key={p} className="flex justify-between text-sm">
            <span>{p}</span>
            <span className={net[p] >= 0 ? 'text-emerald-600' : 'text-red-500'}>
              {format(net[p])}
            </span>
          </div>
        ))}
      </div>

      <div className="card space-y-3 lg:col-span-2">
        <h2 className="font-semibold text-lg dark:text-white">Settle up</h2>
        {settlements.length === 0 && <p className="text-sm text-slate-400 dark:text-slate-500">Everyone is settled up.</p>}
        <ul className="space-y-2">
          {settlements.map((s, i) => (
            <li key={i} className="text-sm flex items-center gap-2">
              <span className="font-medium">{s.from}</span>
              <span className="text-slate-400 dark:text-slate-500">owes</span>
              <span className="font-medium">{s.to}</span>
              <span className="ml-auto font-semibold">{format(s.amount)}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  )
}
