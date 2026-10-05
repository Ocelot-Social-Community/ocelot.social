import { getDirname, path } from "vuepress/utils"
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import fs from 'node:fs'

import meta from './config/meta'
import theme from './config/theme'
import { campaigns, latestCampaign, toIsoDate, validateCampaigns } from './crowdfunding.js'

const __dirname = getDirname(import.meta.url)
const docsDir = path.resolve(__dirname, '..')

const FALLBACK_LOCALE = 'en'
const OTHER_LOCALES = ['de', 'es', 'fr']
const DEFAULT_LOCALE = 'de'

// ---------------------------------------------------------------------------
// Crowdfunding: enrich the campaigns from `crowdfunding.js` with title,
// description and cover of their announcement posts per locale, and publish
// the latest campaign's cover under a stable URL for external sites:
// `/crowdfunding/current.png` (default locale) and
// `/crowdfunding/current--<locale>.png`.
// ---------------------------------------------------------------------------
const crowdfundingPlugin = () => {
  const locales = [FALLBACK_LOCALE, ...OTHER_LOCALES]
  const findPage = (app, locale, slug) => {
    const pagePath = `/${locale}/news/${slug}/`
    const page = app.pages.find((p) => p.path === pagePath)
    if (!page) throw new Error(`[crowdfunding] Post not found: ${pagePath}`)
    return page
  }

  return {
    name: 'crowdfunding',
    onInitialized() {
      validateCampaigns()
    },
    async onPrepared(app) {
      const data = {
        builtAt: toIsoDate(new Date()),
        campaigns: campaigns.map((campaign) => ({
          ...campaign,
          locales: Object.fromEntries(
            locales.map((locale) => {
              const page = findPage(app, locale, campaign.post)
              const thanksPage = campaign.thanksPost && findPage(app, locale, campaign.thanksPost)
              return [
                locale,
                {
                  title: page.title,
                  description: page.frontmatter.description || '',
                  cover: page.frontmatter.cover || null,
                  path: page.path,
                  thanksPath: thanksPage ? thanksPage.path : null,
                },
              ]
            }),
          ),
        })),
      }
      await app.writeTemp('crowdfunding.campaigns.json', JSON.stringify(data, null, 2))
    },
    onGenerated(app) {
      const targetDir = app.dir.dest('crowdfunding')
      fs.mkdirSync(targetDir, { recursive: true })
      for (const locale of locales) {
        const { cover } = findPage(app, locale, latestCampaign.post).frontmatter
        if (!cover || path.extname(cover) !== '.png') {
          throw new Error(`[crowdfunding] Cover of "${latestCampaign.post}" (${locale}) must be a .png, received: ${cover}`)
        }
        const source = app.dir.dest(cover.replace(/^\//, ''))
        fs.copyFileSync(source, path.resolve(targetDir, `current--${locale}.png`))
        if (locale === DEFAULT_LOCALE) fs.copyFileSync(source, path.resolve(targetDir, 'current.png'))
      }
    },
  }
}

// ---------------------------------------------------------------------------
// Before VuePress starts: for EN articles missing in other locales, create
// README.stub.md files with a permalink so VuePress treats them as pages.
// These .stub.md files are gitignored.
// ---------------------------------------------------------------------------
;(() => {
  // Clean up old stubs first
  for (const locale of OTHER_LOCALES) {
    const localeNewsDir = path.resolve(docsDir, locale, 'news')
    if (!fs.existsSync(localeNewsDir)) continue
    for (const entry of fs.readdirSync(localeNewsDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue
      const stubFile = path.resolve(localeNewsDir, entry.name, 'README.stub.md')
      if (fs.existsSync(stubFile)) {
        fs.unlinkSync(stubFile)
        // Remove directory if now empty
        const dir = path.resolve(localeNewsDir, entry.name)
        if (fs.readdirSync(dir).length === 0) fs.rmdirSync(dir)
      }
    }
  }

  const enNewsDir = path.resolve(docsDir, FALLBACK_LOCALE, 'news')
  if (!fs.existsSync(enNewsDir)) return

  const enSlugs = fs.readdirSync(enNewsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

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

      const enContent = fs.readFileSync(enFile, 'utf-8')

      // Inject permalink into frontmatter so VuePress maps the page
      // to the correct locale path (e.g. /fr/news/slug/)
      const permalink = `/${locale}/news/${slug}/`
      const stubContent = enContent.replace(
        /^---\n/,
        `---\npermalink: ${permalink}\n`
      )

      const targetDir = path.resolve(localeNewsDir, slug)
      fs.mkdirSync(targetDir, { recursive: true })
      fs.writeFileSync(path.resolve(targetDir, 'README.stub.md'), stubContent)
    }
  }
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
    crowdfundingPlugin(),
  ],
})
