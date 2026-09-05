import { useState } from 'react'
import { useLocalState } from '../lib/useLocalState.js'
import { formatCurrency } from '../lib/currency.js'

function requiredMonthlySaving({ target, current, months, annualRate }) {
  const r = annualRate / 100 / 12
  const remaining = target - current
  if (remaining <= 0) return 0
  if (r === 0) return remaining / months
  const growthFactor = Math.pow(1 + r, months)
  return ((target - current * growthFactor) * r) / (growthFactor - 1)
}

export default function SavingsGoal() {
  const [form, setForm] = useLocalState('savings.form', {
    target: '10000',
    current: '0',
    months: '12',
    annualRate: '0',
  })

  const target = parseFloat(form.target) || 0
  const current = parseFloat(form.current) || 0
  const months = parseInt(form.months, 10) || 0
  const annualRate = parseFloat(form.annualRate) || 0

  const monthly =
    months > 0 ? requiredMonthlySaving({ target, current, months, annualRate }) : 0

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="card space-y-4">
        <h2 className="font-semibold text-lg">Your goal</h2>
        <label className="block text-sm space-y-1">
          <span className="text-slate-600">Target amount</span>
          <input
            className="input"
            type="number"
            value={form.target}
            onChange={(e) => setForm({ ...form, target: e.target.value })}
          />
        </label>
        <label className="block text-sm space-y-1">
          <span className="text-slate-600">Current savings</span>
          <input
            className="input"
            type="number"
            value={form.current}
            onChange={(e) => setForm({ ...form, current: e.target.value })}
          />
        </label>
        <label className="block text-sm space-y-1">
          <span className="text-slate-600">Months to reach goal</span>
          <input
            className="input"
            type="number"
            value={form.months}
            onChange={(e) => setForm({ ...form, months: e.target.value })}
          />
        </label>
        <label className="block text-sm space-y-1">
          <span className="text-slate-600">Expected annual return (%, optional)</span>
          <input
            className="input"
            type="number"
            step="0.1"
            value={form.annualRate}
            onChange={(e) => setForm({ ...form, annualRate: e.target.value })}
          />
        </label>
      </div>

      <div className="card flex flex-col justify-center items-center text-center space-y-2">
        <span className="text-sm text-slate-500">You need to save</span>
        <span className="text-4xl font-bold text-brand-600">{formatCurrency(monthly)}</span>
        <span className="text-sm text-slate-500">per month for {months || 0} months</span>
        <div className="w-full pt-6 mt-4 border-t border-slate-100 text-sm text-slate-600 space-y-1">
          <div className="flex justify-between"><span>Target</span><span>{formatCurrency(target)}</span></div>
          <div className="flex justify-between"><span>Already saved</span><span>{formatCurrency(current)}</span></div>
          <div className="flex justify-between"><span>Remaining</span><span>{formatCurrency(Math.max(target - current, 0))}</span></div>
        </div>
      </div>
    </div>
  )
}
