import { useEffect } from 'react'
import { ADSENSE_PUBLISHER_ID, isAdsConfigured } from '../lib/adsense.js'
import { useConsent } from '../lib/ConsentContext.jsx'

export default function AdSlot({ slotId = '0000000000' }) {
  const { consent } = useConsent()
  const live = isAdsConfigured() && consent === 'accepted'

  useEffect(() => {
    if (!live) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // ad blocker present, or script hasn't finished loading yet — nothing to do
    }
  }, [live])

  if (!live) {
    return (
      <div className="card flex items-center justify-center h-24 text-xs text-slate-400 dark:text-slate-500">
        Ad space
      </div>
    )
  }

  return (
    <ins
      className="adsbygoogle block"
      style={{ display: 'block' }}
      data-ad-client={ADSENSE_PUBLISHER_ID}
      data-ad-slot={slotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}
