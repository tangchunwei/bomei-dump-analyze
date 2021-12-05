// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        '/': {
          target: 'http://test.3000p.com:5005/', //对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/': ''
          }
        }
      },
      disableHostCheck: true,
    },
    pwa: {
      iconPaths: {
          favicon32: 'bitbug_favicon.ico',
          favicon16: 'bitbug_favicon.ico',
          appleTouchIcon: 'bitbug_favicon.ico',
          maskIcon: 'bitbug_favicon.ico',
          msTileImage: 'bitbug_favicon.ico'
      }
  }
  }