import { useLocalState } from '../lib/useLocalState.js'
import { useCurrency } from '../lib/CurrencyContext.jsx'
import { nonNegative, inRange } from '../lib/forms.js'
import PageToolbar from '../components/PageToolbar.jsx'

const DEFAULT_FORM = { target: '10000', current: '0', months: '12', annualRate: '0' }

function requiredMonthlySaving({ target, current, months, annualRate }) {
  const r = annualRate / 100 / 12
  const remaining = target - current
  if (remaining <= 0) return 0
  if (r === 0) return remaining / months
  const growthFactor = Math.pow(1 + r, months)
  return ((target - current * growthFactor) * r) / (growthFactor - 1)
}

export default function SavingsGoal() {
  const { format } = useCurrency()
  const [form, setForm] = useLocalState('savings.form', DEFAULT_FORM)

  const target = parseFloat(form.target) || 0
  const current = parseFloat(form.current) || 0
  const months = parseInt(form.months, 10) || 0
  const annualRate = parseFloat(form.annualRate) || 0

  const monthly =
    months > 0 ? requiredMonthlySaving({ target, current, months, annualRate }) : 0
  const progressPct = target > 0 ? Math.min((current / target) * 100, 100) : 0

  return (
    <div>
      <PageToolbar title="Savings Goal" onClear={() => setForm(DEFAULT_FORM)} />
      <div className="grid lg:grid-cols-2 gap-6">
      <div className="card space-y-4">
        <h2 className="font-semibold text-lg dark:text-white">Your goal</h2>
        <label className="block text-sm space-y-1">
          <span className="text-slate-600 dark:text-slate-300">Target amount</span>
          <input
            className="input"
            type="number"
            min="0"
            value={form.target}
            onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, target: e.target.value })}
            onFocus={(e) => e.target.select()}
          />
        </label>
        <label className="block text-sm space-y-1">
          <span className="text-slate-600 dark:text-slate-300">Current savings</span>
          <input
            className="input"
            type="number"
            min="0"
            value={form.current}
            onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, current: e.target.value })}
            onFocus={(e) => e.target.select()}
          />
        </label>
        <label className="block text-sm space-y-1">
          <span className="text-slate-600 dark:text-slate-300">Months to reach goal</span>
          <input
            className="input"
            type="number"
            min="1"
            value={form.months}
            onChange={(e) => inRange(e.target.value, 1, Infinity) && setForm({ ...form, months: e.target.value })}
            onFocus={(e) => e.target.select()}
          />
        </label>
        <label className="block text-sm space-y-1">
          <span className="text-slate-600 dark:text-slate-300">Expected annual return (%, optional)</span>
          <input
            className="input"
            type="number"
            min="0"
            step="0.1"
            value={form.annualRate}
            onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, annualRate: e.target.value })}
            onFocus={(e) => e.target.select()}
          />
        </label>
      </div>

      <div className="card flex flex-col justify-center items-center text-center space-y-2">
        <span className="text-sm text-slate-500 dark:text-slate-400">You need to save</span>
        <span className="text-4xl font-bold text-brand-600">{format(monthly)}</span>
        <span className="text-sm text-slate-500 dark:text-slate-400">per month for {months || 0} months</span>
        <div className="w-full space-y-1">
          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Progress</span>
            <span>{progressPct.toFixed(0)}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
        <div className="w-full pt-6 mt-4 border-t border-slate-100 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 space-y-1">
          <div className="flex justify-between"><span>Target</span><span>{format(target)}</span></div>
          <div className="flex justify-between"><span>Already saved</span><span>{format(current)}</span></div>
          <div className="flex justify-between"><span>Remaining</span><span>{format(Math.max(target - current, 0))}</span></div>
        </div>
      </div>
      </div>
    </div>
  )
}
