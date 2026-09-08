export const ADSENSE_PUBLISHER_ID = 'ca-pub-5852027898822024'

export function isAdsConfigured() {
  return ADSENSE_PUBLISHER_ID !== 'ca-pub-0000000000000000'
}

let scriptLoaded = false

// Loads unconditionally on app start, independent of the cookie-consent choice.
export function loadAdsenseScript() {
  if (scriptLoaded || !isAdsConfigured()) return
  scriptLoaded = true
  const script = document.createElement('script')
  script.async = true
  script.crossOrigin = 'anonymous'
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`
  document.head.appendChild(script)
}
