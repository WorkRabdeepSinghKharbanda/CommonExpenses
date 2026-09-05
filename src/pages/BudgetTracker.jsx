import { useState } from 'react'
import { useLocalState } from '../lib/useLocalState.js'
import { formatCurrency } from '../lib/currency.js'

const CATEGORIES = ['Food', 'Rent', 'Transport', 'Utilities', 'Shopping', 'Health', 'Entertainment', 'Other']

export default function BudgetTracker() {
  const [entries, setEntries] = useLocalState('budget.entries', [])
  const [form, setForm] = useState({ description: '', amount: '', type: 'expense', category: 'Food' })

  const addEntry = (e) => {
    e.preventDefault()
    const amount = parseFloat(form.amount)
    if (!form.description.trim() || !amount) return
    setEntries([{ ...form, amount, id: Date.now() }, ...entries])
    setForm({ description: '', amount: '', type: 'expense', category: 'Food' })
  }

  const removeEntry = (id) => setEntries(entries.filter((e) => e.id !== id))

  const income = entries.filter((e) => e.type === 'income').reduce((s, e) => s + e.amount, 0)
  const expense = entries.filter((e) => e.type === 'expense').reduce((s, e) => s + e.amount, 0)
  const balance = income - expense

  const byCategory = entries
    .filter((e) => e.type === 'expense')
    .reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + e.amount
      return acc
    }, {})

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="card">
          <h2 className="font-semibold text-lg mb-4">Add entry</h2>
          <form onSubmit={addEntry} className="grid sm:grid-cols-2 gap-3">
            <input
              className="input sm:col-span-2"
              placeholder="Description"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <input
              className="input"
              type="number"
              step="0.01"
              placeholder="Amount"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />
            <select className="input" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            {form.type === 'expense' && (
              <select
                className="input sm:col-span-2"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            )}
            <button className="btn-primary sm:col-span-2">Add entry</button>
          </form>
        </div>

        <div className="card">
          <h2 className="font-semibold text-lg mb-3">History</h2>
          <ul className="divide-y divide-slate-100">
            {entries.map((e) => (
              <li key={e.id} className="py-2 flex justify-between items-center text-sm">
                <div>
                  <div className="font-medium">{e.description}</div>
                  <div className="text-slate-500 text-xs">{e.type === 'expense' ? e.category : 'Income'}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={e.type === 'income' ? 'text-emerald-600' : 'text-red-500'}>
                    {e.type === 'income' ? '+' : '-'}{formatCurrency(e.amount)}
                  </span>
                  <button onClick={() => removeEntry(e.id)} className="text-slate-400 hover:text-red-500 text-xs">
                    remove
                  </button>
                </div>
              </li>
            ))}
            {entries.length === 0 && <li className="text-sm text-slate-400 py-2">No entries yet.</li>}
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <div className="card space-y-2">
          <h2 className="font-semibold text-lg mb-2">Summary</h2>
          <div className="flex justify-between text-sm"><span>Income</span><span className="text-emerald-600">{formatCurrency(income)}</span></div>
          <div className="flex justify-between text-sm"><span>Expenses</span><span className="text-red-500">{formatCurrency(expense)}</span></div>
          <div className="flex justify-between font-semibold pt-2 border-t border-slate-100">
            <span>Balance</span>
            <span className={balance >= 0 ? 'text-emerald-600' : 'text-red-500'}>{formatCurrency(balance)}</span>
          </div>
        </div>

        <div className="card space-y-2">
          <h2 className="font-semibold text-lg mb-2">By category</h2>
          {Object.entries(byCategory).length === 0 && <p className="text-sm text-slate-400">No expenses yet.</p>}
          {Object.entries(byCategory)
            .sort((a, b) => b[1] - a[1])
            .map(([cat, amt]) => (
              <div key={cat} className="flex justify-between text-sm">
                <span>{cat}</span>
                <span>{formatCurrency(amt)}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
