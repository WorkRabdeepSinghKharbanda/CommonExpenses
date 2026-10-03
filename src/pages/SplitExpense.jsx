import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLocalState } from '../lib/useLocalState.js'
import { useCurrency } from '../lib/CurrencyContext.jsx'
import { downloadCSV } from '../lib/csv.js'
import { nonNegative } from '../lib/forms.js'
import { useSeo } from '../lib/useSeo.js'
import PageToolbar from '../components/PageToolbar.jsx'
import { computeSettlements } from '../lib/splitMath.js'
import { encodeSplitState, decodeSplitState } from '../lib/shareLink.js'

export default function SplitExpense() {
  useSeo({
    title: 'Split Expense Calculator — Bill Splitter for Groups | Common Expenses Tracker',
    description:
      'Split bills among friends or roommates and see exactly who owes who, with automatic settle-up. Free, no sign-up, runs entirely in your browser.',
    path: '/split',
  })
  const { format } = useCurrency()
  const [people, setPeople] = useLocalState('split.people', [])
  const [expenses, setExpenses] = useLocalState('split.expenses', [])
  const [personName, setPersonName] = useState('')
  const [form, setForm] = useState({ description: '', amount: '', payer: '', participants: [] })
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const [pendingShare, setPendingShare] = useState(null)
  const [shareCopied, setShareCopied] = useState(false)

  // Runs once on mount only (empty deps, deliberately not re-running when
  // searchParams changes) — decodes a shared ?s= link into a pending import
  // the user must explicitly accept, rather than silently overwriting
  // whatever they already have in this browser. Assumes a fresh navigation
  // per share link (the normal flow); a second ?s= arriving via client-side
  // navigation while this component stays mounted would not be re-processed.
  useEffect(() => {
    const encoded = searchParams.get('s')
    if (!encoded) return
    const decoded = decodeSplitState(encoded)
    if (decoded) setPendingShare(decoded)
    // Drop ?s= from the URL either way, so refreshing the page or sharing
    // the (now-local) URL again doesn't re-trigger the same prompt.
    setSearchParams({}, { replace: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const acceptSharedSplit = () => {
    if (!pendingShare) return
    const hasExistingData = people.length > 0 || expenses.length > 0
    if (hasExistingData && !confirm('This replaces your current split data with no undo. Continue?')) return
    setPeople(pendingShare.people)
    setExpenses(pendingShare.expenses)
    setPendingShare(null)
  }

  const shareSplit = async () => {
    const encoded = encodeSplitState(people, expenses)
    const url = `${window.location.origin}/split?s=${encoded}`
    try {
      await navigator.clipboard.writeText(url)
      setShareCopied(true)
      setTimeout(() => setShareCopied(false), 2000)
    } catch {
      // Clipboard API unavailable (e.g. insecure context, permissions) —
      // fall back to a prompt so the user can still copy it manually.
      window.prompt('Copy this link:', url)
    }
  }

  const addPerson = (e) => {
    e.preventDefault()
    const name = personName.trim()
    if (!name || people.includes(name)) return
    setPeople([...people, name])
    setPersonName('')
  }

  const removePerson = (name) => {
    setPeople(people.filter((p) => p !== name))
    setExpenses(expenses.filter((ex) => ex.payer !== name && !ex.participants.includes(name)))
  }

  const toggleParticipant = (name) => {
    setForm((f) => ({
      ...f,
      participants: f.participants.includes(name)
        ? f.participants.filter((p) => p !== name)
        : [...f.participants, name],
    }))
  }

  const addExpense = (e) => {
    e.preventDefault()
    const amount = parseFloat(form.amount)
    if (!form.description.trim() || !amount || !form.payer || form.participants.length === 0) return
    setExpenses([...expenses, { ...form, amount, id: Date.now() }])
    setForm({ description: '', amount: '', payer: '', participants: [] })
  }

  const removeExpense = (id) => setExpenses(expenses.filter((e) => e.id !== id))

  const { net, settlements } = computeSettlements(people, expenses)

  const exportCSV = () =>
    downloadCSV(
      'split-expenses.csv',
      expenses.map((e) => ({
        description: e.description,
        amount: e.amount,
        payer: e.payer,
        participants: e.participants.join('; '),
      }))
    )

  const clearAll = () => {
    setPeople([])
    setExpenses([])
  }

  return (
    <div>
      <PageToolbar title="Split Expense" onExport={expenses.length > 0 ? exportCSV : undefined} onClear={clearAll} />

      {pendingShare && (
        <div className="card mb-6 flex flex-wrap items-center justify-between gap-3 border-brand-300 dark:border-brand-700">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Someone shared a split with {pendingShare.people.length} people and {pendingShare.expenses.length} expenses.{' '}
            <strong className="text-slate-900 dark:text-white">Importing replaces</strong> what's currently in this browser — there's no undo.
          </p>
          <div className="flex gap-2 shrink-0">
            <button onClick={acceptSharedSplit} className="btn-primary text-sm">Import</button>
            <button onClick={() => setPendingShare(null)} className="btn-secondary text-sm">Dismiss</button>
          </div>
        </div>
      )}

      {people.length > 0 && (
        <div className="flex justify-end mb-4">
          <button onClick={shareSplit} className="btn-secondary text-sm">
            {shareCopied ? 'Link copied!' : 'Share this split'}
          </button>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
      <div className="card space-y-4">
        <h2 className="font-semibold text-lg dark:text-white">People</h2>
        <form onSubmit={addPerson} className="flex gap-2">
          <input
            className="input"
            placeholder="Add a name"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
          <button className="btn-primary shrink-0">Add</button>
        </form>
        <ul className="space-y-1">
          {people.map((p) => (
            <li key={p} className="flex justify-between items-center text-sm py-1">
              <span>{p}</span>
              <button onClick={() => removePerson(p)} className="text-slate-400 hover:text-red-500 text-xs">
                remove
              </button>
            </li>
          ))}
          {people.length === 0 && <li className="text-sm text-slate-400 dark:text-slate-500">Add people to get started.</li>}
        </ul>
      </div>

      <div className="card space-y-4 lg:col-span-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-semibold text-lg dark:text-white">Expenses</h2>
          <input
            className="input max-w-[10rem] py-1.5"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <form onSubmit={addExpense} className="grid sm:grid-cols-2 gap-3">
          <input
            className="input sm:col-span-2"
            placeholder="Description (e.g. Dinner)"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <input
            className="input"
            placeholder="Amount"
            type="number"
            min="0"
            step="0.01"
            value={form.amount}
            onChange={(e) => nonNegative(e.target.value) && setForm({ ...form, amount: e.target.value })}
            onFocus={(e) => e.target.select()}
          />
          <select
            className="input"
            value={form.payer}
            onChange={(e) => setForm({ ...form, payer: e.target.value })}
          >
            <option value="">Paid by...</option>
            {people.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <div className="sm:col-span-2 flex flex-wrap items-center gap-2">
            {people.map((p) => (
              <button
                type="button"
                key={p}
                onClick={() => toggleParticipant(p)}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  form.participants.includes(p)
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300'
                }`}
              >
                {p}
              </button>
            ))}
            {people.length > 0 && (
              <button
                type="button"
                onClick={() =>
                  setForm((f) => ({
                    ...f,
                    participants: f.participants.length === people.length ? [] : [...people],
                  }))
                }
                className="text-xs text-brand-600 hover:underline ml-1"
              >
                {form.participants.length === people.length ? 'Clear all' : 'Select all'}
              </button>
            )}
          </div>
          <button className="btn-primary sm:col-span-2" disabled={people.length === 0}>
            Add expense
          </button>
        </form>

        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {expenses
            .filter((e) => e.description.toLowerCase().includes(search.toLowerCase()))
            .map((e) => (
            <li key={e.id} className="py-2 flex justify-between items-center text-sm">
              <div>
                <div className="font-medium">{e.description}</div>
                <div className="text-slate-500 dark:text-slate-400 text-xs">
                  {e.payer} paid {format(e.amount)} for {e.participants.join(', ')}
                </div>
              </div>
              <button onClick={() => removeExpense(e.id)} className="text-slate-400 hover:text-red-500 text-xs">
                remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="card space-y-3">
        <h2 className="font-semibold text-lg dark:text-white">Balances</h2>
        {people.map((p) => (
          <div key={p} className="flex justify-between text-sm">
            <span>{p}</span>
            <span className={net[p] >= 0 ? 'text-emerald-600' : 'text-red-500'}>
              {format(net[p])}
            </span>
          </div>
        ))}
      </div>

      <div className="card space-y-3 lg:col-span-2">
        <h2 className="font-semibold text-lg dark:text-white">Settle up</h2>
        {settlements.length === 0 && <p className="text-sm text-slate-400 dark:text-slate-500">Everyone is settled up.</p>}
        <ul className="space-y-2">
          {settlements.map((s, i) => (
            <li key={i} className="text-sm flex items-center gap-2">
              <span className="font-medium">{s.from}</span>
              <span className="text-slate-400 dark:text-slate-500">owes</span>
              <span className="font-medium">{s.to}</span>
              <span className="ml-auto font-semibold">{format(s.amount)}</span>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  )
}
