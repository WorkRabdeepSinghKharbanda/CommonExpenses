---
routes: /tip-calculator, /how-much-should-you-tip
file: src/pages/TipCalculator.jsx, src/lib/tipMath.js
category: feature
---

9th and (for this batch) final new tool: tip calculator — bill + tip% +
split among N people, `computeTip` in `src/lib/tipMath.js` (trivial, no
test file, same reasoning as `netWorth.js`). Filed under the existing
`split` category, not a new one — a tip split is a lightweight variant of
the existing bill-splitting theme.

Keyword research (`tip calculator app`, `tip splitting calculator`,
`tip splitter calculator`) showed real demand, but also a large cluster of
CS50/Python homework-assignment queries ("tip calculator python cs50")
that aren't this site's audience — ignored, not targeted.

Guide (`TipGuide.jsx`, `/how-much-should-you-tip`) deliberately gives only
well-known, general tipping norms (US restaurant 15-20%) rather than
inventing precise country-by-country percentages with no real source —
explicitly says norms vary and to check local convention. No blog post for
this tool: the content need judged too thin to justify one without padding
(a guide + the tool itself fully covers the real search intent found).

Persisted key: `tip.form` — added to `backup.js`. Not added to Dashboard
(one-shot calculator, like Loan/EMI — no ongoing state worth summarizing).

This closes out the 4-new-tool batch requested in this session: Debt
Payoff (018), Loan/EMI (019), Net Worth (020), Tip Calculator (021) — all
keyword-grounded, interlinked, reviewed, and shipped individually.
