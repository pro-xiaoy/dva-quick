// https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development#configuring-the-proxy-manually
// https://github.com/chimurai/http-proxy-middleware

const createProxyMiddleware = require('http-proxy-middleware');
console.log('createProxyMiddleware+++++++', createProxyMiddleware)
module.exports = function(app) {
  console.log('appp++++++++', app)
  // app.use(
  //   '^/api',
  //   createProxyMiddleware({
  //     target: 'http://218.2.247.130:18854/',
  //     changeOrigin: true,
  //   })
  // );

  app.use(
    createProxyMiddleware('/api', {
      target: 'http://218.2.247.130:18854/',
      changeOrigin: true,
      logLevel: 'debug',
      pathRewrite: {'^/api': ''}
    })
  )


};
