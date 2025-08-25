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
  }
})
