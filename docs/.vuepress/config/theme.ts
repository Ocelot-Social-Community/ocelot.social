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
  markdown: {
    align: true,
    demo: true,
    sub: true,
    sup: true,
    vPre: true,
  },
  locales:{
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/de/': {
      lang: 'de-DE',
      title: 'Ocelot.Social',
      description: 'Ocelot.Social – Freie und Open-Source-Software zum Erstellen und Betreiben deines eigenen sozialen Netzwerks.',
      copyright: '&copy; von <a href="https://busfaktor.org" target="_blank">busFaktor() e.V.</a> & Freunde | <a href="/de/imprint/">Impressum</a> | <a href="/de/privacy-policy/">Datenschutz</a>',
      footer: 'Unter der <a class="vt-link link link" href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><!--[-->MIT Lizenz<!--]--><!----></a> ausgeliefert.',
      navbar: [
        {
          text: 'Funktionen',
          link: '/de/features/'
        },
        {
          text: 'Einstieg',
          link: '/de/get-started/'
        },
        {
          text: 'Mitmachen',
          link: '/de/contribute/'
        },
        {
          text: 'Lernen',
          link: '/de/learn/' ,
        },
        {
          text: 'Spenden',
          link: '/de/donate/'
        },
        {
          text: 'Kontakt',
          link: '/de/contact/'
        },
      ],
    },
    '/en/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Ocelot.Social',
      description: 'Ocelot.Social – Free and open source software to create and run your own social network.',
      copyright: '&copy; by <a href="https://busfaktor.org" target="_blank">busFaktor() e.V.</a> & Friends | <a href="/en/imprint/">Imprint</a> | <a href="/en/privacy-policy/">Privacy Policy</a>',
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
          text: 'Contribute',
          link: '/en/contribute/'
        },
        { 
          text: 'Learn',
          link: '/en/learn/' ,
        },
        {
          text: 'Donate',
          link: '/en/donate/'
        },
        {
          text: 'Contact',
          link: '/en/contact/'
        },
      ],
    },
    '/es/': {
      lang: 'es', // se establecerá como el atributo lang en <html>
      title: 'Ocelot.Social',
      description: 'Ocelot.Social: software libre y de código abierto para crear y gestionar tu propia red social.',
      copyright: '&copy; por <a href="https://busfaktor.org" target="_blank">busFaktor() e.V.</a> & Amigos | <a href="/en/imprint/">Aviso legal</a> | <a href="/en/privacy-policy/">Política de Privacidad</a>',
      footer: 'Liberado bajo la <a class="vt-link link link" href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><!--[-->Licencia MIT<!--]--><!----></a>.',
      navbar: [
        {
          text: 'Funcionalidades',
          link: '/es/features/'
        },
        {
          text: 'Empezar',
          link: '/es/get-started/'
        },
        {
          text: 'Contribuir',
          link: '/es/contribute/'
        },
        { 
          text: 'Aprender',
          link: '/es/learn/' ,
        },
        {
          text: 'Donar',
          link: '/es/donate/'
        },
        {
          text: 'Contacto',
          link: '/es/contact/'
        },
      ],
    },
    
    '/fr/': {
      lang: 'fr-FR',
      title: 'Ocelot.Social',
      description: 'Ocelot.Social - Logiciel open source et gratuit pour créer et gérer votre propre réseau social.',
      copyright: '&copy; par <a href="https://busfaktor.org" target="_blank">busFaktor() e.V.</a> & amis | <a href="/fr/imprint/">Mentions légales</a> | <a href="/fr/privacy-policy/">Protection des données</a>',
      footer: 'Publié sous la <a class="vt-link link link" href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer"><!--[-->licence MIT<!--]--><!----></a>.',
      navbar: [
        {
          text: 'Fonctionnalités',
          link: '/fr/features/'
        },
        {
          text: 'Commencer',
          link: '/fr/get-started/'
        },
        {
          text: 'Contribuer',
          link: '/fr/contribute/'
        },
        { 
          text: 'Apprendre',
          link: '/fr/learn/' ,
        },
        {
          text: 'Donner',
          link: '/fr/donate/'
        },
        {
          text: 'Contact',
          link: '/fr/contact/'
        },
      ],
    }
  },
  
  plugins: {
    icon: {
      assets: "fontawesome",
    },
    redirect: {
      autoLocale: true,
      defaultBehavior: 'defaultLocale',
      defaultLocale: '/de/',
      localeConfig: {
        '/de/': ['de-DE', 'de'],
        '/en/': ['en-US', 'en'],
        '/es/': ['es-ES', 'es'],
        '/fr/': ['fr-FR', 'fr'],
      },
      localeFallback: false,
    },
    slimsearch: {
      indexContent: true
    },
    seo: {
      fallbackImage: '/logo.svg',
      hostname: 'https://ocelot.social/'
    }
  },
})
