import { useState } from 'react'
import { useLocalState } from '../lib/useLocalState.js'
import { useCurrency } from '../lib/CurrencyContext.jsx'
import { downloadCSV } from '../lib/csv.js'
import { nonNegative } from '../lib/forms.js'
import { useSeo } from '../lib/useSeo.js'
import { computeNetWorth } from '../lib/netWorth.js'
import PageToolbar from '../components/PageToolbar.jsx'

const EMPTY_FORM = { name: '', amount: '' }

function ItemList({ title, items, onAdd, onRemove, format }) {
  const [form, setForm] = useState(EMPTY_FORM)

  const submit = (e) => {
    e.preventDefault()
    const amount = parseFloat(form.amount)
    if (!form.name.trim() || !amount) return
    onAdd({ id: Date.now(), name: form.name, amount })
    setForm(EMPTY_FORM)
  }

  const total = items.reduce((s, i) => s + i.amount, 0)

  return (
    <div className="card space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg dark:text-white">{title}</h2>
        <span className="text-sm font-semibold">{format(total)}</span>
      </div>
      <form onSubmit={submit} className="flex gap-2">
        <input
          className="input"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="input w-32"
          type="number"
          min="0"
          step="0.01"
          placeholder="Amount"
          value={form.amount}
          onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, amount: e.target.value })}
          onFocus={(e) => e.target.select()}
        />
        <button className="btn-primary shrink-0">Add</button>
      </form>
      <ul className="divide-y divide-slate-100 dark:divide-slate-700">
        {items.map((item) => (
          <li key={item.id} className="py-2 flex justify-between items-center text-sm">
            <span>{item.name}</span>
            <div className="flex items-center gap-3">
              <span>{format(item.amount)}</span>
              <button onClick={() => onRemove(item.id)} className="text-slate-400 hover:text-red-500 text-xs">
                remove
              </button>
            </div>
          </li>
        ))}
        {items.length === 0 && <li className="text-sm text-slate-400 dark:text-slate-500 py-2">None added yet.</li>}
      </ul>
    </div>
  )
}

export default function NetWorth() {
  useSeo({
    title: 'Net Worth Calculator | Common Expenses Tracker',
    description:
      'Calculate your personal net worth from your real assets and liabilities, and track it over time with saved snapshots. Free, no sign-up.',
    path: '/net-worth',
  })
  const { format } = useCurrency()
  const [assets, setAssets] = useLocalState('networth.assets', [])
  const [liabilities, setLiabilities] = useLocalState('networth.liabilities', [])
  const [history, setHistory] = useLocalState('networth.history', [])

  const { totalAssets, totalLiabilities, netWorth } = computeNetWorth(assets, liabilities)

  const saveSnapshot = () => {
    const today = new Date().toISOString().slice(0, 10)
    setHistory([...history.filter((h) => h.date !== today), { date: today, netWorth }])
  }

  const exportCSV = () =>
    downloadCSV('net-worth-history.csv', history.map((h) => ({ date: h.date, netWorth: h.netWorth.toFixed(2) })))

  const clearAll = () => {
    setAssets([])
    setLiabilities([])
    setHistory([])
  }

  const maxAbs = Math.max(...history.map((h) => Math.abs(h.netWorth)), 1)

  return (
    <div>
      <PageToolbar title="Net Worth Calculator" onExport={history.length > 0 ? exportCSV : undefined} onClear={clearAll} />
      <div className="grid lg:grid-cols-2 gap-6">
        <ItemList title="Assets" items={assets} format={format} onAdd={(a) => setAssets([...assets, a])} onRemove={(id) => setAssets(assets.filter((a) => a.id !== id))} />
        <ItemList title="Liabilities" items={liabilities} format={format} onAdd={(l) => setLiabilities([...liabilities, l])} onRemove={(id) => setLiabilities(liabilities.filter((l) => l.id !== id))} />

        <div className="card lg:col-span-2 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-xs font-semibold uppercase text-slate-400">Net worth</div>
            <div className={`text-3xl font-bold ${netWorth >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
              {format(netWorth)}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {format(totalAssets)} assets − {format(totalLiabilities)} liabilities
            </div>
          </div>
          <button onClick={saveSnapshot} className="btn-primary shrink-0">
            Save today's snapshot
          </button>
        </div>

        {history.length > 0 && (
          <div className="card lg:col-span-2 space-y-3">
            <h2 className="font-semibold text-lg dark:text-white">History</h2>
            {[...history].sort((a, b) => a.date.localeCompare(b.date)).map((h) => (
              <div key={h.date} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{h.date}</span>
                  <span>{format(h.netWorth)}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${h.netWorth >= 0 ? 'bg-emerald-500' : 'bg-red-500'}`}
                    style={{ width: `${(Math.abs(h.netWorth) / maxAbs) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
