---
routes: all /blog/<slug> routes
file: src/pages/blog/, public/blog-images/
category: seo-blog
---

All 19 blog posts expanded from ~1,200-1,600 words to ~4,000-5,000 words:
added "Why this is harder than it looks", "A worked example", and
"Troubleshooting / edge cases" sections, deepened every existing section,
expanded FAQ to 8-10 items. No competitor names, no invented statistics —
worked-example numbers are explicitly illustrative.

18 of 19 posts also got one relevant photo/illustration in
`public/blog-images/<slug>.<ext>`, sourced from Wikimedia Commons and
verified CC0 or Public Domain via the Commons API's `extmetadata.
LicenseShortName` field (not just the license badge shown on the page) —
see the method in this feature's git history (commit expanding this batch)
for the exact curl-based verification steps if adding more. One post
(free-trials-that-convert-to-paid) has no image: the only candidate found
had mismatched content and an embedded Rawpixel copyright notice in its
EXIF data despite a Commons CC0 tag, so it was removed rather than kept.
