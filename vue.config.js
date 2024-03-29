
const BASE_URL = process.env.NODE_ENV === 'production'? './': '/';
// vue.config.js
module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist',
  lintOnSave: false,

  //关键点在这
  runtimeCompiler: true,

  devServer: {
      proxy: {
        '/api': {
          target: 'http://test.3000p.com:5005/', //对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      },
      disableHostCheck: true,
    },

  //webpack配置
  configureWebpack: {
  //警告 webpack 的性能提示
  performance: {
    hints:'warning',
    //入口起点的最大体积
    maxEntrypointSize: 50000000,
    //生成文件的最大体积
    maxAssetSize: 30000000,
    //只给出 js 文件的性能提示
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.js');
    }
  }
},
}
