import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'

const FAQ = [
  {
    q: 'What is the fairest way to split bills with roommates?',
    a: 'Split shared bills (rent, utilities, groceries) proportionally to how many people use them, and split one-off expenses (like a dinner) only among the people who were actually there. Track every expense as it happens instead of settling up from memory at the end of the month.',
  },
  {
    q: 'How do I split a bill unevenly?',
    a: 'For bills that should not be split equally (e.g. someone used a room-based utility more), just adjust who is marked as a participant on that specific expense rather than always splitting among everyone.',
  },
  {
    q: 'What is "settling up" and how does it work?',
    a: 'Settling up means calculating the minimum number of payments needed so everyone ends up even, instead of every person paying every other person back individually. A good splitter nets all expenses first, then suggests the fewest transfers.',
  },
]

export default function SplitBillsGuide() {
  useSeo({
    title: 'How to Split Bills With Roommates Fairly | Common Expenses Tracker',
    description:
      'A practical guide to splitting shared bills, rent, and groceries with roommates — plus a free calculator that tracks who owes who and settles up automatically.',
    path: '/split-bills-with-roommates',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        How to split bills with roommates, fairly
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        Splitting expenses with roommates goes wrong for one reason: nobody tracks it in
        real time, so by month-end everyone is guessing who paid for what. The fix isn't a
        stricter rule — it's writing every shared expense down the moment it happens, then
        letting the math settle up at the end.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">A simple system that works</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Log every shared expense with who paid and who it was for.</li>
          <li>Split recurring costs (rent, utilities) among everyone who lives there.</li>
          <li>Split one-off costs (a shared dinner, a cab) only among who was involved.</li>
          <li>Let the tracker net everything out and tell you the minimum payments to settle up.</li>
        </ol>
      </section>

      <FaqSection id="faq-split-bills" items={FAQ} />

      <AdSlot slotId="0000000000" />

      <Link to="/split" className="btn-primary inline-block">
        Try the free split expense calculator
      </Link>
    </div>
  )
}
