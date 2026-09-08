export const ADSENSE_PUBLISHER_ID = 'ca-pub-5852027898822024'

// The AdSense loader script itself is a static <script> tag in index.html's
// <head> (loads on every route, unconditionally) — this just gates whether
// AdSlot renders a real <ins> or a placeholder.
export function isAdsConfigured() {
  return ADSENSE_PUBLISHER_ID !== 'ca-pub-0000000000000000'
}
