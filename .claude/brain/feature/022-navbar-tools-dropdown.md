---
routes: none (layout change)
file: src/components/Navbar.jsx
category: feature
---

Desktop nav restructured: 9 flat tool links no longer fit the navbar width.
Dashboard stays a top-level link (it's the overview hub, not a calculator);
the other 8 tool links moved into a "Tools" dropdown, opened via a button
with `aria-expanded`/`aria-haspopup`, closed on outside click (`mousedown`
listener scoped to open-state only) and on route change (`useLocation`
effect). The dropdown button itself highlights active when the current
route matches any `toolLinks` entry, same visual treatment as a normal
active `NavLink`.

Mobile menu (the `sm:hidden` hamburger panel) is untouched — still a flat
vertical list of all 9 links (`links = [dashboardLink, ...toolLinks]`),
since vertical scrolling handles 9 items fine on mobile; the overflow
problem was specifically the desktop horizontal row running out of width.

Add new tools to `toolLinks`, not `links` directly — `links` is derived
from `toolLinks` for the mobile menu only.
