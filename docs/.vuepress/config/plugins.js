import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { redirectPlugin } from 'vuepress-plugin-redirect'

export default [
  searchProPlugin({
    indexContent: true,
    autoSuggestions: true,
    customFields: [
      {
        getter: (page) => page.frontmatter.category,
        formatter: "Category: $content",
      },
      {
        getter: (page) => page.frontmatter.tag,
        formatter: "Tag: $content",
      },
    ],
  }),
  redirectPlugin({
    autoLocale: true,
  })
]