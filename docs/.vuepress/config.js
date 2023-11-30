import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'
import plugins from './config/plugins'

export default defineUserConfig({
  ...meta,
  theme,
  plugins,
  base: process.env.VUEPRESS_BASE ?? '/',
  locales: {
    '/': {
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