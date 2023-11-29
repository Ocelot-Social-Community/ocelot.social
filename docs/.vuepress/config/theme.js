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
  locales:{
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Ocelot.Social',
      // description: ''
      copyright: '&copy; by <a href="https://busfaktor.org" target="_blank">busFaktor() e.V.</a> & Authors | <a href="/impressum/">Impressum</a>',
      footer: 'Released under the <a class="vt-link link link" href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><!--[-->MIT License<!--]--><!----></a>.',
      navbar: [
        { 
          text: 'Documentation', link: 'https://docs.ocelot.social/' 
        },
        { 
          text: 'Demo', link: 'https://stage.ocelot.social/' 
        },
        {
          text: 'Github',
          link: 'https://github.com/Ocelot-Social-Community'
        },
        {
          text: 'Imprint',
          link: '/impressum/'
        },
      ],
    },
    '/': {
      lang: 'de-DE',
      title: 'Ocelot.Social',
      // description: ''
      copyright: '&copy; von <a href="https://busfaktor.org" target="_blank">busFaktor() e.V.</a> & Authoren | <a href="/impressum/">Impressum</a>',
      footer: 'Unter der <a class="vt-link link link" href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><!--[-->MIT License<!--]--><!----></a> ausgeliefert.',
      navbar: [
        { 
          text: 'Documentation', link: 'https://docs.ocelot.social/' 
        },
        { 
          text: 'Demo', link: 'https://stage.ocelot.social/' 
        },
        {
          text: 'Github',
          link: 'https://github.com/Ocelot-Social-Community'
        },
        {
          text: 'Impressum',
          link: '/impressum/'
        },
      ],
    }
  },
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
