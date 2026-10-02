import { useState } from 'react'
import { useLocalState } from '../lib/useLocalState.js'
import { useCurrency } from '../lib/CurrencyContext.jsx'
import { downloadCSV } from '../lib/csv.js'
import { nonNegative } from '../lib/forms.js'
import { useSeo } from '../lib/useSeo.js'
import { simulatePayoff } from '../lib/debtPayoff.js'
import PageToolbar from '../components/PageToolbar.jsx'

const EMPTY_FORM = { name: '', balance: '', apr: '', minPayment: '' }

export default function DebtPayoff() {
  useSeo({
    title: 'Debt Payoff Calculator — Snowball vs. Avalanche | Common Expenses Tracker',
    description:
      'See exactly how many months and how much interest it takes to pay off your debts, comparing the snowball and avalanche methods side by side. Free, no sign-up.',
    path: '/debt-payoff',
  })
  const { format } = useCurrency()
  const [debts, setDebts] = useLocalState('debtpayoff.debts', [])
  const [settings, setSettings] = useLocalState('debtpayoff.settings', { extraMonthly: '100', strategy: 'avalanche' })
  const [form, setForm] = useState(EMPTY_FORM)

  const addDebt = (e) => {
    e.preventDefault()
    const balance = parseFloat(form.balance)
    const apr = parseFloat(form.apr)
    const minPayment = parseFloat(form.minPayment)
    if (!form.name.trim() || !balance || Number.isNaN(apr) || !minPayment) return
    setDebts([...debts, { id: Date.now(), name: form.name, balance, apr, minPayment }])
    setForm(EMPTY_FORM)
  }

  const removeDebt = (id) => setDebts(debts.filter((d) => d.id !== id))

  const extraMonthly = parseFloat(settings.extraMonthly) || 0
  const hasValidDebts = debts.length > 0

  const selected = hasValidDebts ? simulatePayoff(debts, extraMonthly, settings.strategy) : null
  const avalanche = hasValidDebts ? simulatePayoff(debts, extraMonthly, 'avalanche') : null
  const snowball = hasValidDebts ? simulatePayoff(debts, extraMonthly, 'snowball') : null
  const interestSaved = avalanche && snowball ? snowball.totalInterest - avalanche.totalInterest : 0

  const exportCSV = () =>
    downloadCSV(
      'debt-payoff-plan.csv',
      (selected?.order || []).map((o) => ({
        debt: o.name,
        monthsToPayoff: o.month ?? 'never (increase payments)',
      }))
    )

  return (
    <div>
      <PageToolbar title="Debt Payoff Calculator" onExport={hasValidDebts ? exportCSV : undefined} onClear={() => setDebts([])} />
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="card space-y-4">
          <h2 className="font-semibold text-lg dark:text-white">Your debts</h2>
          <form onSubmit={addDebt} className="space-y-3">
            <input
              className="input"
              placeholder="Name (e.g. Credit Card)"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className="input"
              type="number"
              min="0"
              step="0.01"
              placeholder="Balance"
              value={form.balance}
              onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, balance: e.target.value })}
              onFocus={(e) => e.target.select()}
            />
            <input
              className="input"
              type="number"
              min="0"
              step="0.01"
              placeholder="Interest rate (APR %)"
              value={form.apr}
              onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, apr: e.target.value })}
              onFocus={(e) => e.target.select()}
            />
            <input
              className="input"
              type="number"
              min="0"
              step="0.01"
              placeholder="Minimum monthly payment"
              value={form.minPayment}
              onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, minPayment: e.target.value })}
              onFocus={(e) => e.target.select()}
            />
            <button className="btn-primary w-full">Add debt</button>
          </form>

          <ul className="divide-y divide-slate-100 dark:divide-slate-700">
            {debts.map((d) => (
              <li key={d.id} className="py-2 flex justify-between items-center text-sm">
                <div>
                  <div className="font-medium">{d.name}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs">
                    {format(d.balance)} at {d.apr}% · min {format(d.minPayment)}
                  </div>
                </div>
                <button onClick={() => removeDebt(d.id)} className="text-slate-400 hover:text-red-500 text-xs">
                  remove
                </button>
              </li>
            ))}
            {debts.length === 0 && <li className="text-sm text-slate-400 dark:text-slate-500 py-2">Add a debt to get started.</li>}
          </ul>
        </div>

        <div className="card space-y-4">
          <h2 className="font-semibold text-lg dark:text-white">Strategy</h2>
          <label className="block text-sm space-y-1">
            <span className="text-slate-600 dark:text-slate-300">Extra payment per month (beyond minimums)</span>
            <input
              className="input"
              type="number"
              min="0"
              step="0.01"
              value={settings.extraMonthly}
              onChange={(e) => nonNegative(e.target.value) && setSettings({ ...settings, extraMonthly: e.target.value })}
              onFocus={(e) => e.target.select()}
            />
          </label>
          <div className="flex gap-2">
            {['avalanche', 'snowball'].map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSettings({ ...settings, strategy: s })}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium capitalize ${
                  settings.strategy === s
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Avalanche targets the highest interest rate first (usually least total interest). Snowball targets the
            smallest balance first (faster visible wins).
          </p>

          {selected && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-700 space-y-2">
              {selected.neverPaidOff ? (
                <p className="text-sm text-red-500">
                  These payments don't cover the interest building up — increase minimums or the extra payment.
                </p>
              ) : (
                <>
                  <div className="flex justify-between text-sm">
                    <span>Debt-free in</span>
                    <span className="font-semibold">{selected.months} months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Total interest paid</span>
                    <span className="font-semibold">{format(selected.totalInterest)}</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        <div className="card space-y-3">
          <h2 className="font-semibold text-lg dark:text-white">Snowball vs. avalanche</h2>
          {!hasValidDebts && <p className="text-sm text-slate-400 dark:text-slate-500">Add debts to compare.</p>}
          {avalanche && snowball && !avalanche.neverPaidOff && !snowball.neverPaidOff && (
            <>
              <div className="flex justify-between text-sm">
                <span>Avalanche total interest</span>
                <span className="font-semibold">{format(avalanche.totalInterest)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Snowball total interest</span>
                <span className="font-semibold">{format(snowball.totalInterest)}</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t border-slate-100 dark:border-slate-700">
                <span>Avalanche saves you</span>
                <span className="font-semibold text-emerald-600">
                  {interestSaved > 0.01 ? format(interestSaved) : 'about the same'}
                </span>
              </div>
            </>
          )}
        </div>

        {selected && !selected.neverPaidOff && (
          <div className="card lg:col-span-3 space-y-3">
            <h2 className="font-semibold text-lg dark:text-white">Payoff order ({settings.strategy})</h2>
            <ul className="divide-y divide-slate-100 dark:divide-slate-700">
              {selected.order.map((o) => (
                <li key={o.id} className="py-2 flex justify-between text-sm">
                  <span>{o.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    {o.month ? `paid off month ${o.month}` : 'not paid off within 50 years'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
