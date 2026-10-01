import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import { ThemeProvider } from './lib/ThemeContext.jsx'
import { CurrencyProvider } from './lib/CurrencyContext.jsx'
import { ConsentProvider } from './lib/ConsentContext.jsx'
import { HeadContext } from './lib/HeadContext.jsx'

export { ROUTES } from './routes.js'

// Called once per route by scripts/prerender.mjs (Node, not the browser).
// Returns the rendered HTML plus whatever useSeo/useJsonLd collected for
// that route, synchronously during this single render pass.
export function render(url) {
  const collector = { title: '', description: '', canonical: '', jsonld: {} }

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <HeadContext.Provider value={collector}>
        <ThemeProvider>
          <CurrencyProvider>
            <ConsentProvider>
              <StaticRouter location={url}>
                <App />
              </StaticRouter>
            </ConsentProvider>
          </CurrencyProvider>
        </ThemeProvider>
      </HeadContext.Provider>
    </React.StrictMode>
  )

  return { html, head: collector }
}
