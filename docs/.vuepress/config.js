import { getDirname, path } from "vuepress/utils"
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import fs from 'node:fs'

import meta from './config/meta'
import theme from './config/theme'

const __dirname = getDirname(import.meta.url)
const docsDir = path.resolve(__dirname, '..')

const FALLBACK_LOCALE = 'en'
const OTHER_LOCALES = ['de', 'es', 'fr']

// ---------------------------------------------------------------------------
// Before VuePress starts: create stub markdown files for EN articles that
// are missing in other locales. This ensures the blog plugin picks them up
// (it requires real files with filePathRelative).
// Generated stubs are tracked via a manifest and cleaned up on each run.
// ---------------------------------------------------------------------------
const manifestPath = path.resolve(__dirname, '.generated-fallbacks.json')

;(() => {
  // Clean up previously generated stubs
  if (fs.existsSync(manifestPath)) {
    const oldPaths = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
    for (const p of oldPaths) {
      if (fs.existsSync(p)) fs.rmSync(p, { recursive: true })
    }
  }

  const enNewsDir = path.resolve(docsDir, FALLBACK_LOCALE, 'news')
  if (!fs.existsSync(enNewsDir)) return

  const enSlugs = fs.readdirSync(enNewsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  const generated = []

  for (const locale of OTHER_LOCALES) {
    const localeNewsDir = path.resolve(docsDir, locale, 'news')
    if (!fs.existsSync(localeNewsDir)) fs.mkdirSync(localeNewsDir, { recursive: true })

    const existingSlugs = new Set(
      fs.readdirSync(localeNewsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
    )

    for (const slug of enSlugs) {
      if (existingSlugs.has(slug)) continue

      const enFile = path.resolve(enNewsDir, slug, 'README.md')
      if (!fs.existsSync(enFile)) continue

      const targetDir = path.resolve(localeNewsDir, slug)
      fs.mkdirSync(targetDir, { recursive: true })
      fs.copyFileSync(enFile, path.resolve(targetDir, 'README.md'))
      generated.push(targetDir)
    }
  }

  fs.writeFileSync(manifestPath, JSON.stringify(generated, null, 2))
})()

export default defineUserConfig({
  ...meta,
  theme,
  bundler: viteBundler(),
  base: process.env.VUEPRESS_BASE ? `/${process.env.VUEPRESS_BASE}/` : '/',
  alias: {
    '@theme': path.resolve(
      __dirname,
      './theme',
    ),
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/de/': {
      lang: 'de-DE',
    },
    '/en/': {
      lang: 'en-EN',
    },
    '/es/': {
      lang: 'es-ES',
    },
    '/fr/': {
      lang: 'fr-FR',
    },
  },
  plugins: [
    {
      name: "collect-article-true",
      async onPrepared(app) {
        const rows = app.pages
          .filter((p) => p.frontmatter?.article === true || p.frontmatter?.article === "true")
          .map((p) => {
            const fm = p.frontmatter || {};
            // gängige Cover-Keys im Theme Hope Umfeld:
            const cover = fm.cover || fm.image || fm.banner || fm.heroImage || null;
            // kurze Beschreibung / Excerpt
            const excerpt = p.excerpt || fm.description || "";
            return {
              path: p.path,
              title: p.title || fm.title || "",
              date: fm.date || null,          // ISO empfohlen
              tags: Array.isArray(fm.tags) ? fm.tags : (fm.tag ? [].concat(fm.tag) : []),
              category: Array.isArray(fm.category) ? fm.category : (fm.categories ? fm.categories : []),
              cover,
              excerpt,
              locale: p.pathLocale || "/",
            };
          })
          .sort((a, b) => {
            const ta = a.date ? Date.parse(a.date) : 0;
            const tb = b.date ? Date.parse(b.date) : 0;
            return tb - ta;
          });

        await app.writeTemp("mini-blog.articles.json", JSON.stringify(rows, null, 2));
      },
    },
  ],
})
