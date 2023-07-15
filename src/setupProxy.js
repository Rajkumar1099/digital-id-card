const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://id-card-3506b-default-rtdb.firebaseio.com/data',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};