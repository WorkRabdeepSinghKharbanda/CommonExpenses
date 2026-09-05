import { useState } from 'react'
import { useLocalState } from '../lib/useLocalState.js'
import { useCurrency } from '../lib/CurrencyContext.jsx'
import { downloadCSV } from '../lib/csv.js'
import PageToolbar from '../components/PageToolbar.jsx'

const FREQUENCIES = { monthly: 1, yearly: 1 / 12, weekly: 52 / 12 }

function nextDueDate(dueDay, frequency) {
  const now = new Date()
  const candidate = new Date(now.getFullYear(), now.getMonth(), dueDay)
  if (frequency === 'monthly' && candidate < now) candidate.setMonth(candidate.getMonth() + 1)
  if (frequency === 'yearly' && candidate < now) candidate.setFullYear(candidate.getFullYear() + 1)
  if (frequency === 'weekly') {
    const diff = (dueDay - now.getDay() + 7) % 7
    candidate.setDate(now.getDate() + (diff === 0 ? 7 : diff))
  }
  return candidate
}

export default function RecurringBills() {
  const { format } = useCurrency()
  const [bills, setBills] = useLocalState('bills.list', [])
  const [form, setForm] = useState({ name: '', amount: '', frequency: 'monthly', dueDay: '1' })
  const [search, setSearch] = useState('')

  const addBill = (e) => {
    e.preventDefault()
    const amount = parseFloat(form.amount)
    const dueDay = parseInt(form.dueDay, 10)
    if (!form.name.trim() || !amount || Number.isNaN(dueDay)) return
    setBills([...bills, { ...form, amount, dueDay, id: Date.now() }])
    setForm({ name: '', amount: '', frequency: 'monthly', dueDay: '1' })
  }

  const removeBill = (id) => setBills(bills.filter((b) => b.id !== id))

  const monthlyTotal = bills.reduce((sum, b) => sum + b.amount * FREQUENCIES[b.frequency], 0)
  const upcoming = [...bills]
    .map((b) => ({ ...b, next: nextDueDate(b.dueDay, b.frequency) }))
    .sort((a, b) => a.next - b.next)

  const dueDayLabel = (freq) => (freq === 'weekly' ? 'Day of week (0=Sun)' : 'Day of month')

  const exportCSV = () =>
    downloadCSV(
      'recurring-bills.csv',
      bills.map((b) => ({ name: b.name, amount: b.amount, frequency: b.frequency, dueDay: b.dueDay }))
    )

  return (
    <div>
      <PageToolbar title="Recurring Bills" onExport={bills.length > 0 ? exportCSV : undefined} onClear={() => setBills([])} />
      <div className="grid lg:grid-cols-3 gap-6">
      <div className="card space-y-4">
        <h2 className="font-semibold text-lg dark:text-white">Add a bill</h2>
        <form onSubmit={addBill} className="space-y-3">
          <input
            className="input"
            placeholder="Name (e.g. Netflix)"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="input"
            type="number"
            step="0.01"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
          />
          <select
            className="input"
            value={form.frequency}
            onChange={(e) => setForm({ ...form, frequency: e.target.value })}
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
          <input
            className="input"
            type="number"
            placeholder={dueDayLabel(form.frequency)}
            value={form.dueDay}
            onChange={(e) => setForm({ ...form, dueDay: e.target.value })}
          />
          <button className="btn-primary w-full">Add bill</button>
        </form>
      </div>

      <div className="card lg:col-span-2 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg dark:text-white">Upcoming</h2>
          <input
            className="input max-w-[10rem] py-1.5"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {upcoming
            .filter((b) => b.name.toLowerCase().includes(search.toLowerCase()))
            .map((b) => (
            <li key={b.id} className="py-2 flex justify-between items-center text-sm">
              <div>
                <div className="font-medium">{b.name}</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs capitalize">
                  {b.frequency} · due {b.next.toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span>{format(b.amount)}</span>
                <button onClick={() => removeBill(b.id)} className="text-slate-400 hover:text-red-500 text-xs">
                  remove
                </button>
              </div>
            </li>
          ))}
          {upcoming.length === 0 && <li className="text-sm text-slate-400 dark:text-slate-500 py-2">No bills yet.</li>}
        </ul>
      </div>

      <div className="card lg:col-span-3 flex justify-between items-center">
        <span className="font-semibold dark:text-white">Total monthly cost</span>
        <span className="text-xl font-bold text-brand-600">{format(monthlyTotal)}</span>
      </div>
      </div>
    </div>
  )
}
