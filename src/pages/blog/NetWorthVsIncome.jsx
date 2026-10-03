import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'net-worth-vs-income')

const FAQ = [
  {
    q: 'Can someone with a high income have a low net worth?',
    a: 'Yes, and it happens more often than people assume. A high income with high spending, large debt payments, or no consistent saving habit can produce a lower net worth than a more modest income that\'s been saved and invested consistently for years. Income is a flow; net worth is an accumulated total — they measure different things entirely.',
  },
  {
    q: 'Why does net worth matter more than income for long-term financial health?',
    a: "Because income stops the moment you stop working, while net worth — assets that can generate returns or be drawn down — is what actually determines financial flexibility and retirement readiness. A high income you spend entirely provides comfort today but builds nothing for later; net worth is the number that reflects what you've actually kept.",
  },
  {
    q: 'Should I track net worth even if I have debt?',
    a: "Especially if you have debt — net worth is exactly the number that shows whether your overall financial position is improving, even while individual debts exist. A mortgage, for instance, is a liability, but the property backing it is also an asset; tracking net worth captures that full picture in a way that looking only at debt or only at savings doesn't.",
  },
  {
    q: 'How quickly should I expect net worth to grow?',
    a: "There's no universal pace — it depends on income, expenses, debt load, and market returns on any invested assets, all of which vary enormously between individuals. The useful signal isn't a target growth rate, it's whether your own number is trending up over consecutive months, which a repeated snapshot habit shows clearly and a single calculation never can.",
  },
]

export default function NetWorthVsIncome() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-net-worth-vs-income">
      <p>
        It's easy to assume a bigger paycheck automatically means a stronger financial position, and just as easy
        to assume a net worth calculator is measuring roughly the same thing as a salary. Neither assumption holds
        up — income and net worth are genuinely different numbers, measuring different things, and mixing them up
        leads to a distorted sense of where you actually stand.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Income is a flow, net worth is a total</h2>
      <p>
        Income measures money coming in over a period — per month, per year. It resets every pay cycle and tells
        you nothing on its own about what you've kept from any previous period. Net worth is a snapshot of
        everything you've accumulated (or owe) as of right now: every asset you hold minus every liability you
        carry, added up as of today. One is a rate; the other is a running balance.
      </p>
      <p>
        This distinction is why two people can earn identical salaries and end up with wildly different net
        worth after a decade — the difference isn't the income, it's what happened to that income every month in
        between: spent, saved, invested, or paid down against debt.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Why a high income doesn't guarantee a high net worth</h2>
      <p>
        A high earner with large fixed costs, high-interest debt, or no consistent saving habit can carry a lower
        net worth than someone earning less who has saved and paid down debt steadily. This isn't a hypothetical
        edge case — it's the entire reason "high income" and "wealthy" aren't interchangeable terms. Income funds
        a lifestyle in the moment; net worth is what's left after that lifestyle is paid for, accumulated over
        time.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">What net worth actually tells you that income doesn't</h2>
      <p>
        Net worth answers a different question than income: not "how much am I earning," but "is my overall
        financial position improving." That question matters more for long-term planning, because it's the
        number that reflects actual financial flexibility — what you could draw on in an emergency, what you're
        building toward retirement, how exposed you are if income stopped tomorrow. A paycheck tells you what's
        coming in; net worth tells you what you've actually built with it.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">A worked example (illustrative numbers)</h2>
      <p>
        Two illustrative people, same income, same year — purely to show the mechanism, not real benchmark data:
        Person A earns $80,000, spends close to all of it, and carries a growing credit card balance. Person B
        earns the same $80,000, keeps spending moderate, and consistently puts money into savings and a
        retirement account while paying down any debt. Same income line on a résumé; very different net worth by
        the end of the year, and an even larger gap after several years of the same pattern repeating.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Troubleshooting / common mistakes</h2>
      <ul className="list-disc list-inside space-y-1 text-sm text-slate-600 dark:text-slate-300">
        <li>Judging financial health by salary alone, without ever calculating what's actually been kept or built.</li>
        <li>Treating a raise as automatic progress — it only shows up in net worth if the extra income isn't fully absorbed by extra spending.</li>
        <li>Checking net worth once and never again — the number itself matters less than its trend over consecutive months.</li>
        <li>Getting discouraged by a single low or negative reading instead of tracking the direction it moves over time.</li>
      </ul>
    </BlogPostLayout>
  )
}
