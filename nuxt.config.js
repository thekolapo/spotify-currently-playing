export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  loading: {
    height: '4px',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The song Kolapo is listening to on Spotify',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        hid: "viewport",
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      { name: 'keywords', content: 'kolapo oni, kolapo oni music, kolapo music' },
      {
        hid: 'description',
        name: 'description',
        content: "This is a wee music project that shows the song I’m currently listening to on Spotify. You can also subscribe to my mailing list and you’ll receive a beautifully curated newsletter in your inbox every once in awhile, centred around music, history, design, architecture, photography, and interesting things I find on the internet.",
      },
      { property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content:'The song Kolapo is listening to on Spotify' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://music.thekolapo.com/meta-image.png',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "This is a wee music project that shows the song I’m currently listening to on Spotify. You can also subscribe to my mailing list and you’ll receive a beautifully curated newsletter in your inbox every once in awhile, centred around music, history, design, architecture, photography, and interesting things I find on the internet. ",
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'The song Kolapo is listening to on Spotify'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: "This is a wee music project that shows the song I’m currently listening to on Spotify. You can also subscribe to my mailing list and you’ll receive a beautifully curated newsletter in your inbox every once in awhile, centred around music, history, design, architecture, photography, and interesting things I find on the internet. ",
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://music.thekolapo.com/meta-image.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    BASE_URL: process.env.BASE_URL,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/pixi', mode: 'client', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    
  },
  styleResources: {
    scss: [
      '~/assets/scss/core/_variables.scss',
      '~/assets/scss/mixins/_mediaqueries.scss',
    ],
  },
}
