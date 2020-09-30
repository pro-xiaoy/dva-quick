const path = require('path')
export default {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    Templates: path.resolve(__dirname, 'src/templates/')
  },
  extraBabelPlugins: [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
  proxy: {
    '/api': {
      target: 'http://218.2.247.130:18854/',
      pathRewrite: {'^/api' : ''}
    }
  }
};
