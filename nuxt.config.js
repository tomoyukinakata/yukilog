import sass from 'sass'
import fiber from 'fibers'
import axios from 'axios'

require('dotenv').config();
const { API_KEY } = process.env;

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'yukilog',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Yukilogはフロントエンドエンジニアをしているゆきのブログサイトです。フロントエンドのことをメインに、Web制作やプライベートのことについても書いています。',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['ress', '~/assets/scss/_base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: sass,
        sassOptions: {
          fiber,
        },
      },
    },
    extend(config, ctx) {
      if (config.module) {
        config.module.rules.push({
          test: /\.(vert|frag)$/i,
          use: ['raw-loader'],
        })
      }
    },
  },

  styleResources: {
    scss: ['~/assets/scss/style.scss'],
  },

  webfontloader: {
    google: {
      families: ['Vollkorn:400;500;600;700'],
    },
  },

  generate: {
    async routes() {
      const pages = await axios
        .get('https://yukilog.microcms.io/api/v1/blog?limit=100', {
          headers: { 'X-API-KEY': '19ddd70a-0f27-4dca-a4f4-96f250654688' },
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/${content.id}`,
            payload: content,
          }))
        )
      return pages
    },
  },

  privateRuntimeConfig: {
    apiKey: API_KEY
  },
  publicRuntimeConfig: {
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined
  },
}
