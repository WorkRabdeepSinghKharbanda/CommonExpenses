// Hand-rolled service worker — no build plugin, so the version placeholder
// below is string-replaced by scripts/inject-sw-version.mjs after each
// `vite build`, forcing old caches to be dropped on every deploy.
const CACHE_NAME = 'cet-__CACHE_VERSION__'

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin) return

  // HTML pages: network-first, so a deploy is visible immediately when
  // online, with a cached copy as the offline fallback only.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy))
          return response
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/')))
    )
    return
  }

  // Everything else (hashed JS/CSS/images): cache-first, since a hashed
  // filename never changes content — safe to serve from cache indefinitely
  // and only hit the network the first time it's requested.
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          const copy = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy))
          return response
        })
    )
  )
})
