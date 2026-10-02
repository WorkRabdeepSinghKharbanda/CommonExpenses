import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const dist = path.join(root, 'dist')
const serverDist = path.join(dist, 'server')

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function replaceAttr(html, regex, value) {
  return regex.test(html) ? html.replace(regex, value) : html
}

async function main() {
  const { render, ROUTES } = await import(path.join(serverDist, 'entry-server.js'))
  const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

  for (const route of ROUTES) {
    const { html, head } = render(route.path)
    let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)

    if (head.title) {
      const safeTitle = escapeHtml(head.title)
      page = replaceAttr(page, /<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
      page = replaceAttr(
        page,
        /<meta property="og:title" content=".*?" \/>/,
        `<meta property="og:title" content="${safeTitle}" />`
      )
      page = replaceAttr(
        page,
        /<meta name="twitter:title" content=".*?" \/>/,
        `<meta name="twitter:title" content="${safeTitle}" />`
      )
    }

    if (head.description) {
      const safeDesc = escapeHtml(head.description)
      page = replaceAttr(
        page,
        /<meta name="description" content=".*?" \/>/,
        `<meta name="description" content="${safeDesc}" />`
      )
      page = replaceAttr(
        page,
        /<meta property="og:description" content=".*?" \/>/,
        `<meta property="og:description" content="${safeDesc}" />`
      )
      page = replaceAttr(
        page,
        /<meta name="twitter:description" content=".*?" \/>/,
        `<meta name="twitter:description" content="${safeDesc}" />`
      )
    }

    if (head.image) {
      const safeImage = escapeHtml(head.image)
      const ext = path.extname(head.image).toLowerCase()
      const imageType = ext === '.png' ? 'image/png' : ext === '.jpeg' ? 'image/jpeg' : ext === '.jpg' ? 'image/jpeg' : 'image/png'
      page = replaceAttr(page, /<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${safeImage}" />`)
      page = replaceAttr(page, /<meta property="og:image:type" content=".*?" \/>/, `<meta property="og:image:type" content="${imageType}" />`)
      page = replaceAttr(page, /<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${safeImage}" />`)
      if (!/<meta name="twitter:image"/.test(page)) {
        page = page.replace('</head>', `    <meta name="twitter:image" content="${safeImage}" />\n  </head>`)
      }
    }

    if (head.canonical) {
      const safeUrl = escapeHtml(head.canonical)
      page = replaceAttr(page, /<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${safeUrl}" />`)
      page = replaceAttr(page, /<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${safeUrl}" />`)
    }

    page = replaceAttr(
      page,
      /<meta property="og:type" content=".*?" \/>/,
      `<meta property="og:type" content="${head.publishedTime ? 'article' : 'website'}" />`
    )

    if (head.publishedTime) {
      const articleMeta =
        `<meta property="article:published_time" content="${escapeHtml(head.publishedTime)}" />\n` +
        `    <meta property="article:modified_time" content="${escapeHtml(head.modifiedTime || head.publishedTime)}" />`
      page = page.replace('</head>', `    ${articleMeta}\n  </head>`)
    }

    const jsonLdScripts = Object.entries(head.jsonld || {})
      .map(([id, data]) => `<script type="application/ld+json" id="${id}">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`)
      .join('\n    ')
    if (jsonLdScripts) {
      page = page.replace('</head>', `    ${jsonLdScripts}\n  </head>`)
    }

    const outPath = route.path === '/' ? path.join(dist, 'index.html') : path.join(dist, route.path.slice(1), 'index.html')
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, page)
  }

  fs.rmSync(serverDist, { recursive: true, force: true })
  console.log(`Prerendered ${ROUTES.length} routes.`)
}

main()
