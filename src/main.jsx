import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './lib/ThemeContext.jsx'
import { CurrencyProvider } from './lib/CurrencyContext.jsx'
import { ConsentProvider } from './lib/ConsentContext.jsx'
import './index.css'

// Only in production — in dev, a cached service worker would otherwise
// serve stale assets across restarts and make local changes confusing.
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      // Registration can fail (e.g. private browsing) — the app works
      // identically without it, just without offline support.
      console.debug('Service worker registration failed:', err)
    })
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CurrencyProvider>
        <ConsentProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConsentProvider>
      </CurrencyProvider>
    </ThemeProvider>
  </React.StrictMode>
)
