import { useLocalState } from '../lib/useLocalState.js'
import { useCurrency } from '../lib/CurrencyContext.jsx'
import { nonNegative, inRange } from '../lib/forms.js'
import { useSeo } from '../lib/useSeo.js'
import { computeTip } from '../lib/tipMath.js'
import PageToolbar from '../components/PageToolbar.jsx'

const DEFAULT_FORM = { bill: '50', tipPct: '18', people: '1' }
const QUICK_TIPS = [10, 15, 18, 20, 25]

export default function TipCalculator() {
  useSeo({
    title: 'Tip Calculator | Common Expenses Tracker',
    description:
      'Calculate the tip, total bill, and amount per person, splitting evenly among any group size. Free, no sign-up.',
    path: '/tip-calculator',
  })
  const { format } = useCurrency()
  const [form, setForm] = useLocalState('tip.form', DEFAULT_FORM)

  const bill = parseFloat(form.bill) || 0
  const tipPct = parseFloat(form.tipPct) || 0
  const people = parseInt(form.people, 10) || 1

  const { tipAmount, total, perPerson, tipPerPerson } = computeTip(bill, tipPct, people)

  return (
    <div>
      <PageToolbar title="Tip Calculator" onClear={() => setForm(DEFAULT_FORM)} />
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card space-y-4">
          <h2 className="font-semibold text-lg dark:text-white">Bill details</h2>
          <label className="block text-sm space-y-1">
            <span className="text-slate-600 dark:text-slate-300">Bill amount</span>
            <input
              className="input"
              type="number"
              min="0"
              step="0.01"
              value={form.bill}
              onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, bill: e.target.value })}
              onFocus={(e) => e.target.select()}
            />
          </label>

          <div className="space-y-2">
            <span className="text-sm text-slate-600 dark:text-slate-300">Tip percentage</span>
            <div className="flex flex-wrap gap-2">
              {QUICK_TIPS.map((pct) => (
                <button
                  key={pct}
                  type="button"
                  onClick={() => setForm({ ...form, tipPct: String(pct) })}
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    form.tipPct === String(pct)
                      ? 'bg-brand-600 text-white border-brand-600'
                      : 'border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300'
                  }`}
                >
                  {pct}%
                </button>
              ))}
            </div>
            <input
              className="input"
              type="number"
              min="0"
              step="0.5"
              value={form.tipPct}
              onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, tipPct: e.target.value })}
              onFocus={(e) => e.target.select()}
            />
          </div>

          <label className="block text-sm space-y-1">
            <span className="text-slate-600 dark:text-slate-300">Split among how many people</span>
            <input
              className="input"
              type="number"
              min="1"
              value={form.people}
              onChange={(e) => inRange(e.target.value, 1, 999) && setForm({ ...form, people: e.target.value })}
              onFocus={(e) => e.target.select()}
            />
          </label>
        </div>

        <div className="card flex flex-col justify-center items-center text-center space-y-2">
          <span className="text-sm text-slate-500 dark:text-slate-400">Each person pays</span>
          <span className="text-4xl font-bold text-brand-600">{format(perPerson)}</span>
          {people > 1 && (
            <span className="text-sm text-slate-500 dark:text-slate-400">({format(tipPerPerson)} of that is tip)</span>
          )}
          <div className="w-full pt-6 mt-4 border-t border-slate-100 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <div className="flex justify-between"><span>Bill</span><span>{format(bill)}</span></div>
            <div className="flex justify-between"><span>Tip ({tipPct}%)</span><span>{format(tipAmount)}</span></div>
            <div className="flex justify-between font-semibold pt-1 border-t border-slate-100 dark:border-slate-700">
              <span>Total</span><span>{format(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
