import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const BASE_URL = 'https://common-expenses-tracker.vercel.app'

async function main() {
  const { ROUTES } = await import(path.join(root, 'dist', 'server', 'entry-server.js'))
  const today = new Date().toISOString().slice(0, 10)

  const urls = ROUTES.map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  ).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  fs.writeFileSync(path.join(root, 'dist', 'sitemap.xml'), xml)
  console.log(`Generated sitemap.xml with ${ROUTES.length} routes.`)
}

main()
