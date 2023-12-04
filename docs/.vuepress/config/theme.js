import { hopeTheme } from 'vuepress-theme-hope'

export default hopeTheme({
  favicon: 'favicon.ico',
  logo: '/logo.svg',
  docsRepo: 'https://github.com/Ocelot-Social-Community/ocelot.social',
  repo: 'https://github.com/Ocelot-Social-Community/Ocelot-Social',
  docsBranch: 'master',
  docsDir: 'docs',
  editLink: true,
  lastUpdated: false,
  contributors: false,
  displayFooter: true,
  print: false,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },
  locales:{
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/de/': {
      lang: 'de-DE',
      title: 'Ocelot.Social',
      copyright: '&copy; von <a href="https://busfaktor.org" target="_blank">busFaktor() e.V.</a> & Authoren | <a href="/de/impressum/">Impressum</a>',
      footer: 'Unter der <a class="vt-link link link" href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><!--[-->MIT Lizenz<!--]--><!----></a> ausgeliefert.',
      navbar: [
        {
          text: 'Features',
          link: '/de/features/'
        },
        {
          text: 'Get Started',
          link: '/de/get-started/'
        },
        {
          text: 'Dokumentation',
          link: 'https://docs.ocelot.social/' ,
          target: '_self',
        },
        {
          text: 'Demo',
          link: 'https://stage.ocelot.social/',
          target: '_self',
        },
        {
          text: 'Impressum',
          link: '/de/impressum/'
        },
      ],
    },
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Ocelot.Social',
      // description: ''
      copyright: '&copy; by <a href="https://busfaktor.org" target="_blank">busFaktor() e.V.</a> & Authors | <a href="/en/impressum/">Impressum</a>',
      footer: 'Released under the <a class="vt-link link link" href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><!--[-->MIT License<!--]--><!----></a>.',
      navbar: [
        {
          text: 'Features',
          link: '/en/features/'
        },
        {
          text: 'Get Started',
          link: '/en/get-started/'
        },
        { 
          text: 'Documentation',
          link: 'https://docs.ocelot.social/',
          target: '_self',
        },
        { 
          text: 'Demo',
          link: 'https://stage.ocelot.social/',
          target: '_self',
        },
        {
          text: 'Imprint',
          link: '/en/impressum/'
        },
      ],
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Ocelot.Social',
      copyright: '&copy; par <a href="https://busfaktor.org" target="_blank">busFaktor() e.V.</a> & Auteurs | <a href="/fr/impressum/">Mentions légales</a>',
      footer: 'Publié sous la <a class="vt-link link link" href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><!--[-->licence MIT<!--]--><!----></a>.',
      navbar: [
        {
          text: 'Features',
          link: '/fr/features/'
        },
        {
          text: 'Get Started',
          link: '/fr/get-started/'
        },
        { 
          text: 'Documentation',
          link: 'https://docs.ocelot.social/',
          target: '_self',
        },
        { 
          text: 'Demo',
          link: 'https://stage.ocelot.social/',
          target: '_self',
        },
        {
          text: 'Mentions légales',
          link: '/fr/impressum/'
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
