import { getDirname, path } from "vuepress/utils"
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

import meta from './config/meta'
import theme from './config/theme'

const __dirname = getDirname(import.meta.url)

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
    '/': {
      lang: 'de-DE',
    },
    '/en/': {
      lang: 'en-US',
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
