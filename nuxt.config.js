export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Siegel Steinmetz', //process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'de'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net'
      }
    ]
  },
  webfontloader: {
    google: {
      families: ['Roboto:400,500,700&display=swap']
    }
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Vuetify themes
   */
  vuetify: {
    theme: {
      options: {
        customProperties: true,
      },
      themeCache: {
        get: key => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      },
      themes: {
        light: {
          primary: "#770019",
          secondary: "#D9D9DA",
          tertiary: "#AFB0B0",
          anchor: "#1976D2",
          accent: "#2C4251",
          white: "#fff",
          gray: "#f7f7f8"
        }
      }
    }
  },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/vue-observe-visibility.js'
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    // '@nuxt/content',
    '@nuxt/components',
    '@nuxtjs/apollo',
    'nuxt-webfontloader'
  ],
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
    
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
      }
    }
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
