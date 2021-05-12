import colors from 'vuetify/es5/util/colors'

let config = {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // router: {
  //   base: process.env.NODE_ENV === 'production' ?
  //     '/' :
  //     '/'
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Bernd Siegel Steingestaltung',
    title: 'Home',
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
        content: 'Sie finden unsere Firma Bernd Siegel Steingestaltung in Neudenau.'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  webfontloader: {
    google: {
      families: ['Roboto:400,500,700&display=swap']
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/vue-observe-visibility.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    ['@nuxt/image', {
      provider: 'static',
      dir: "assets/images",
    }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-webfontloader'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#770019",
          link: "#1976D2",
          accent: "#2C4251",
          background: "#fff",
          panel: "#f7f7f8",
          font: "#2C4251"
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // nuxt/image: https://image.nuxtjs.org/api/options/
  image: {
    staticFilename: '[publicPath]/images/[name]-[hash][ext]'
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push('@/plugins/global.js')
}

export default config
