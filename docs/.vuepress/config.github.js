import { defineUserConfig } from 'vuepress'
import meta from './config/meta'
import theme from './config/theme'
import plugins from './config/plugins'

export default defineUserConfig({
  base: "/IT4C.dev/",
  ...meta,
  theme,
  plugins,
})
