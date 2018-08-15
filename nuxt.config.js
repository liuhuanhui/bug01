module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    ['nuxt-i18n',
      {
        seo: true,
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        },
        locales: [
          {
            iso: 'en-US',
            code: 'en',
            name: 'EN',
            file: 'en-US.js'
          },
          {
            iso: 'zh-CN',
            code: 'cn',
            name: 'ZH-CN',
            file: 'zh-CN.js'
          }
        ],
        lazy: true,
        langDir: 'lang/'
      }]
  ],
  // plugins: [
  //   // { src: '~/plugins/auth.js' },
  //   { src: '~/plugins/element-ui', ssr: true }
  // ],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
    }
  }
}
