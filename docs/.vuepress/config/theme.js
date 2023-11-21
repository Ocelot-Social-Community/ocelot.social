import { hopeTheme } from 'vuepress-theme-hope'

export default hopeTheme({
  favicon: 'favicon.ico',
  logo: '/logo.svg',
  docsRepo: 'https://github.com/Ocelot-Social-Community/ocelot.social',
  docsBranch: 'master',
  docsDir: 'docs',
  editLink: true,
  lastUpdated: false,
  contributors: false,
  displayFooter: true,
  print: false,
  copyright: 'CC BY busFaktor() e.V. & Authors',
  footer: 'Released under the <a class="vt-link link link" href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><!--[-->MIT License<!--]--><!----></a>.',
  navbar: [
    { text: 'Documentation', link: 'https://docs.ocelot.social/' },
    { text: 'Demo', link: 'https://stage.ocelot.social/' },
    {
      text: 'Github',
      link: 'https://github.com/Ocelot-Social-Community'
    },
  ],
  plugins: {
    mdEnhance: {
      align: true,
      demo: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      sub: true,
      sup: true,
      vPre: true,
    }
  }
})
