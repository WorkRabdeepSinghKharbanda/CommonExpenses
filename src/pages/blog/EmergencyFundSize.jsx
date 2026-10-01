import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'how-big-should-your-emergency-fund-be')

const FAQ = [
  {
    q: 'Is "three to six months of expenses" actually the right target?',
    a: "It's a reasonable starting range, not a fixed rule. Someone with stable salaried income and an easily replaceable job can lean toward three months, while someone with variable income or a specialized job search ahead of them should lean toward six to nine.",
  },
  {
    q: 'Should the fund be based on my income or my expenses?',
    a: 'Your essential expenses — rent, utilities, groceries, minimum debt payments — not your income. The fund exists to cover what you must spend to get by, which is usually well below your income, so budgeting against income overshoots the actual need.',
  },
  {
    q: 'What if my income is irregular, like freelance or commission work?',
    a: 'Irregular income is one of the strongest reasons to build toward the higher end of the range, since you have less certainty about when the next paycheck arrives. Some people in this situation build closer to nine months rather than three.',
  },
  {
    q: 'Where should an emergency fund be kept?',
    a: "Somewhere accessible without penalty or delay, separate from your everyday spending account so it isn't accidentally spent on non-emergencies. It should not be tied up in something you'd have to sell at a loss or wait weeks to access.",
  },
  {
    q: 'Should I keep building the fund once I hit my target?',
    a: 'Once you hit the target, it makes sense to redirect new savings toward other goals and simply let the fund sit, checking in periodically. The target itself should be revisited if your expenses or income situation changes meaningfully.',
  },
  {
    q: 'Does having dependents change the target?',
    a: "Yes. If dependents rely solely on your income, that's a reason to add a buffer on top of whatever the baseline range would otherwise suggest, since the cost of being unprepared is higher for a household than for one person.",
  },
  {
    q: "What's the fastest way to turn this into a concrete number?",
    a: 'Add up your actual essential monthly expenses, multiply by your target number of months, and treat that total as a savings goal to track toward — rather than leaving the target as a vague idea.',
  },
]

