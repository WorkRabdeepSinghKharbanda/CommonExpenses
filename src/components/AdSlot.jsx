import { useEffect } from 'react'
import { ADSENSE_PUBLISHER_ID, isAdsConfigured } from '../lib/adsense.js'

export default function AdSlot({ slotId = '0000000000' }) {
  const live = isAdsConfigured()

  useEffect(() => {
    if (!live) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // ad blocker present, or script hasn't finished loading yet — nothing to do
    }
  }, [live])

  return (
    <div className="flex flex-col items-center gap-1 my-2">
      <span className="text-[10px] uppercase tracking-wide text-slate-400 dark:text-slate-500">
        Advertisement
      </span>
      <div className="w-full min-h-[100px] rounded-lg border border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden bg-slate-50/50 dark:bg-slate-800/30">
        {live ? (
          <ins
            className="adsbygoogle block w-full"
            style={{ display: 'block' }}
            data-ad-client={ADSENSE_PUBLISHER_ID}
            data-ad-slot={slotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        ) : (
          <span className="text-xs text-slate-400 dark:text-slate-500">Ad space</span>
        )}
      </div>
    </div>
  )
}
