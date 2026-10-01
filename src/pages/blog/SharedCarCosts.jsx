import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'

const post = {
  slug: 'splitting-costs-for-a-shared-car',
  title: 'Splitting costs for a shared or carpooled car, fairly',
  description: 'How to split gas, insurance, and maintenance for a car used by multiple people, based on usage instead of a flat split.',
  date: '2026-04-23',
}

const FAQ = [
  {
    q: 'Should every car cost be split by mileage?',
    a: "No. Costs that scale with driving — gas and routine maintenance like oil changes and tires — should split by mileage. Costs that exist regardless of how much the car is driven, like insurance and registration, should split flat or by an agreed ownership share instead.",
  },
  {
    q: 'How do we track mileage without it becoming a chore?',
    a: "Record the odometer reading at the start and end of each month, or use a phone's automatic trip log if the driver has one. Either way, log it at the same time you log a gas fill-up or bill so you're not reconstructing numbers later.",
  },
  {
    q: 'Who pays for damage from an accident or a pothole?',
    a: "Whoever was driving at the time, in full — this cost shouldn't get absorbed into the shared mileage pool. Treating incident-specific damage as a shared cost removes the incentive to drive carefully and feels unfair to the person who wasn't behind the wheel.",
  },
  {
    q: 'How often should we settle up?',
    a: "Monthly works well for most shared cars — log every fill-up and bill as it happens, then reconcile the mileage-based and flat categories together once a month. Settling after every single tank of gas turns a shared car into a running argument instead of simple bookkeeping.",
  },
  {
    q: "What if one person owns the car and the other just uses it occasionally?",
    a: "Split fixed costs like insurance and registration by an agreed ownership share rather than evenly, since the owner carries the asset risk even when it isn't being driven. Usage-based costs like gas still split by mileage regardless of who owns the car.",
  },
  {
    q: 'What happens if the mileage split feels unfair after a few months?',
    a: "Recalculate it — the ratio isn't fixed forever. If one person's driving pattern changes (a new job with a longer commute, for example), update the mileage ratio going forward rather than trying to true up past months.",
  },
]

export default function SharedCarCosts() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-shared-car-costs">
      <p>
        A 50/50 split feels fair until one roommate uses the car for a daily 20-minute
        commute and the other drives it once a week to the grocery store. Flat splits
        work for costs that don't scale with use; they break down for costs that do. The
        fix is splitting each cost category by the driver most likely to have caused it.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">What it is</h2>
      <p>
        A fair shared-car system treats "car costs" as more than one category, because
        they don't all behave the same way. Some costs — gas, wear-and-tear maintenance —
        scale directly with how much the car is driven, so they should be split by
        mileage. Others — insurance, registration — exist whether the car is driven 10
        miles or 1,000 miles a month, so a mileage split doesn't make sense for them.
        Getting this distinction right up front is what makes the whole system feel fair
        to both drivers.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">How to do it</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>Sort every car-related cost into one of two groups: usage-based (gas, routine maintenance) or fixed (insurance, registration, loan payment).</li>
        <li>Track odometer readings at the start and end of each month for each driver, or use a trip log.</li>
        <li>
          Turn the mileage readings into a ratio — say 600 miles for Driver A and 200 for
          Driver B is a 75/25 split — and apply that ratio to every usage-based cost for
          the month.
        </li>
        <li>Split fixed costs evenly or by an ownership share agreed on up front, independent of the mileage ratio.</li>
        <li>
          Log each fill-up and bill as it happens, then settle both categories together
          once a month. The{' '}
          <Link to="/split" className="text-brand-600 hover:underline">
            cost-splitting calculator
          </Link>{' '}
          handles the arithmetic once you have the mileage ratio and the month's bills.
        </li>
      </ol>
      <p>
        It's worth putting the agreed formula in writing somewhere both drivers can see
        it — a shared note or a pinned message is enough. The goal isn't bureaucracy, it's
        removing any ambiguity about which category a new cost belongs to before it
        becomes a disagreement.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Benefits</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>The person who drives more pays more for the costs that scale with driving, which matches most people's sense of fairness.</li>
        <li>Fixed costs stay predictable and don't swing month to month based on who happened to drive further.</li>
        <li>A clear, agreed-on formula removes the need to negotiate fairness every single time a bill comes in.</li>
        <li>Incident-specific damage staying outside the shared pool protects both drivers from paying for someone else's mistake.</li>
      </ul>
      <p>
        Splitting by category also makes it easier to spot when driving patterns have
        shifted — if one person's mileage share climbs from 60% to 85% over a few months,
        that's worth a conversation about whether the fixed-cost split (insurance,
        registration) should change too, not just the gas bill.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Where manual tracking falls short</h2>
      <p>
        Remembering who drove how much, and reconstructing it weeks later from memory or
        scattered gas receipts, almost always produces a split that one person feels is
        wrong — because it probably is. Without a running mileage log and a running total
        of who's paid what, small discrepancies accumulate silently until someone finally
        does the math and finds an imbalance that's awkward to bring up after the fact.
        A single running total removes that guesswork.
      </p>
      <p>
        It also tends to hide which cost category is actually driving the imbalance. A
        driver who feels the split is unfair usually can't say whether it's the gas, the
        maintenance, or a one-off repair that's throwing things off — because none of it
        was ever broken down by category in the first place. Splitting the running total
        the same way you split the costs (by category, not just one combined number)
        makes it obvious where the disagreement actually is.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Everyday examples</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Two roommates sharing a car for a daily commute versus occasional weekend errands.</li>
        <li>Siblings sharing a family car while one is away at college part of the year.</li>
        <li>A couple where one partner owns the car and the other contributes toward gas and maintenance only.</li>
        <li>A carpool group splitting gas by rider rather than by who's driving, when ownership and usage don't overlap.</li>
        <li>A parking-lot scrape that one driver caused, kept out of the shared gas-and-maintenance pool entirely.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Common mistakes</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Splitting every cost 50/50 regardless of who actually drives more.</li>
        <li>Applying the mileage ratio to fixed costs like insurance, which don't scale with driving.</li>
        <li>Letting incident-specific damage get absorbed into the shared monthly pool instead of billed to the driver at fault.</li>
        <li>Trying to settle after every single gas fill-up instead of on a fixed monthly schedule.</li>
        <li>Never recalculating the mileage ratio after a driver's habits change, like a new commute.</li>
      </ul>
      <p>
        Most of these mistakes come from treating "the car" as one single cost instead of
        several different costs that behave differently. Once gas, maintenance, fixed
        costs, and incident damage are separated and tracked on their own, the fair split
        for each one becomes fairly obvious.
      </p>

      <Link to="/split" className="btn-primary inline-block">
        Split your shared car costs
      </Link>
    </BlogPostLayout>
  )
}
