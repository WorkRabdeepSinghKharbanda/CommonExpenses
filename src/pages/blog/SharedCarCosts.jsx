import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'splitting-costs-for-a-shared-car')

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
  {
    q: 'What about depreciation — does the car losing value count as a shared cost?',
    a: "Only if both people have an ownership stake in the car itself, not just in the costs of running it. If one person owns the car outright and the other is just a regular driver who shares gas and maintenance, depreciation belongs entirely to the owner, since they're the one who'll eventually sell or trade in the vehicle.",
  },
  {
    q: 'Do parking tickets and tolls count as shared costs?',
    a: "No — like accident damage, these are tied to a specific trip and a specific driver, not to the car in general. Whoever picked up the ticket or drove through the toll lane owns that cost outright, the same way they'd own a speeding ticket.",
  },
  {
    q: "Can this system work for more than two drivers?",
    a: "Yes, the mechanism doesn't change — you just end up with a three-way or four-way mileage ratio instead of a two-way one. The more drivers involved, the more useful a written log becomes, since memory gets far less reliable once three people are each contributing odometer readings.",
  },
  {
    q: 'What if we just can\'t agree on a mileage ratio?',
    a: "Pick a simple, objective method and commit to it for at least a month before renegotiating — for example, splitting fifty-fifty for the first month while both of you log actual mileage, then switching to the real ratio once you have data instead of guesses. Arguing over an estimated split before any numbers exist rarely goes anywhere productive.",
  },
]

