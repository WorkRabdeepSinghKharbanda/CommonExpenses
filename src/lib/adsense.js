// Replace with the real publisher ID once signed up at adsense.google.com.
export const ADSENSE_PUBLISHER_ID = 'ca-pub-0000000000000000'

export function isAdsConfigured() {
  return ADSENSE_PUBLISHER_ID !== 'ca-pub-0000000000000000'
}

let scriptLoaded = false

// Must only be called after the user accepts the cookie-consent banner (GDPR).
export function loadAdsenseScript() {
  if (scriptLoaded || !isAdsConfigured()) return
  scriptLoaded = true
  const script = document.createElement('script')
  script.async = true
  script.crossOrigin = 'anonymous'
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`
  document.head.appendChild(script)
}
