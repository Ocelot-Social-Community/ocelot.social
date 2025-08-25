import { getDirname, path } from "vuepress/utils"
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { blogPlugin } from '@vuepress/plugin-blog'

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
    blogPlugin({
      // Nur Seiten aus /news/ als Artikel behandeln
      filter: ({ filePathRelative, frontmatter }) => {
        if (!filePathRelative) return false
        if (frontmatter.home) return false
        const norm = filePathRelative.replace(/\\/g, '/')
        return norm.includes('/news/') && !norm.includes('/news/README.md')
      },

      // Welche Infos je Artikel ins Route-Meta landen
      getInfo: ({ frontmatter, title, git = {} }) => ({
        title,
        date: frontmatter.date || git.createdTime || null,
        cover: frontmatter.cover,
        description: frontmatter.description || '',
        lang: frontmatter.lang || '',
      }),

      // Ein "Type" 'news' anlegen und nach Datum sortieren
      type: [
        {
          key: 'news',
          filter: (page) => page.path.includes('/news/') && !page.path.includes('/news/README.md'),
          // eigener Routenpfad für die Sammlung (kollidiert nicht mit /news/)
          path: '/_news/',
          sorter: (a, b) => {
            const ts = (p) => {
              const d = p.frontmatter.date ?? (p.git && p.git.createdTime) ?? 0
              return typeof d === 'number' ? d : Date.parse(d)
            }
            return ts(b) - ts(a)
          },
        },
      ],

      // Optional: Teasertexte via <!-- more --> trennen
      excerpt: true,
      excerptSeparator: '<!-- more -->',
    }),
  ],
})
