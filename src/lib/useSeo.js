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
//
// publishedTime/modifiedTime are optional (blog posts only) — when given,
// sets og:type="article" + article:published_time/modified_time.
// image is an absolute or site-relative URL to a per-page OG/Twitter image;
// falls back to the site-wide /og-image.png default when omitted.
export function useSeo({ title, description, path = '/', publishedTime, modifiedTime, image }) {
  const collector = useHeadCollector()
  const resolvedImage = image ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) : `${BASE_URL}/og-image.png`

  if (collector) {
    collector.title = title
    collector.description = description
    collector.canonical = `${BASE_URL}${path}`
    collector.publishedTime = publishedTime
    collector.modifiedTime = modifiedTime
    collector.image = resolvedImage
  }

  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', `${BASE_URL}${path}`)
    setMeta('property', 'og:type', publishedTime ? 'article' : 'website')
    setMeta('property', 'og:image', resolvedImage)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', resolvedImage)

    if (publishedTime) {
      setMeta('property', 'article:published_time', publishedTime)
      setMeta('property', 'article:modified_time', modifiedTime || publishedTime)
    }

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${BASE_URL}${path}`)
  }, [title, description, path, publishedTime, modifiedTime, resolvedImage])
}

// data is skipped entirely (no script tag, no collector entry) when falsy —
// callers pass this for structured data built from content that might be
// empty (e.g. an FAQ array), to avoid shipping invalid empty JSON-LD.
export function useJsonLd(id, data) {
  const collector = useHeadCollector()
  if (collector && data) {
    collector.jsonld = collector.jsonld || {}
    collector.jsonld[id] = data
  }

  useEffect(() => {
    if (!data) return undefined
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
