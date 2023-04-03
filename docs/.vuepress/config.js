const path = require('path')
module.exports = {
  title: 'Ocelot Social',
  description: 'ocelot.social is free and open source software program code to run social networks. Its development is supported by a community of programmers and interested network operators.',
  head: [
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1'}]
  ],
  theme: 'vuepress-theme-book',
  themeConfig: {
    logo: "/logo.svg",
    searchPlaceholder: "Search...",
    lastUpdated: "Last Updated",
    docsRepo: "https://github.com/Ocelot-Social-Community/ocelot.social/",
    docsDir: "docs",
    editLinks: true,
    editLinkText: 'Edit this page on Github',
    nav: [
      { text: 'Ocelot.Social', link: '/' },
      {
        text: 'Github',
        link:
          'https://github.com/Ocelot-Social-Community'
      },
    ],
    sidebar: {
      '/': [
        {
          title: '',
          collapsable: false,
          sidebarDepth: 0,
          children: [
              ['/', 'Ocelot.Social'],
              ['/code-of-conduct', 'Code of Conduct'],
              ['/contributing', 'Contributing'],
              ['/feature-specification', 'Feature Specification'],
              ['/license', 'License']
          ]
        },
        {
          title: 'Tech',
          collapsable: true,
          sidebarDepth: 0,
          children: [
              ['/tech/neo4j', 'Neo4J'],
              ['/tech/backend', 'Backend'],
              ['/tech/webapp', 'WebApp']
          ]
        },
        {
          title: 'Testing',
          collapsable: true,
          sidebarDepth: 0,
          children: [
              ['test/', 'Testing'],
              ['/test/cypress', 'End-To-End Tests'],
              ['/test/webapp', 'Frontend Tests'],
              ['/test/backend', 'Backend Tests']
          ]
        }
      ]
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': path.resolve(__dirname, '../images')
      }
    }
  },
}  
