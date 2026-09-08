import { Link } from 'react-router-dom'
import { useSeo } from '../../lib/useSeo.js'
import FaqSection from '../../components/FaqSection.jsx'
import AdSlot from '../../components/AdSlot.jsx'

const FAQ = [
  {
    q: 'Should utilities be split evenly or based on usage?',
    a: 'For most shared households, an even split per person works fine for water, gas heating, and internet, since usage differs by habit rather than by who lives there. Electricity is the exception when someone runs a window AC unit, space heater, or home office equipment in their own room — in that case an even split can quietly overcharge low-usage roommates for months.',
  },
  {
    q: 'How do you split utility bills fairly when one roommate works from home?',
    a: 'A simple fix is a flat surcharge: the work-from-home roommate pays an extra fixed amount each month (often $15-40 depending on your climate and their equipment) on top of an even split of the rest. This avoids submetering individual rooms, which almost nobody actually does, while still acknowledging the real cost difference without a monthly argument over kWh estimates.',
  },
  {
    q: 'What is the easiest way to track shared utility bills each month?',
    a: 'Enter each bill (electricity, water, gas, internet) as it arrives, split among whoever is actually on the lease that month, and let a tracker net everything so one person doesn\'t end up fronting for the group. The moment usage changes — someone moves in, moves out, or the WFH situation changes — update the split going forward rather than trying to average out four months of history in your head.',
  },
]

export default function UtilitySplitGuide() {
  useSeo({
    title: 'Shared Utility Bill Splitter for Roommates | Common Expenses Tracker',
    description:
      'A fair way to split electricity, water, gas, and internet bills among roommates, with a free tracker for who owes what each month.',
    path: '/shared-utility-bill-splitter',
  })

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Shared utility bill splitter for roommates
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        Utility bills cause more roommate friction than rent, mostly because they're
        variable and nobody agrees on what "fair" means until the first $300 electric bill
        shows up in July. The good news: unlike rent, most utilities are fine to split
        evenly. The one thing worth adjusting for is genuinely different usage — a home
        office, a space heater, a hot tub — not vague feelings about who showers longer.
      </p>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">A split that stays fair without submetering</h2>
        <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Split water, gas, and internet evenly among everyone on the lease — usage differences here are usually small.</li>
          <li>Split electricity evenly by default too, unless someone has a clear, ongoing extra load.</li>
          <li>If there's a real difference (WFH setup, AC unit, aquarium heater), add a flat monthly surcharge for that person instead of trying to meter it precisely.</li>
          <li>Log every bill as it arrives so the group always knows the current running balance, not a guess at settle-up time.</li>
        </ol>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg dark:text-white">Common utility-split mistakes</h2>
        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
          <li>Waiting until move-out to "figure out who owes what" — nobody remembers four months of bills accurately.</li>
          <li>Trying to precisely meter individual usage instead of a simple flat adjustment — the tracking overhead isn't worth it for most households.</li>
          <li>Not updating the split when someone moves out mid-lease, so the remaining roommates silently absorb their share.</li>
        </ul>
      </section>

      <FaqSection id="faq-utility-split" items={FAQ} />

      <AdSlot slotId="0000000000" />

      <Link to="/split" className="btn-primary inline-block">
        Split your utility bills
      </Link>
    </div>
  )
}
