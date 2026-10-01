---
routes: /guides/split, /guides/budget, /guides/bills, /guides/savings, /alternatives, /alternatives/splitwise-alternative, /alternatives/tricount-alternative, /alternatives/ynab-alternative, /alternatives/mint-alternative, /about
file: src/pages/hubs/CategoryHub.jsx, src/pages/alternatives/, src/pages/About.jsx
category: interlinking
---

4 category hub pages (`CategoryHub.jsx`, driven by `src/content/categories.js`,
listing that category's guides/posts/alternatives + a CTA to the matching
calculator, with ItemList JSON-LD). 1 alternatives index + 4 factual
"X alternative" comparison pages (`AlternativePage.jsx`, driven by
`src/content/alternatives.js` — Splitwise, Tricount, YNAB, Mint). 1 About/
Contact page for ad-network trust signals. All routes bound via closures in
`src/routes.jsx` rather than one file per page (see `...CATEGORIES.map(...)`
and `...ALTERNATIVES.map(...)` there).

Every guide page and every blog post now also renders a `Breadcrumbs`
component (`src/components/Breadcrumbs.jsx`, with BreadcrumbList JSON-LD)
linking back to its category hub.
