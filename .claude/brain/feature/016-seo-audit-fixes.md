---
routes: /how-to-split-expenses-fairly, /how-to-build-a-budget-that-works
file: src/pages/guides/SplitExpensesPillar.jsx, src/pages/guides/BudgetPillar.jsx
category: seo-technical
---

Follow-up to a read-only SEO audit. Two parts:

**On-page fixes** (no new routes): blog posts gained a `seoTitle` field in
`posts.js` (short, for `<title>`/og/twitter — the long `title` stays the H1
and JSON-LD headline) since all 19 original titles exceeded 60 chars once the
site suffix was added. Posts also gained an `image` field (filename in
`public/blog-images/`) now wired through `useSeo`'s new `image` param into
per-post `og:image`/`twitter:image` (falls back to the site-wide
`/og-image.png` when a post has none). `FaqSection`/`useJsonLd` now skip
emitting FAQPage JSON-LD entirely when `items` is empty, instead of shipping
an invalid empty `mainEntity` array.

**New pillar pages** (2 new routes, `type: 'pillar'` in `routes.jsx`):
long-form pages that compare methods within a category and link out to the
specific guide/tool for each — `/how-to-split-expenses-fairly` for the split
category, `/how-to-build-a-budget-that-works` for budget. Each category in
`src/content/categories.js` can carry an optional `pillarRoute`/`pillarTitle`;
when present, `CategoryHub.jsx` features it as a "Start here" card above the
guides list and includes it in the hub's `ItemList` JSON-LD. `bills` and
`savings` categories have no pillar yet — add one the same way if warranted.
