import { Link } from 'react-router-dom'
import BlogPostLayout from '../../components/BlogPostLayout.jsx'
import { POSTS } from './posts.js'

const post = POSTS.find((p) => p.slug === 'cash-envelope-vs-app-budgeting')

const FAQ = [
  {
    q: 'What exactly is the cash envelope method?',
    a: "You withdraw your budgeted spending money in cash at the start of the month and physically divide it into envelopes labeled by category — groceries, gas, entertainment. When an envelope is empty, spending in that category stops until next month, by design.",
  },
  {
    q: 'Is cash really harder to overspend than cards?',
    a: "For most people, yes — handing over physical bills registers as a loss in a way a card tap doesn't, so the spending decision feels more real in the moment. That's the entire mechanism behind envelopes: friction, not willpower.",
  },
  {
    q: "Can I use envelopes for rent or subscriptions?",
    a: "Not practically. Anything paid by auto-draft, card, or bank transfer doesn't fit a cash system at all, so envelopes only ever cover a slice of a real budget — the discretionary, pay-in-person categories.",
  },
  {
    q: 'Why would I pick an app over envelopes if cash controls spending better?',
    a: "Because control isn't the only problem. If you don't actually know where your money goes — not just that you overspent, but on what, and how it compares to last month — an app's transaction history gives you that visibility, which cash with no receipts never will.",
  },
  {
    q: 'Can I combine both methods?',
    a: "Yes, and it's often the most realistic setup: track fixed bills and card spending in an app, since you can't envelope a subscription anyway, and withdraw cash only for the one or two categories where you consistently overspend, like dining out or takeout.",
  },
  {
    q: "What's the actual failure mode if I just use an app and no cash?",
    a: "An app will tell you exactly how much you overspent on dining out this month — it just won't stop you from doing it again next week. If your problem is sticking to a limit rather than seeing one, a purely digital system without any physical constraint can feel like watching the same overspend happen on repeat.",
  },
  {
    q: "Do I need a special wallet or kit to start envelope budgeting?",
    a: "No — plain paper envelopes from any store work fine, and some people use a simple accordion folder or small labeled pouches instead. The system doesn't depend on the container; it depends on the cash being physically separated by category so one envelope running out can't quietly borrow from another.",
  },
  {
    q: "What if I get paid every two weeks instead of monthly?",
    a: "Split your category totals in half and refill the envelopes on each payday instead of once a month. The math is the same either way — you're just dividing a smaller amount of cash more often, which can actually make it easier to catch overspending early in a pay period rather than discovering it three weeks in.",
  },
  {
    q: "Is it safe to keep that much cash in the house?",
    a: "That's a legitimate concern and a real downside of the method — a lost wallet or a burglary can't be reversed the way a disputed card charge can. Many people manage this by only withdrawing a week's worth of a category at a time, or by using cash only for the categories where overspending is the actual problem and leaving larger, less-impulsive categories on a card.",
  },
  {
    q: "What happens to leftover cash at the end of the month?",
    a: "That's entirely up to you, and deciding the rule in advance avoids an argument with yourself in the moment — common choices are rolling it into next month's same envelope, moving it to a savings envelope, or treating it as a small reward. What matters is picking one rule and using it consistently, rather than letting leftover cash quietly become grocery money for next week.",
  },
]

