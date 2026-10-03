import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const swPath = path.join(root, 'dist', 'sw.js')

const version = String(Date.now())
const sw = fs.readFileSync(swPath, 'utf-8')
if (!sw.includes('__CACHE_VERSION__')) {
  throw new Error('sw.js is missing the __CACHE_VERSION__ placeholder — cache-busting would silently no-op.')
}
fs.writeFileSync(swPath, sw.replace('__CACHE_VERSION__', version))
console.log(`Injected service worker cache version ${version}.`)
