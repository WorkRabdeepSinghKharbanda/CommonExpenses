import { useEffect } from 'react'
import { useHeadCollector } from './HeadContext.jsx'

const BASE_URL = 'https://common-expenses-tracker.vercel.app'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Dual-mode: during server rendering (HeadContext present), write
// synchronously into the collector so the prerender script can inject real
// per-route <head> tags into the static HTML — effects never run during
// renderToString, so this is the only way SSR output gets real meta tags.
// In the browser (HeadContext is null), the effect below mutates
// document directly, exactly as before.
export function useSeo({ title, description, path = '/' }) {
  const collector = useHeadCollector()
  if (collector) {
    collector.title = title
    collector.description = description
    collector.canonical = `${BASE_URL}${path}`
  }

  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', `${BASE_URL}${path}`)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${BASE_URL}${path}`)
  }, [title, description, path])
}

export function useJsonLd(id, data) {
  const collector = useHeadCollector()
  if (collector) {
    collector.jsonld = collector.jsonld || {}
    collector.jsonld[id] = data
  }

  useEffect(() => {
    let el = document.getElementById(id)
    if (!el) {
      el = document.createElement('script')
      el.id = id
      el.type = 'application/ld+json'
      document.head.appendChild(el)
    }
    el.textContent = JSON.stringify(data)
    return () => el?.remove()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, JSON.stringify(data)])
}
