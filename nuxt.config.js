module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '从你的全世界路过.....',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#455be8'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
   // 一次打包
   vendor: ['axios'],
   postcss: [
    require('postcss-px2rem')({
      remUnit: 75
   })],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

