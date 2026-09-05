import { useState } from 'react'
import { useLocalState } from '../lib/useLocalState.js'
import { useCurrency } from '../lib/CurrencyContext.jsx'
import { downloadCSV } from '../lib/csv.js'
import PageToolbar from '../components/PageToolbar.jsx'

const CATEGORIES = ['Food', 'Rent', 'Transport', 'Utilities', 'Shopping', 'Health', 'Entertainment', 'Other']

export default function BudgetTracker() {
  const { format } = useCurrency()
  const [entries, setEntries] = useLocalState('budget.entries', [])
  const [form, setForm] = useState({ description: '', amount: '', type: 'expense', category: 'Food' })
  const [search, setSearch] = useState('')
  const [editingId, setEditingId] = useState(null)

  const resetForm = () => {
    setForm({ description: '', amount: '', type: 'expense', category: 'Food' })
    setEditingId(null)
  }

  const submitEntry = (e) => {
    e.preventDefault()
    const amount = parseFloat(form.amount)
    if (!form.description.trim() || !amount) return
    if (editingId) {
      setEntries(entries.map((en) => (en.id === editingId ? { ...form, amount, id: editingId } : en)))
    } else {
      setEntries([{ ...form, amount, id: Date.now() }, ...entries])
    }
    resetForm()
  }

  const startEdit = (entry) => {
    setForm({ description: entry.description, amount: String(entry.amount), type: entry.type, category: entry.category })
    setEditingId(entry.id)
  }

  const removeEntry = (id) => {
    setEntries(entries.filter((e) => e.id !== id))
    if (editingId === id) resetForm()
  }

  const income = entries.filter((e) => e.type === 'income').reduce((s, e) => s + e.amount, 0)
  const expense = entries.filter((e) => e.type === 'expense').reduce((s, e) => s + e.amount, 0)
  const balance = income - expense

  const byCategory = entries
    .filter((e) => e.type === 'expense')
    .reduce((acc, e) => {
      acc[e.category] = (acc[e.category] || 0) + e.amount
      return acc
    }, {})

  const exportCSV = () =>
    downloadCSV(
      'budget-entries.csv',
      entries.map((e) => ({
        description: e.description,
        type: e.type,
        category: e.type === 'expense' ? e.category : '',
        amount: e.amount,
      }))
    )

  return (
    <div>
      <PageToolbar title="Budget Tracker" onExport={entries.length > 0 ? exportCSV : undefined} onClear={() => setEntries([])} />
      <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="card">
          <h2 className="font-semibold text-lg mb-4 dark:text-white">{editingId ? 'Edit entry' : 'Add entry'}</h2>
          <form onSubmit={submitEntry} className="grid sm:grid-cols-2 gap-3">
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
            <div className="sm:col-span-2 flex gap-2">
              <button className="btn-primary flex-1">{editingId ? 'Save changes' : 'Add entry'}</button>
              {editingId && (
                <button type="button" onClick={resetForm} className="btn-secondary">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-lg dark:text-white">History</h2>
            <input
              className="input max-w-[10rem] py-1.5"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ul className="divide-y divide-slate-100 dark:divide-slate-700">
            {entries
              .filter((e) => e.description.toLowerCase().includes(search.toLowerCase()))
              .map((e) => (
              <li key={e.id} className="py-2 flex justify-between items-center text-sm">
                <div>
                  <div className="font-medium">{e.description}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs">{e.type === 'expense' ? e.category : 'Income'}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={e.type === 'income' ? 'text-emerald-600' : 'text-red-500'}>
                    {e.type === 'income' ? '+' : '-'}{format(e.amount)}
                  </span>
                  <button onClick={() => startEdit(e)} className="text-slate-400 hover:text-brand-600 text-xs">
                    edit
                  </button>
                  <button onClick={() => removeEntry(e.id)} className="text-slate-400 hover:text-red-500 text-xs">
                    remove
                  </button>
                </div>
              </li>
            ))}
            {entries.length === 0 && <li className="text-sm text-slate-400 dark:text-slate-500 py-2">No entries yet.</li>}
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <div className="card space-y-2">
          <h2 className="font-semibold text-lg mb-2 dark:text-white">Summary</h2>
          <div className="flex justify-between text-sm"><span>Income</span><span className="text-emerald-600">{format(income)}</span></div>
          <div className="flex justify-between text-sm"><span>Expenses</span><span className="text-red-500">{format(expense)}</span></div>
          <div className="flex justify-between font-semibold pt-2 border-t border-slate-100 dark:border-slate-700">
            <span>Balance</span>
            <span className={balance >= 0 ? 'text-emerald-600' : 'text-red-500'}>{format(balance)}</span>
          </div>
        </div>

        <div className="card space-y-3">
          <h2 className="font-semibold text-lg mb-2 dark:text-white">By category</h2>
          {Object.entries(byCategory).length === 0 && <p className="text-sm text-slate-400 dark:text-slate-500">No expenses yet.</p>}
          {(() => {
            const maxAmt = Math.max(...Object.values(byCategory), 1)
            return Object.entries(byCategory)
              .sort((a, b) => b[1] - a[1])
              .map(([cat, amt]) => (
                <div key={cat} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{cat}</span>
                    <span>{format(amt)}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${(amt / maxAmt) * 100}%` }}
                    />
                  </div>
                </div>
              ))
          })()}
        </div>
      </div>
      </div>
    </div>
  )
}
