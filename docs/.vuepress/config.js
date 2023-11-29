import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'
import plugins from './config/plugins'

export default defineUserConfig({
  ...meta,
  theme,
  plugins,
  locales:{
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Ocelot.Social',
      // description: ''
    },
    '/de/': {
      lang: 'de-DE',
      title: 'Ocelot.Social',
      // description: ''
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Ocelot.Social',
    }
  }
})