# Common Expenses Tracker

Personal solo project. See [.claude/rules/branching.md](.claude/rules/branching.md) for
branching/deploy workflow — direct pushes to `master`, no PRs.

Before starting work, read [.claude/brain/feature/000-index.md](.claude/brain/feature/000-index.md)
for the current feature/route inventory. Source of truth is [src/routes.jsx](src/routes.jsx) —
regenerate the brain from it if they disagree.

Build does client build -> SSR build -> sitemap generation -> prerender (see
scripts/prerender.mjs and scripts/generate-sitemap.mjs), all driven by src/routes.jsx.
Add a new route there, nowhere else — it feeds the router, the sitemap, and prerendering.
