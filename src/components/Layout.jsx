import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import CookieConsentBanner from './CookieConsentBanner.jsx'

// AdSlot is placed per-page (Landing, blog, guides), not here — interactive
// tool pages (split/budget/bills/savings) intentionally have no ads.
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-10">
        {children}
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  )
}
