require('dotenv').config()

console.log('env base url:', process.env.BASE_URL)

export default {
  server: {
    port: 8080,
    // host: '0.0.0.0',
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    'vuesax/dist/vuesax.css',
    '~/assets/stylesheets/transition.css',
    '~/assets/stylesheets/main.css',
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/vuesax', '~/plugins/axios'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/dotenv',
  ],
  dotenv: {},
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseRL: process.env.BASE_URL,
    retry: { retries: 3 },
  },

  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config/#what-are-environment-variables
  // available to frontend with $config
  publicRuntimeConfig: {
    browserBaseURL: process.env.BROWSER_BASE_URL,
  },

  // not exposed to frontend. this is for Api key, secret token
  privateRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
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
  build: {},

  serverMiddleware: [
    // Will register redirect-ssl npm package
    // 'redirect-ssl',

    '~/server/logger',
    //  Will register file from project api directory to handle /api/* requires
    '~/server/api.js',
  ],
}
