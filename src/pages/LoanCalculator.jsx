import { useState } from 'react'
import { useLocalState } from '../lib/useLocalState.js'
import { useCurrency } from '../lib/CurrencyContext.jsx'
import { downloadCSV } from '../lib/csv.js'
import { nonNegative } from '../lib/forms.js'
import { useSeo } from '../lib/useSeo.js'
import { computeEMI, amortizationSchedule } from '../lib/loanMath.js'
import PageToolbar from '../components/PageToolbar.jsx'

const DEFAULT_FORM = { principal: '10000', annualRate: '8', years: '3' }

export default function LoanCalculator() {
  useSeo({
    title: 'Loan / EMI Calculator — Reducing Balance | Common Expenses Tracker',
    description:
      'Calculate your monthly loan payment (EMI) using the standard reducing-balance method, with a full amortization schedule. Free, no sign-up.',
    path: '/loan-calculator',
  })
  const { format } = useCurrency()
  const [form, setForm] = useLocalState('loan.form', DEFAULT_FORM)
  const [showSchedule, setShowSchedule] = useState(false)

  const principal = parseFloat(form.principal) || 0
  const annualRate = parseFloat(form.annualRate) || 0
  const years = parseFloat(form.years) || 0
  const months = Math.round(years * 12)

  const hasValidInputs = principal > 0 && months > 0
  const emi = hasValidInputs ? computeEMI(principal, annualRate, months) : 0
  const totalPaid = emi * months
  const totalInterest = totalPaid - principal

  const schedule = hasValidInputs ? amortizationSchedule(principal, annualRate, months) : []

  const exportCSV = () =>
    downloadCSV(
      'loan-amortization-schedule.csv',
      schedule.map((row) => ({
        month: row.month,
        interest: row.interest.toFixed(2),
        principal: row.principal.toFixed(2),
        balance: row.balance.toFixed(2),
      }))
    )

  return (
    <div>
      <PageToolbar title="Loan / EMI Calculator" onExport={hasValidInputs ? exportCSV : undefined} onClear={() => setForm(DEFAULT_FORM)} />
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card space-y-4">
          <h2 className="font-semibold text-lg dark:text-white">Loan details</h2>
          <label className="block text-sm space-y-1">
            <span className="text-slate-600 dark:text-slate-300">Loan amount</span>
            <input
              className="input"
              type="number"
              min="0"
              step="0.01"
              value={form.principal}
              onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, principal: e.target.value })}
              onFocus={(e) => e.target.select()}
            />
          </label>
          <label className="block text-sm space-y-1">
            <span className="text-slate-600 dark:text-slate-300">Interest rate (annual %)</span>
            <input
              className="input"
              type="number"
              min="0"
              step="0.01"
              value={form.annualRate}
              onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, annualRate: e.target.value })}
              onFocus={(e) => e.target.select()}
            />
          </label>
          <label className="block text-sm space-y-1">
            <span className="text-slate-600 dark:text-slate-300">Loan term (years)</span>
            <input
              className="input"
              type="number"
              min="0"
              step="0.5"
              value={form.years}
              onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, years: e.target.value })}
              onFocus={(e) => e.target.select()}
            />
          </label>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Uses the standard reducing-balance method: interest is calculated on the remaining balance each month,
            not the original amount — the method almost every real loan uses.
          </p>
        </div>

        <div className="card flex flex-col justify-center items-center text-center space-y-2">
          <span className="text-sm text-slate-500 dark:text-slate-400">Monthly payment (EMI)</span>
          <span className="text-4xl font-bold text-brand-600">{hasValidInputs ? format(emi) : '—'}</span>
          <span className="text-sm text-slate-500 dark:text-slate-400">for {months || 0} months</span>
          <div className="w-full pt-6 mt-4 border-t border-slate-100 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <div className="flex justify-between"><span>Principal</span><span>{format(principal)}</span></div>
            <div className="flex justify-between"><span>Total interest</span><span>{format(Math.max(totalInterest, 0))}</span></div>
            <div className="flex justify-between font-semibold pt-1 border-t border-slate-100 dark:border-slate-700">
              <span>Total repayment</span><span>{format(Math.max(totalPaid, 0))}</span>
            </div>
          </div>
        </div>

        {hasValidInputs && (
          <div className="card lg:col-span-2 space-y-3">
            <button
              onClick={() => setShowSchedule((s) => !s)}
              className="text-sm font-semibold text-brand-600 hover:underline"
            >
              {showSchedule ? 'Hide' : 'Show'} full amortization schedule ({months} months)
            </button>
            {showSchedule && (
              <div className="max-h-96 overflow-y-auto">
                <table className="w-full text-sm">
                  <thead className="sticky top-0 bg-white dark:bg-slate-800">
                    <tr className="text-left text-slate-500 dark:text-slate-400">
                      <th className="py-1 pr-2">Month</th>
                      <th className="py-1 pr-2">Interest</th>
                      <th className="py-1 pr-2">Principal</th>
                      <th className="py-1">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row) => (
                      <tr key={row.month} className="border-t border-slate-100 dark:border-slate-700">
                        <td className="py-1 pr-2">{row.month}</td>
                        <td className="py-1 pr-2">{format(row.interest)}</td>
                        <td className="py-1 pr-2">{format(row.principal)}</td>
                        <td className="py-1">{format(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
