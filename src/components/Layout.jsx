import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import AdSlot from './AdSlot.jsx'
import CookieConsentBanner from './CookieConsentBanner.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-10">
        {children}
        <div className="mt-10">
          <AdSlot slotId="0000000000" />
        </div>
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  )
}
