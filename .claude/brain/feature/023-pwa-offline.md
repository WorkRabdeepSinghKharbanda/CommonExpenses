---
routes: none (app-shell behavior, not a page)
file: public/sw.js, public/manifest.webmanifest, scripts/inject-sw-version.mjs
category: feature
---

Installable + offline support, hand-rolled (zero new npm dependencies,
matching this repo's existing principle from the prerendering work — no
`vite-plugin-pwa`).

**`public/manifest.webmanifest`**: standalone display, reuses the existing
192/512 favicon PNGs (no new icon assets needed), linked from `index.html`.

**`public/sw.js`**: network-first for navigations (HTML), cache-first for
everything else (hashed JS/CSS/images — safe to cache aggressively since a
content-hashed filename never changes). `CACHE_NAME` has a
`__CACHE_VERSION__` placeholder that **must** get replaced at build time —
`scripts/inject-sw-version.mjs` does this right after the client `vite
build` step (so it runs before SSR/sitemap/prerender in the `npm run build`
pipeline), stamping in `Date.now()`. On `activate`, the worker deletes any
cache whose name doesn't match the current `CACHE_NAME` — this is what
actually prevents a stale service worker from serving last deploy's
now-404ing hashed bundle forever after a new deploy ships.

**`src/main.jsx`**: registers `/sw.js` only when `import.meta.env.PROD` —
never in dev, since a cached dev service worker would make local changes
confusing to debug.

No automated verification of actual install/offline behavior was possible
in this environment (no browser automation tool) — verified instead via:
build succeeds and injects a real version (not the placeholder) into
`dist/sw.js`, the manifest is valid JSON, `node --check` on both new JS
files. Manual follow-up worth doing once deployed: open the site, confirm
an install prompt/option appears, go offline and confirm a previously
visited page still loads.