export default function SharedCarCosts() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-shared-car-costs">
      <p>
        A 50/50 split feels fair until one roommate uses the car for a daily 20-minute
        commute and the other drives it once a week to the grocery store. Flat splits
        work for costs that don't scale with use; they break down for costs that do. The
        fix is splitting each cost category by the driver most likely to have caused it —
        which sounds simple in theory and turns out to be the exact point where most
        shared-car arrangements quietly start producing resentment. It's also the point
        where most people give up on having a system at all, defaulting back to vague
        statements like "we'll just figure it out," which almost never actually gets
        figured out.
      </p>
      <p>
        The friction rarely shows up as a single big argument. It shows up as a slow
        accumulation of small, unspoken irritations: one person notices they're always the
        one buying gas, the other notices they're always the one covering the oil change,
        and neither one has the actual numbers to know whether the arrangement is fair or
        not. By the time someone finally raises it, there's no clean record to settle the
        question, which turns a solvable math problem into a conversation about trust. A
        system that separates cost types and tracks them from day one avoids that
        entirely, because the fairness question gets answered by a log instead of by
        memory.
      </p>

      <img
        src="/blog-images/splitting-costs-for-a-shared-car.jpg"
        alt="A person refueling a car at a gas pump, representing the usage-based costs of a shared vehicle"
        loading="lazy"
        className="rounded-lg w-full max-h-96 object-cover"
      />

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
      <p>
        A few terms are worth defining before going further, since they come up
        constantly in any shared-car arrangement. A <strong>usage-based cost</strong> is
        any expense that rises and falls with how much the car is actually driven — gas is
        the clearest example, since the amount you spend is directly proportional to
        miles traveled, and routine maintenance like oil changes, tire rotations, and
        brake pads falls into the same bucket because those parts wear out faster the more
        the car is used. A <strong>fixed cost</strong> is the opposite: insurance
        premiums, annual registration fees, and a car loan payment are the same dollar
        amount every month whether the car sits in the driveway all week or gets driven
        across the state and back.
      </p>
      <p>
        A <strong>mileage ratio</strong> is simply the proportion of total miles driven by
        each person over a given period, expressed as a percentage — if Driver A puts 600
        miles on the car in a month and Driver B puts 200 miles on it, the total is 800
        miles, and Driver A's share is 600 divided by 800, or 75%. That ratio is what gets
        applied to every usage-based cost for the month. An <strong>ownership share</strong>
        is a separate, usually more stable percentage that reflects who actually owns the
        car or who agreed to carry what portion of its fixed costs — it might match the
        mileage ratio, but it often doesn't, especially when one person owns the car and
        the other is simply a regular passenger-turned-driver.
      </p>
      <p>
        Finally, an <strong>incident cost</strong> is any expense tied to a specific event
        rather than to general use of the car — a fender bender, a cracked windshield from
        a rock on the highway, a parking ticket. These don't belong in either the
        usage-based or fixed-cost buckets, because splitting them by mileage or evenly
        would mean the driver who wasn't even in the car that day ends up subsidizing
        someone else's accident. Keeping incident costs in their own category, billed
        entirely to whoever was driving, is what keeps the whole system feeling fair even
        when something goes wrong.
      </p>
      <p>
        One more term worth defining: a <strong>settle-up period</strong> is simply the
        agreed interval at which the drivers actually exchange money to true up what the
        formula says they owe each other. It doesn't have to be monthly — some households
        prefer every two weeks, others prefer monthly to match when bills like insurance
        actually come due — but it does need to be fixed and agreed in advance. Without
        one, "settling up" becomes something that happens whenever someone remembers to
        bring it up, which in practice means it happens rarely, awkwardly, and usually
        only after one person has started feeling shortchanged.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Why this is harder than it looks
      </h2>
      <p>
        Here's a scenario that plays out in thousands of shared households every year.
        Two roommates, Priya and Jordan, agree to split "car costs" 50/50 when they start
        sharing a car. For the first couple of months, this feels fine — they're both
        driving roughly the same amount, running errands and the occasional weekend trip.
        Then Jordan starts a new job across town, adding a 25-minute commute each way,
        five days a week. Priya's usage barely changes. Three months later, the gas bill
        has nearly doubled, and under the 50/50 agreement, Priya is now paying for half of
        a tank of gas that's almost entirely Jordan's commute.
      </p>
      <p>
        Neither person did anything wrong. Jordan didn't choose the new job to get a free
        ride on gas, and Priya isn't being petty by noticing the bill went up. The problem
        is structural: a flat split was applied to a cost that stopped being flat the
        moment one person's driving pattern changed. Without a mileage log, neither of
        them can even point to a number — Priya just has a vague sense that something
        feels off, and Jordan has no way to prove the split is still fair, because nobody
        wrote down how many miles either of them was actually driving before or after the
        job change.
      </p>
      <p>
        This is the part that makes shared-car costs harder than splitting, say, a grocery
        bill: the "fair" split isn't a fixed number, it's a moving target that depends on
        behavior that changes gradually and invisibly unless someone is tracking it. A
        grocery bill is the same kind of cost every time — you can split it 50/50 and
        reasonably expect that to stay fair indefinitely, because grocery consumption
        tends to be roughly steady for two people living together. A car's costs are a mix
        of steady costs and wildly variable ones, bundled into a single monthly outflow of
        money, which is exactly why splitting "the car" as one lump sum stops working the
        moment usage diverges even a little.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">How to do it</h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>
          Sit down together and list every recurring cost the car generates — gas, oil
          changes, tires, insurance, registration, and any loan payment — before you try
          to agree on how to split anything. You can't design a fair system around costs
          you haven't actually named.
        </li>
        <li>
          Sort that list into two groups: usage-based (gas, routine maintenance that wears
          out with driving) and fixed (insurance, registration, loan payment, anything
          that's the same regardless of mileage). Write the grouping down somewhere both
          of you can refer back to.
        </li>
        <li>
          Decide how you'll track mileage. The simplest method is reading and writing down
          the odometer number at the start and end of each month for each driver — it
          takes thirty seconds and requires no app. If one of you already has a phone that
          auto-logs trips, that works too, as long as both people trust the numbers it
          produces.
        </li>
        <li>
          At the end of the first month, turn the two odometer differences into a ratio.
          If Driver A put on 600 miles and Driver B put on 200, the total is 800 and
          Driver A's share is 600 / 800 = 75%. That percentage is what you'll apply to
          every usage-based cost for that month.
        </li>
        <li>
          Apply that mileage ratio only to the usage-based bucket — gas receipts, oil
          change invoices, new tires. Every fixed cost (insurance, registration, loan
          payment) gets split a separate way: evenly, or by whatever ownership share you
          agreed on in step one, completely independent of the mileage ratio.
        </li>
        <li>
          Log each fill-up and bill as it happens rather than trying to remember them
          later — a shared note, a quick text to each other, or an entry in a tracker
          takes seconds in the moment and saves you from reconstructing a month of
          receipts from memory.
        </li>
        <li>
          Settle both categories together once a month, using the mileage ratio for
          usage-based costs and the agreed share for fixed costs. The{' '}
          <Link to="/split" className="text-brand-600 hover:underline">
            cost-splitting calculator
          </Link>{' '}
          handles the arithmetic for both buckets once you plug in the mileage ratio and
          the month's bills — you don't need to do the percentage math by hand every time.
        </li>
        <li>
          Revisit the mileage ratio whenever either driver's habits noticeably change — a
          new job, a move, a season where one person travels less. Don't wait for an
          annual review; the ratio should track reality, not a calendar.
        </li>
      </ol>
      <p>
        It's worth putting the agreed formula in writing somewhere both drivers can see
        it — a shared note or a pinned message is enough. The goal isn't bureaucracy, it's
        removing any ambiguity about which category a new cost belongs to before it
        becomes a disagreement.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">A worked example</h2>
      <p>
        Take a concrete month to see how this actually plays out in numbers. Priya and
        Jordan share a car. Over the course of the month, Priya logs 240 miles and Jordan
        logs 760 miles — Jordan's new commute is the obvious reason for the gap. Total
        miles driven: 1,000. Jordan's mileage share is 760 / 1,000 = 76%. Priya's share is
        24%.
      </p>
      <p>
        The month's usage-based costs come to $180 in gas and a $60 oil change, for a
        total of $240. Applying the 76/24 mileage ratio: Jordan owes 76% of $240, which is
        $182.40. Priya owes the remaining $57.60.
      </p>
      <p>
        Separately, the fixed costs for the month are $140 for insurance and $35 for
        registration (prorated monthly), totaling $175. Priya and Jordan agreed at the
        start to split fixed costs evenly regardless of mileage, since they're both
        equally named on the insurance policy. Each of them owes $87.50 toward that
        bucket.
      </p>
      <p>
        Add the two buckets together for each person: Jordan owes $182.40 (usage) + $87.50
        (fixed) = $269.90 for the month. Priya owes $57.60 + $87.50 = $145.10. Without
        splitting these into separate buckets, a flat 50/50 split on the full $415 would
        have charged each of them $207.50 — overcharging Priya by more than $60 and
        undercharging Jordan by the same amount, every single month, for as long as the
        commute lasts.
      </p>

      <p>
        It's also worth checking the math again the following month, because a single
        month's mileage ratio can be noisy even when nothing has actually changed. Say the
        next month Jordan takes a week off work and the ratio shifts back to 58/42. If
        Priya and Jordan were splitting costs with a fixed, never-revisited ratio, they'd
        either be stuck with a stale 76/24 split that no longer reflects reality, or
        they'd have to renegotiate from scratch every time. Recomputing the ratio fresh
        each month — using that month's actual mileage, not a carried-over assumption —
        is what keeps the system accurate without turning it into a monthly argument.
      </p>

      <p>
        It's worth comparing that to what a flat 50/50 split would have done over a full
        year, not just one month. If Jordan's commute is permanent, the $60-plus monthly
        overcharge to Priya compounds to roughly $720 a year — money that, under a flat
        split, would have silently transferred from the lower-mileage driver to the
        higher-mileage one, never showing up as a single event worth questioning, just as
        twelve small discrepancies that each felt too minor to mention.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Benefits</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>The person who drives more pays more for the costs that scale with driving, which matches most people's sense of fairness.</li>
        <li>Fixed costs stay predictable and don't swing month to month based on who happened to drive further.</li>
        <li>A clear, agreed-on formula removes the need to negotiate fairness every single time a bill comes in.</li>
        <li>Incident-specific damage staying outside the shared pool protects both drivers from paying for someone else's mistake.</li>
        <li>A written mileage log gives you an objective answer the moment someone asks "is this still fair?" instead of a guessing game.</li>
        <li>Splitting by category makes it obvious, month to month, exactly which cost is driving any change in what someone owes.</li>
      </ul>
      <p>
        Splitting by category also makes it easier to spot when driving patterns have
        shifted — if one person's mileage share climbs from 60% to 85% over a few months,
        that's worth a conversation about whether the fixed-cost split (insurance,
        registration) should change too, not just the gas bill. Because the system
        already separates usage-based costs from fixed ones, that conversation starts from
        a shared set of facts instead of two competing impressions of what's been
        happening.
      </p>
      <p>
        There's a less obvious benefit too: once the categories and ratio exist, adding a
        third driver — a partner who moves in, a sibling visiting for a semester — doesn't
        require rebuilding the system from scratch. You're just adding another mileage
        number to the same ratio calculation and another name to the same fixed-cost
        split, rather than renegotiating the entire arrangement from first principles.
      </p>

      <p>
        It's worth noting what this system deliberately doesn't try to solve. It won't
        make two people with very different driving philosophies — one who babies a car
        and one who treats it as disposable — agree on what counts as "normal" wear and
        tear. That's a conversation about values, not arithmetic, and no mileage ratio
        will resolve it. What the system does solve is the much more common failure mode:
        two people who broadly agree on what's fair, but who have no reliable way of
        measuring it, and who drift into resentment simply because nobody wrote anything
        down.
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
      <p>
        Manual tracking fails in a third, quieter way: it has no memory of its own
        history. If you settle up by eyeballing "roughly who paid for what" each month,
        there's no record to look back on if a dispute arises three months later about
        whether a particular repair was ever reimbursed. A logged entry, timestamped and
        categorized, settles that question in seconds. A collective memory between two
        busy people settles it with an argument.
      </p>
      <p>
        And without a log, it's genuinely difficult to notice gradual drift. A ratio that
        shifts from 55/45 to 60/40 to 70/30 over six months, one percentage point at a
        time, never feels like a single moment worth flagging — it just feels like life.
        But six months later, the cumulative effect of six months of a drifting,
        unadjusted split is real money, and by the time it's noticed, untangling who
        actually owes what for half a year of unlogged driving is close to impossible.
      </p>

      <p>
        There's a fourth failure mode worth naming specifically: the "I'll just cover it
        this time" trap. One driver pays for a fill-up out of convenience, intending to
        get reimbursed later, and the other intends to remember to pay them back. Neither
        of those intentions survives more than a few weeks without a written log, because
        life intervenes — a busy week, a forgotten conversation — and the running balance
        that existed only in two people's heads quietly diverges into two different
        numbers, each person convinced their own mental tally is the accurate one.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Everyday examples</h2>
      <p>
        Two roommates sharing a car for a daily commute versus occasional weekend errands
        run into exactly the Priya-and-Jordan problem above — one person's mileage
        dwarfs the other's, and a flat split stops reflecting reality almost immediately.
      </p>
      <p>
        Siblings sharing a family car while one is away at college part of the year face a
        different wrinkle: usage isn't just unequal, it's seasonal. The mileage ratio
        during the school year looks nothing like the ratio during summer break, so the
        split needs to be recalculated each season rather than fixed once and forgotten.
      </p>
      <p>
        A couple where one partner owns the car and the other contributes toward gas and
        maintenance only is a case where the ownership share and the mileage ratio need to
        stay clearly separate — the owning partner might cover 100% of insurance and
        registration regardless of who drives more, while gas and maintenance still split
        by mileage.
      </p>
      <p>
        A carpool group splitting gas by rider rather than by who's driving is a case
        where usage isn't measured in miles driven but in miles ridden — the same
        underlying principle (pay in proportion to use) applies, even though the exact
        metric changes from "who's behind the wheel" to "who's in the car."
      </p>
      <p>
        A parking-lot scrape that one driver caused and kept out of the shared
        gas-and-maintenance pool entirely shows the incident-cost category working as
        intended — the at-fault driver pays for their own mistake, and the other person's
        monthly total isn't touched by an event they had nothing to do with.
      </p>
      <p>
        A household where one driver mostly uses the car for short errands and the other
        uses it for long highway trips on weekends shows why mileage, not trip count, is
        the right metric — counting "number of drives" instead of miles would badly
        understate how much gas the highway trips actually burn.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">Common mistakes</h2>
      <p>
        Most of the mistakes below share a root cause: they all substitute a convenient
        assumption for an actual measurement. A flat split is convenient because it
        requires no data. Settling whenever it comes up is convenient because it requires
        no calendar discipline. Both are easier in the moment and both quietly produce an
        unfair outcome that nobody chose on purpose.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Splitting every cost 50/50 regardless of who actually drives more — this is the
          single most common mistake, and it's the one that quietly overcharges whoever
          drives less, month after month, until someone finally notices.
        </li>
        <li>
          Applying the mileage ratio to fixed costs like insurance, which don't scale with
          driving — doing this makes the lower-mileage driver pay less for a cost that
          has nothing to do with how much either person drove, which isn't actually fair,
          just differently unfair.
        </li>
        <li>
          Letting incident-specific damage get absorbed into the shared monthly pool
          instead of billed to the driver at fault — this removes any financial incentive
          to drive carefully and effectively makes the careful driver subsidize the
          careless one.
        </li>
        <li>
          Trying to settle after every single gas fill-up instead of on a fixed monthly
          schedule — this turns a simple bookkeeping task into a running negotiation and
          makes both people dread the next fill-up.
        </li>
        <li>
          Never recalculating the mileage ratio after a driver's habits change, like a new
          commute — a ratio calculated once and never revisited slowly becomes fiction,
          even though nobody intended it to.
        </li>
        <li>
          Not writing the formula down anywhere — relying on "we both remember what we
          agreed" works for about a month before one person's memory of the agreement
          starts to differ from the other's.
        </li>
        <li>
          Treating the car as one single cost instead of several different costs that
          behave differently — this is the root mistake that all of the others grow out
          of, and fixing it is what the whole system described above is built to do.
        </li>
      </ul>
      <p>
        Most of these mistakes come from treating "the car" as one single cost instead of
        several different costs that behave differently. Once gas, maintenance, fixed
        costs, and incident damage are separated and tracked on their own, the fair split
        for each one becomes fairly obvious. The system described in this guide isn't
        complicated — it's really just four categories and a monthly habit of logging
        numbers as they happen — but it's precisely that small amount of upfront structure
        that prevents the slow, invisible drift toward unfairness that an unstructured
        "we'll sort it out" approach almost guarantees.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Troubleshooting / edge cases
      </h2>
      <p>
        <strong>What if one driver consistently "forgets" to log their mileage?</strong>{' '}
        Set a specific, low-friction moment for logging — right when filling the tank, for
        instance — rather than relying on someone remembering to do it later. If forgetting
        keeps happening despite that, it's worth naming directly rather than letting the
        other person quietly absorb an unfair split by default; a missing log entry
        shouldn't default to "assume even usage," since that's exactly the assumption the
        whole system exists to replace.
      </p>
      <p>
        <strong>What if the car needs an expensive, unplanned repair — a transmission,
        for example?</strong> Decide in advance whether major repairs count as a
        usage-based cost (split by the current mileage ratio, since wear accumulates with
        driving) or as a fixed cost split evenly or by ownership share. Either answer can
        be reasonable; what matters is deciding it before the repair happens, not during
        an already-stressful moment when a surprise bill lands.
      </p>
      <p>
        <strong>What if one driver stops using the car for an extended period — travel,
        an injury, a temporary move?</strong> Their mileage share for that period will
        naturally drop near zero, and the ratio will reflect that automatically as long as
        you're still logging. Fixed costs are the trickier part: decide whether an
        absent driver still owes their normal share of insurance and registration (since
        those costs don't pause just because someone isn't driving) or whether a long
        enough absence warrants a temporary adjustment.
      </p>
      <p>
        <strong>What if we disagree about whether a particular cost is usage-based or
        fixed?</strong> A simple test helps: ask whether the cost would be any different
        if the car sat in the driveway untouched for the entire month. If yes (gas,
        tires, oil changes), it's usage-based. If no (insurance, registration, loan
        payment), it's fixed. Costs that don't fit cleanly into either — a car wash, a
        parking permit — are worth explicitly agreeing on rather than assuming the answer
        is obvious to both people.
      </p>
      <p>
        <strong>What if the car is sold or one driver moves out partway through a
        month?</strong> Settle up based on actual logged mileage up to that date rather
        than waiting for a full calendar month to close. A partial-month settlement using
        real numbers is more accurate than either skipping the split entirely or
        estimating what the full month "would have" looked like.
      </p>
      <p>
        <strong>What if one driver only ever makes short trips and the other makes long
        highway drives — does mileage alone capture the real cost difference?</strong>{' '}
        Mostly, yes, since gas cost scales with distance regardless of road type, but city
        stop-and-go driving does burn slightly more fuel per mile than steady highway
        driving, and it causes more brake wear specifically. If this feels significant in
        your situation, it's reasonable to track brake-related maintenance as its own
        line item rather than lumping it in with tires and oil changes, so the person
        doing more city driving isn't quietly undercharged for the wear they're actually
        causing.
      </p>

      <Link to="/split" className="btn-primary inline-block">
        Split your shared car costs
      </Link>
    </BlogPostLayout>
  )
}
