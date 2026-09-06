import { Link } from 'react-router-dom'
import { useConsent } from '../lib/ConsentContext.jsx'

export default function CookieConsentBanner() {
  const { consent, accept, decline } = useConsent()

  if (consent) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-20 border-t border-slate-200 bg-white/95 backdrop-blur px-4 py-4 dark:bg-slate-900/95 dark:border-slate-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-3 justify-between text-sm">
        <p className="text-slate-600 dark:text-slate-300">
          We use cookies for ad personalization. See our{' '}
          <Link to="/privacy" className="underline text-brand-600">Privacy Policy</Link>.
        </p>
        <div className="flex gap-2 shrink-0">
          <button onClick={decline} className="btn-secondary text-xs">Decline</button>
          <button onClick={accept} className="btn-primary text-xs">Accept</button>
        </div>
      </div>
    </div>
  )
}
