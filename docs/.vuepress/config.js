import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'
import plugins from './config/plugins'

export default defineUserConfig({
  ...meta,
  theme,
  plugins,
  base: process.env.VUEPRESS_BASE ? `/${process.env.VUEPRESS_BASE}/` : '/',
  locales:{
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/de/': {
      lang: 'de-DE',
    },
    '/en/': {
      lang: 'en-EN',
    },
    '/fr/': {
      lang: 'fr-FR',
    },
  }
})