export default function EmergencyFundSize() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-how-big-should-your-emergency-fund-be">
      <p>
        "Three to six months of expenses" is the number everyone repeats, but it's a
        starting range, not a rule that fits every situation. The right size depends on
        how stable your income is and how quickly you could replace it if it stopped —
        and getting from that vague range to an actual savings number is where most people
        get stuck.
      </p>
      <p>
        This matters because an emergency fund that's sized wrong fails in one of two
        directions. Too small, and it runs out before your income situation is actually
        resolved, which defeats the point of having one. Too large, and money that could
        be working toward other goals — paying down debt, investing, a near-term purchase
        — sits idle for longer than it needs to. Getting the size right is less about
        following a slogan and more about matching the fund to your actual risk.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        What an emergency fund is actually for
      </h2>
      <p>
        An emergency fund exists to cover essential living costs during a period without
        income — a job loss, an unpaid medical leave, an unexpected gap between jobs — so
        you aren't forced into debt or a rushed decision to cover rent and groceries. It
        is not a general savings account for planned purchases, and it is not an
        investment account aiming for growth. Its only job is to be available, in full,
        the moment you need it.
      </p>
      <p>
        That single job is also what should guide every decision about the fund — how big
        it is, where it's kept, and when it gets used. A fund that's hard to access
        quickly, or that gets dipped into for a vacation or a new phone, isn't really
        serving the purpose it was built for anymore, even if the balance looks healthy on
        paper.
      </p>
      <p>
        It's worth noting what an emergency fund is not for, too: a planned expense you
        can see coming, like a known upcoming medical procedure or a car you already know
        needs replacing, is better handled with its own dedicated savings goal rather than
        pulled from the emergency fund. Using the fund for anything predictable leaves it
        thinner exactly when a genuinely unplanned event shows up.
      </p>
      <p>
        It's also worth separating the emergency fund from other savings goals even when
        they live in similar accounts. A down-payment fund or a vacation fund can
        reasonably be invested or committed to a timeline, because you have some control
        over when you need that money. An emergency fund doesn't get that luxury — by
        definition, you don't get to choose when the emergency happens, so the money has
        to be ready before you know you'll need it.
      </p>
      <p>
        One more thing worth stating plainly: the fund doesn't need to be built all at
        once. A partial fund is still useful — three weeks of essential expenses saved is
        better than none, even if the eventual target is six months. Treating the target
        as a direction to build toward, rather than an all-or-nothing threshold, makes the
        early progress feel worthwhile instead of pointless.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        How to size it for your situation
      </h2>
      <p>
        Turning the vague "three to six months" range into a number you can actually save
        toward takes a short exercise: figure out your real essential monthly cost, pick a
        multiplier that matches your actual risk, and set that as a fixed target.
      </p>
      <ol className="list-decimal list-inside space-y-1">
        <li>List your essential monthly expenses — rent, utilities, groceries, minimum debt payments.</li>
        <li>Add them up to get one essential monthly total, leaving out discretionary spending.</li>
        <li>Pick a target number of months based on income stability (3 for stable, 6-9 for variable).</li>
        <li>Add a buffer on top if dependents rely solely on your income.</li>
        <li>Multiply the monthly total by the target number of months.</li>
        <li>
          Set that figure as a goal in a{' '}
          <Link to="/savings">savings calculator</Link> and track progress toward it
          instead of saving without a target.
        </li>
      </ol>
      <p>
        Revisit the target whenever something structural changes — a raise, a new
        dependent, a move to a more expensive apartment, a switch from salaried to
        freelance work. The number you calculated two years ago may no longer match your
        actual essential expenses today.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        What actually moves the number
      </h2>
      <p>
        The "months" multiplier is really a proxy for one question: if your income
        stopped today, how long and how uncertain would it be before it started again?
        Everything below is just a way of estimating that answer for your own situation.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Stable salary, easily replaceable job → closer to 3 months.</li>
        <li>Variable income (freelance, commission, single-income household) → closer to 6-9 months.</li>
        <li>Specialized role with a long job-search history → lean toward the higher end.</li>
        <li>Dependents relying solely on your income → add a buffer on top of the above.</li>
        <li>Multiple income sources in the household → can lean toward the lower end, since one stopping doesn't zero out income.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Where manual tracking falls short
      </h2>
      <p>
        Without a tracked goal, "building an emergency fund" tends to mean moving money
        into savings occasionally and hoping it adds up. There's no visible progress
        toward a specific number, so it's hard to know whether you're on track or how much
        longer it will take. It's also easy to lose count of essential expenses when
        they're scattered across several accounts and statements rather than added up in
        one place, which makes the whole target feel like a guess instead of a number you
        calculated.
      </p>
      <p>
        There's also a quieter risk: without a visible target and a visible balance, it's
        easy to assume the fund is further along than it actually is, or to quietly treat
        it as available for things that aren't emergencies, since nothing is tracking what
        the money was actually set aside for.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Everyday examples
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>A salaried employee with stable income building toward three months of rent and bills.</li>
        <li>A freelancer with inconsistent monthly income building toward nine months as a buffer.</li>
        <li>A single-income household with kids adding an extra buffer above the standard range.</li>
        <li>Someone between jobs drawing down the fund to cover rent while job-hunting.</li>
        <li>A specialist in a niche field expecting a longer search, sizing the fund accordingly.</li>
        <li>A couple with two incomes targeting a smaller buffer since both incomes stopping at once is less likely.</li>
        <li>Someone recovering from an unpaid medical leave drawing the fund down, then rebuilding it afterward.</li>
      </ul>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Common mistakes
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Sizing the fund against total income instead of essential expenses.</li>
        <li>Using a single generic number (like "6 months") without adjusting for income stability.</li>
        <li>Keeping the fund somewhere hard to access quickly, defeating its purpose.</li>
        <li>Treating the fund as a target to eventually get to instead of tracking progress toward it.</li>
        <li>Dipping into it for non-emergencies because there's no separation from regular spending.</li>
        <li>Never revisiting the target after income, expenses, or dependents change.</li>
      </ul>
      <p>
        That last one is easy to miss precisely because nothing prompts you to revisit it.
        A target calculated once, years ago, against an old rent and an old income, quietly
        stops matching your actual situation — and the only way to notice is to
        deliberately recalculate it.
      </p>

      <Link to="/savings" className="btn-primary inline-block">
        Set your emergency fund goal
      </Link>
    </BlogPostLayout>
  )
}
