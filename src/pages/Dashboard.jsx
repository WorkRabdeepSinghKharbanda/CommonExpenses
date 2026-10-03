import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocalState } from '../lib/useLocalState.js'
import { useCurrency } from '../lib/CurrencyContext.jsx'
import { useSeo } from '../lib/useSeo.js'
import { computeSettlements } from '../lib/splitMath.js'
import { exportAllData, importAllData } from '../lib/backup.js'
import { FREQUENCIES, nextDueDate } from '../lib/bills.js'
import { simulatePayoff } from '../lib/debtPayoff.js'
import { computeNetWorth } from '../lib/netWorth.js'

export default function Dashboard() {
  useSeo({
    title: 'Dashboard | Common Expenses Tracker',
    description:
      'One overview of your budget balance, upcoming bills, savings progress, debt payoff, net worth, and split-expense balances, pulled from every calculator.',
    path: '/dashboard',
  })
  const { format } = useCurrency()
  const [people] = useLocalState('split.people', [])
  const [expenses] = useLocalState('split.expenses', [])
  const [entries] = useLocalState('budget.entries', [])
  const [bills] = useLocalState('bills.list', [])
  const [savingsForm] = useLocalState('savings.form', { target: '10000', current: '0', months: '12', annualRate: '0' })
  const [debts] = useLocalState('debtpayoff.debts', [])
  const [debtSettings] = useLocalState('debtpayoff.settings', { extraMonthly: '100', strategy: 'avalanche' })
  const [assets] = useLocalState('networth.assets', [])
  const [liabilities] = useLocalState('networth.liabilities', [])

  const [importError, setImportError] = useState('')
  const fileInputRef = useRef(null)

  const income = entries.filter((e) => e.type === 'income').reduce((s, e) => s + e.amount, 0)
  const expense = entries.filter((e) => e.type === 'expense').reduce((s, e) => s + e.amount, 0)
  const balance = income - expense

  const monthlyBillsTotal = bills.reduce((sum, b) => sum + b.amount * FREQUENCIES[b.frequency], 0)
  const nextBill = bills
    .map((b) => ({ ...b, next: nextDueDate(b.dueDay, b.frequency) }))
    .sort((a, b) => a.next - b.next)[0]

  const target = parseFloat(savingsForm.target) || 0
  const current = parseFloat(savingsForm.current) || 0
  const savingsProgressPct = target > 0 ? Math.min((current / target) * 100, 100) : 0

  // `net` always sums to ~0 (every dollar owed by someone is owed to someone
  // else), and there's no "current user" concept in this data model — people
  // are freeform names, not accounts — so there's no single person's balance
  // to show. What's actually meaningful: how much money is still unsettled
  // in the group overall, and how many payments would clear it.
  const { net, settlements } = computeSettlements(people, expenses)
  const totalUnsettled = Object.values(net).filter((v) => v > 0.01).reduce((s, v) => s + v, 0)

  const debtResult = debts.length > 0 ? simulatePayoff(debts, parseFloat(debtSettings.extraMonthly) || 0, debtSettings.strategy) : null
  const totalDebt = debts.reduce((s, d) => s + d.balance, 0)

  const { netWorth } = computeNetWorth(assets, liabilities)
  const hasNetWorthData = assets.length > 0 || liabilities.length > 0

  const hasAnyData =
    people.length > 0 || entries.length > 0 || bills.length > 0 || current > 0 || debts.length > 0 || hasNetWorthData

  const handleImport = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setImportError('')
    try {
      await importAllData(file)
      window.location.reload()
    } catch (err) {
      setImportError(err.message || 'Could not read that file.')
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  return (
    <div className="space-y-8">
      <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>

      {!hasAnyData && (
        <div className="card text-sm text-slate-500 dark:text-slate-400">
          Nothing tracked yet — add data in any calculator and it'll show up here.
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link to="/budget" className="card space-y-1 hover:border-brand-400 border border-transparent">
          <div className="text-xs font-semibold uppercase text-slate-400">Budget balance</div>
          <div className={`text-2xl font-bold ${balance >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
            {format(balance)}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {format(income)} in · {format(expense)} out
          </div>
        </Link>

        <Link to="/bills" className="card space-y-1 hover:border-brand-400 border border-transparent">
          <div className="text-xs font-semibold uppercase text-slate-400">Monthly bills</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">{format(monthlyBillsTotal)}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {nextBill ? `Next: ${nextBill.name} · ${nextBill.next.toLocaleDateString()}` : 'No bills tracked'}
          </div>
        </Link>

        <Link to="/savings" className="card space-y-1 hover:border-brand-400 border border-transparent">
          <div className="text-xs font-semibold uppercase text-slate-400">Savings progress</div>
          <div className="text-2xl font-bold text-emerald-600">{savingsProgressPct.toFixed(0)}%</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {format(current)} of {format(target)}
          </div>
        </Link>

        <Link to="/split" className="card space-y-1 hover:border-brand-400 border border-transparent">
          <div className="text-xs font-semibold uppercase text-slate-400">Unsettled in group</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {totalUnsettled > 0.01 ? format(totalUnsettled) : '—'}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {people.length} {people.length === 1 ? 'person' : 'people'}
            {settlements.length > 0 && ` · ${settlements.length} payment${settlements.length === 1 ? '' : 's'} to settle up`}
          </div>
        </Link>

        <Link to="/debt-payoff" className="card space-y-1 hover:border-brand-400 border border-transparent">
          <div className="text-xs font-semibold uppercase text-slate-400">Debt remaining</div>
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            {totalDebt > 0.01 ? format(totalDebt) : '—'}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {debtResult && !debtResult.neverPaidOff
              ? `Debt-free in ${debtResult.months} months`
              : debts.length > 0
                ? 'Increase payments to pay it off'
                : 'No debts tracked'}
          </div>
        </Link>

        <Link to="/net-worth" className="card space-y-1 hover:border-brand-400 border border-transparent">
          <div className="text-xs font-semibold uppercase text-slate-400">Net worth</div>
          <div className={`text-2xl font-bold ${netWorth >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
            {hasNetWorthData ? format(netWorth) : '—'}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {hasNetWorthData ? `${assets.length} assets · ${liabilities.length} liabilities` : 'Not tracked yet'}
          </div>
        </Link>
      </div>

      <div className="card space-y-3">
        <h2 className="font-semibold text-lg dark:text-white">Backup your data</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Everything is stored only in this browser. Download a backup before clearing your browser data or
          switching devices, and restore it anytime.
        </p>
        <div className="flex flex-wrap gap-2">
          <button onClick={exportAllData} className="btn-secondary text-sm">
            Download backup
          </button>
          <button onClick={() => fileInputRef.current?.click()} className="btn-secondary text-sm">
            Restore from backup
          </button>
          <input ref={fileInputRef} type="file" accept="application/json" onChange={handleImport} className="hidden" />
        </div>
        {importError && <p className="text-sm text-red-500">{importError}</p>}
      </div>
    </div>
  )
}