export default function EnvelopeVsAppBudgeting() {
  return (
    <BlogPostLayout post={post} faq={FAQ} faqId="faq-cash-envelope-vs-app-budgeting">
      <p>
        The cash envelope method — withdrawing your budget in cash and physically dividing
        it into envelopes labeled "groceries," "gas," "entertainment" — predates smartphones
        by decades, and it still works for a specific kind of spender. Whether it works
        better than a budgeting app depends less on the method and more on why your budget
        breaks down in the first place. Two people can have the exact same monthly income,
        the exact same bills, and the exact same intention to "spend less this month," and
        still need completely different tools to actually get there.
      </p>
      <p>
        This isn't a question with one right answer, and most of the content written about
        it treats it like a brand loyalty debate — pick a side, defend it. In practice, the
        two approaches aren't even solving the same problem. One is a physical constraint on
        how much you can spend. The other is a record of how much you did spend. Knowing
        which problem you actually have is most of the work; the method you pick after that
        is almost secondary.
      </p>

      <img
        src="/blog-images/cash-envelope-vs-app-budgeting.jpg"
        alt="A pile of American cash in various denominations, representing the physical money used in envelope budgeting"
        loading="lazy"
        className="rounded-lg w-full max-h-96 object-cover"
      />

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        What each method actually is
      </h2>
      <p>
        Envelopes are a physical constraint: a fixed amount of cash per category, and once
        it's gone, spending in that category stops for the month. There's no overdraft, no
        "just this once" swipe — if the envelope labeled "dining out" is empty, you either
        don't eat out again this month or you take the money from a different envelope and
        consciously feel that trade-off happen. The constraint is the whole point; it
        removes the decision from your hands at the moment of temptation and puts it back
        at the start of the month, when you're making a calmer, more deliberate choice.
      </p>
      <p>
        An app, by contrast, is a visibility tool. It records every transaction as it
        happens — usually by connecting to your bank or card, or by you logging it manually
        — and shows you category totals against a limit you set. But it doesn't physically
        stop a card swipe. You can go $40 over your dining-out budget and the app will
        dutifully show you a red number; it has no mechanism to prevent the charge from
        happening in the first place. What it gives you instead is a record: exactly what
        you spent, where, and when, which you can look back on next month, next quarter, or
        next year.
      </p>
      <p>
        A budget category, in either system, is just a bucket you've decided a certain
        kind of spending belongs to — "groceries" covers food you cook at home, "dining out"
        covers restaurants and takeout, and so on. The categories themselves don't care
        whether you're tracking them with cash or with an app; what changes is how the limit
        gets enforced. A "limit" in an app is really just a number you've told yourself not
        to cross, with nothing physically stopping you. A limit in an envelope is the actual
        amount of paper currency sitting in your hand.
      </p>
      <p>
        They solve two different failure modes — one is about stopping power, the other is
        about seeing the pattern in the first place — and most people's budgets break down
        for one of those two reasons, not both equally. Figuring out which one is yours is
        the actual decision this post is trying to help with, not "which method is objectively
        better."
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Why this is harder than it looks
      </h2>
      <p>
        Imagine someone who sits down every Sunday and genuinely means to stick to a $300
        monthly dining-out budget. They know the number. They've even written it down. And
        yet by the third week, they've already spent $280, with a work dinner and two
        friends' birthdays still on the calendar. This isn't a case of not knowing the
        budget — it's a case of the budget not being physically present at the moment the
        decision gets made. A card doesn't ask "do you have $300 left this month?" It just
        gets accepted, and the accounting happens later, quietly, somewhere else.
      </p>
      <p>
        Now imagine a different person with the exact same $300 dining-out budget, except
        their problem is the opposite: they genuinely have no idea how much they spend on
        dining out. Not because they're careless, but because it's scattered across a dozen
        small charges — a coffee here, a lunch there, a delivery app order on a tired
        Tuesday — none of which feel significant enough to track mentally, and all of which
        add up to far more than $300 by month's end. If you handed this person a cash
        envelope with $300 in it, they might not even overspend it, because the cash sitting
        there physically reminds them of the limit every time they open their wallet. Their
        actual problem was never stopping power — it was that nothing in their life was
        showing them the running total.
      </p>
      <p>
        The trap is applying the wrong fix to the wrong person. Tell the first person to
        "just use an app to see where your money goes" and you've given them more visibility
        into a problem they already understood — they knew exactly where the money was
        going, in real time, and spent it anyway. Tell the second person to "switch to cash
        envelopes" and you've solved a problem they didn't have, while doing nothing about
        the actual gap, which is that they have no record of their spending at all. The
        method only works when it's matched to the actual breakdown, and most people never
        stop to ask which breakdown is theirs before picking a tool.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        How to figure out which one fits
      </h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>
          Look back at your last 2-3 months of spending in whatever form you have it —
          bank statements, card statements, or just memory. For your worst category, ask:
          did you know you were overspending as it happened, or did you only find out after
          the fact, when the balance was already lower than expected?
        </li>
        <li>
          If you knew in the moment and spent anyway — you could feel the number climbing
          and kept going — your problem is stopping power. That's a cash-envelope problem.
          Start with your worst one or two categories, not all of them at once; trying to
          envelope your entire budget on day one is a common way to quit within a week.
        </li>
        <li>
          If you had no real sense of the number until the bank balance dropped lower than
          expected, your problem is visibility. That's a tracking problem, and cash won't
          fix it — you need a system that logs every transaction as it happens, whether
          that's an app, a spreadsheet, or a notebook you actually use.
        </li>
        <li>
          Set up your categories in a free{' '}
          <Link to="/budget" className="text-brand-600 hover:underline">budget tracker</Link>{' '}
          either way — even an envelope system benefits from a monthly record of what each
          category actually cost, so you're not relying on memory to know whether this
          month was better or worse than last month.
        </li>
        <li>
          Run whichever setup you chose for one full month without changing it mid-month.
          Switching methods every two weeks because of one bad week never gives either
          approach a fair test.
        </li>
        <li>
          Reassess after that full month. Ask the same question from step one again: did
          the overspending stop, or did it just move somewhere you're not tracking? Most
          people end up using a mix, not one method exclusively — cash for the one category
          that trips them up, an app for everything else.
        </li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        A worked example
      </h2>
      <p>
        Say your take-home pay is $3,200 a month, and after rent, utilities, and other
        fixed bills, you've got $500 left for the categories that tend to slip: dining out,
        entertainment, and miscellaneous shopping. Under a flat percentage rule you might
        just call this "20% of take-home" and move on — but let's actually size it the way
        either method requires.
      </p>
      <p>
        You decide: $250 for dining out, $100 for entertainment, $150 for miscellaneous
        shopping. That's your $500, assigned on purpose rather than discovered by accident
        at month's end. Now the two methods diverge in what happens next.
      </p>
      <p>
        Under cash envelopes: on payday, you withdraw $500 and split it into three
        envelopes — $250, $100, $150. Every time you go out to eat, the cash comes out of
        the dining envelope. By the 18th of the month, that envelope has $40 left. You know
        this instantly, because you can see it — there's no app to check, the physical
        amount of paper in your hand is the answer. If a friend suggests dinner out on the
        19th, you either accept that it has to come from the $40 (and the envelope will be
        empty for the rest of the month) or you say no. The decision is forced by the cash
        itself, not by your willpower in the moment.
      </p>
      <p>
        Under an app: you don't withdraw anything. You set three category limits — $250,
        $100, $150 — and every dining purchase on your card gets logged automatically or by
        you adding it. By the 18th, the app shows "$210 of $250 spent" in dining. If a
        friend suggests dinner on the 19th, nothing stops you from swiping the card — the
        app will simply update to "$245 of $250" afterward, and you'll see the number, but
        only after the money is already spent. The visibility is real and accurate; the
        stopping power isn't there.
      </p>
      <p>
        Neither outcome is "wrong" — they're just different tools doing different jobs. If
        you're the kind of person who, seeing "$210 of $250," stops on their own, the app
        is enough. If you're the kind of person who sees that number and goes to dinner
        anyway because "it's close enough," the envelope's hard physical stop is doing work
        the app simply can't.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Envelopes win when the problem is overspending
      </h2>
      <p>
        Cash is a hard stop. When the "dining out" envelope is empty, you cannot spend more
        on dining out that month — there's no swipe-and-worry-later. People consistently
        spend more with cards than cash because a card swipe doesn't feel like losing money
        the way handing over bills does; the card comes back to your wallet immediately, and
        the cost registers as an abstract number on a statement you'll see weeks later. Cash
        leaving your hand is immediate and visible in a way a tap or swipe simply isn't. If
        your pattern is "I know my budget, I just don't stick to it," a physical constraint
        beats a digital reminder every time, because the problem was never about information
        — it was about having a limit with teeth.
      </p>
      <p>
        This is also why envelopes tend to work especially well for categories involving
        small, frequent, low-friction purchases — the $6 coffee, the $12 lunch, the
        impulse $20 at a convenience store. These are exactly the purchases that don't feel
        significant enough to check an app balance before making, but that add up fastest
        over a month. A near-empty envelope is a far more effective brake on a $6 impulse
        buy than a mental note to "check the app later."
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Apps win when the problem is visibility
      </h2>
      <p>
        Envelopes don't work for rent, subscriptions, or anything paid by card or
        auto-draft — which is most fixed expenses today. Try to put your streaming
        subscriptions, your phone bill, or your car insurance into an envelope and you'll
        find there's simply nowhere for the cash to go; the charge happens automatically,
        invisibly, on a date you don't control. They also give you zero history: once the
        cash is spent, there's no record of what it went to unless you kept every receipt,
        which almost nobody actually does in practice. If your actual problem is "I don't
        know where my money goes" rather than "I can't stop spending," an app that logs
        every transaction gives you the pattern data envelopes can't.
      </p>
      <p>
        Visibility compounds in a way a cash constraint doesn't: once you can see that
        dining out is consistently your biggest discretionary category three months running,
        that's a pattern you can actually plan around — raise the limit on purpose, cut it
        on purpose, or leave it and stop feeling guilty about a number you've now decided is
        acceptable. Cash alone never gives you that comparison across months; an empty
        envelope on March 31st tells you nothing about whether March was better or worse
        than February, because there's no running record to compare it to.
      </p>
      <p>
        There's also a category of spender for whom cash never really was the problem:
        people whose overspending happens on things cash can't touch anyway — an extra
        streaming subscription they forgot they signed up for, a higher-than-expected
        electric bill, an annual renewal that quietly doubled. None of that shows up in an
        envelope system at all. For this kind of leak, an app's recurring-bill view and
        month-over-month comparison is doing work a cash system was never designed to do.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        How to do it
      </h2>
      <ol className="list-decimal list-inside space-y-1">
        <li>
          Decide which one or two categories are actually causing the problem — don't try
          to envelope or app-track your entire budget at once; narrow it to where the pain
          actually is.
        </li>
        <li>
          If going the cash route, withdraw the month's (or pay period's) total for that
          category in one trip, and physically label an envelope, pouch, or folder for it.
        </li>
        <li>
          If going the app route, set a specific dollar limit for that category inside your{' '}
          <Link to="/budget" className="text-brand-600 hover:underline">budget tracker</Link>{' '}
          and check it at least twice a week, not just at month-end — a limit you never look
          at provides no more stopping power than no limit at all.
        </li>
        <li>
          Log every cash purchase somewhere, even a sticky note, if you choose envelopes —
          otherwise you'll have solved the overspending problem but created a new
          no-visibility problem in its place.
        </li>
        <li>
          Decide in advance what happens to leftover cash or unused app budget at month-end
          — roll it over, move it to savings, or treat it as a small reward — so you're not
          improvising that decision in the moment.
        </li>
        <li>
          Reassess after one full month. If the category stopped overspending, consider
          whether you still need the physical cash constraint or whether the habit has
          stuck well enough to move it into the app alongside everything else.
        </li>
      </ol>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Benefits
      </h2>
      <p>
        The cash envelope method's biggest benefit is that it removes willpower from the
        equation entirely. You don't have to be a disciplined person in the moment — the
        system does the discipline for you, because the money simply isn't there once it's
        gone. That matters enormously for anyone who has tried "just spending less" as a
        plan and found that good intentions evaporate the instant a tempting purchase shows
        up in front of them. A second, quieter benefit is that cash makes a household
        budget visible to everyone in it — a shared envelope on the kitchen counter is a
        conversation starter in a way a password-protected app balance never is.
      </p>
      <p>
        An app's benefits are different but just as real. The biggest is the compounding
        value of historical data: three, six, twelve months of categorized spending lets
        you answer questions envelopes never can, like "is my grocery bill actually going up,
        or does it just feel that way?" Apps also handle the overwhelming majority of modern
        spending — card payments, auto-drafts, subscriptions — that a cash system structurally
        can't touch. And because the record is automatic rather than manual, it survives busy
        weeks, forgotten receipts, and the general chaos of daily life far better than a
        system that depends on you remembering to write something down.
      </p>
      <p>
        Used together, the two benefits stack: an app gives you the full, accurate picture
        of where your money goes, and cash gives you an enforceable limit on the one or two
        places that picture reveals you're bleeding money. Neither replaces the other
        entirely for most people — they're answering different questions.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Where manual tracking falls short either way
      </h2>
      <p>
        A plain notebook or a mental running total has the same weaknesses regardless of
        whether you're using cash or cards: entries get forgotten in the moment, there's no
        automatic running total to check against, and small math errors compound unnoticed
        over a month. A missed $15 entry here and a transposed digit there don't feel like
        much individually, but by week three they can make a budget that's actually $60 over
        look like it's right on track, or vice versa — which means the one signal you're
        relying on to catch a problem early is quietly unreliable.
      </p>
      <p>
        Envelopes fix the overspending problem but not the record-keeping one — you still
        don't know what you spent the cash on unless you write it down somewhere, and most
        people who start an envelope system with good intentions stop keeping receipts
        within the first couple of weeks. What's left is a system that successfully stops
        you from overspending but tells you nothing about the pattern underneath it — which
        means next year, when you try to plan a more accurate budget, you're starting from
        the same guesswork you started with this year.
      </p>
      <p>
        A tracker that logs transactions as they happen removes that gap without requiring
        you to give up the physical-cash constraint if that part is working for you — you
        can withdraw cash for a category and still log each purchase in the tracker at the
        end of the day or week, getting both the hard stop and the historical record instead
        of having to choose one.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Everyday examples
      </h2>
      <p>
        <strong>Someone who always "has enough" for groceries but can't explain where $300
        of discretionary spending went.</strong> Their grocery budget is fine because it's a
        single, predictable weekly trip they're already conscious of. The $300 that
        disappears is scattered across a dozen small purchases nobody tracks individually —
        exactly the pattern an app's category view is built to surface, and exactly the
        pattern cash alone would do nothing to explain.
      </p>
      <p>
        <strong>A couple who overspends on dining out every single month despite knowing
        the number in advance.</strong> They've looked at the app, seen the total, and gone
        out anyway, more than once. The information was never the missing piece — a shared
        cash envelope that physically runs out removes the "just this once" decision from
        either partner's hands.
      </p>
      <p>
        <strong>Someone switching jobs who suddenly has irregular income and needs to see
        patterns, not just enforce limits.</strong> With income varying month to month, the
        more urgent need is understanding which categories flex and which don't — that's a
        visibility problem an app answers far better than a fixed cash withdrawal can, since
        the withdrawal amount itself would have to keep changing.
      </p>
      <p>
        <strong>A student using cash for weekly spending money but tracking tuition and
        rent digitally.</strong> This is the hybrid in practice: fixed, large, auto-paid
        expenses live in an app where they belong, while the small discretionary cash that
        tends to vanish on nights out gets a physical, self-limiting container instead.
      </p>
      <p>
        <strong>A household that stopped using cash entirely and realized they'd lost all
        sense of their weekly spend.</strong> Cards made every purchase frictionless, and
        frictionless spending is exactly what quietly adds up. Reintroducing a cash envelope
        for just the "fun money" category restored a felt sense of a weekly limit that a
        bank balance alone wasn't providing.
      </p>
      <p>
        <strong>A saver using cash envelopes for gifts and holiday spending to avoid a
        December card-balance surprise.</strong> Holiday spending is a classic overspending
        trap precisely because it's emotionally charged and easy to justify "just this once"
        — a fixed cash amount set aside months in advance removes that justification before
        the shopping season even starts.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Common mistakes
      </h2>
      <p>
        <strong>Trying to envelope fixed bills that are paid automatically.</strong> Rent,
        utilities, loan payments, and subscriptions are drafted directly from an account or
        card — cash in an envelope has no way to touch them. Attempting to "envelope" these
        anyway just means pulling out cash that then sits unused while the real bill gets
        paid separately, which defeats the entire purpose of the system.
      </p>
      <p>
        <strong>Switching to an app expecting it to stop overspending the way cash does.</strong>{' '}
        This backfires because it sets up the app to fail at a job it was never designed for.
        An app that faithfully shows "you're $40 over" after the fact isn't broken — it's
        doing exactly what it's built to do. Expecting it to also physically prevent the
        charge leads people to abandon a perfectly good visibility tool because it "didn't
        work," when the real issue was a mismatch between the tool and the problem.
      </p>
      <p>
        <strong>Never logging what cash was actually spent on.</strong> This loses the one
        advantage a tracker gives you — the ability to look back and see a pattern. A cash
        system with no record of individual purchases can tell you that the envelope is
        empty, but not why, which makes it impossible to adjust next month's amount with any
        confidence.
      </p>
      <p>
        <strong>Picking a method based on what worked for someone else.</strong> A friend's
        glowing review of cash envelopes says more about their spending pattern than about
        yours. If their problem was stopping power and yours is visibility, copying their
        solution solves nothing and can leave you more frustrated than before you tried it.
      </p>
      <p>
        <strong>Giving up after one bad month instead of adjusting which categories get the
        cash treatment.</strong> One overspent envelope doesn't mean the method failed — it
        might mean the category was sized wrong, or that a different category is the actual
        culprit. Dropping the whole approach after a single rough month throws away
        information that would otherwise help you calibrate it.
      </p>
      <p>
        <strong>Enveloping every category at once instead of starting small.</strong> Going
        from zero structure to five or six cash envelopes in one month is a lot of new
        behavior to adopt simultaneously, and it's a common reason people abandon the system
        within weeks. Starting with the one worst category and expanding only if it's
        working tends to stick far better.
      </p>
      <p>
        <strong>Treating leftover cash as free money instead of deciding its fate in
        advance.</strong> Without a rule for what happens to unspent envelope cash at
        month-end, it tends to get spent on something unplanned simply because it's sitting
        there — which quietly reintroduces the exact kind of untracked spending the system
        was supposed to prevent.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        Troubleshooting and edge cases
      </h2>
      <p>
        <strong>What if an unexpected expense shows up mid-month and I don't have cash on
        hand?</strong> Decide ahead of time whether that expense borrows from another
        envelope or gets paid by card and logged separately. The important part isn't which
        rule you pick — it's having one before the situation happens, so you're not making
        the decision under pressure at the register.
      </p>
      <p>
        <strong>What if my income is irregular and I can't withdraw the same amount every
        month?</strong> Base the withdrawal on your lowest expected income for the period,
        not your best-case guess, and treat any extra income above that as a bonus to assign
        afterward rather than something you counted on when sizing the envelopes.
      </p>
      <p>
        <strong>What if two people in a household disagree on how strict the cash system
        should be?</strong> Put the disagreement into the numbers rather than the method —
        agree on the dollar amount per envelope together, and let the cash itself enforce
        the limit neutrally, rather than one partner having to police the other's spending
        in the moment.
      </p>
      <p>
        <strong>What if I run out of a category's cash with a week left in the month?</strong>{' '}
        That's the system working as intended, not a failure of it — the discomfort of an
        empty envelope with days still to go is exactly the signal that the category needs
        to be sized differently next month, not a sign that the method itself doesn't suit
        you.
      </p>

      <h2 className="font-semibold text-lg text-slate-900 dark:text-white">
        A hybrid that covers both
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Track fixed bills and card spending in an app — you can't envelope a subscription anyway.</li>
        <li>Withdraw cash only for the categories where you overspend most: dining out, takeout, impulse retail.</li>
        <li>Log the cash category total in your tracker at month-end so it still shows up in your full picture.</li>
        <li>Revisit after 2-3 months — if the cash categories stop overspending, you may not need the envelope at all.</li>
      </ul>
      <p>
        The honest answer is that neither method fixes a budget with no categories or
        limits at all — both need a real number to spend against before they can help you
        stick to it. The method is only ever the second decision; naming an honest number
        for each category is the first one, and it's the one that actually does most of the
        work.
      </p>

      <Link to="/budget" className="btn-primary inline-block">
        Try digital budget tracking
      </Link>
    </BlogPostLayout>
  )
}
