import { useEffect } from 'react'

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

// SPA has no SSR, so index.html's static tags only cover the homepage.
// This sets per-route title/description/canonical/OG on mount for real per-page SEO.
export function useSeo({ title, description, path = '/' }) {
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
  }, [id, data])
}
