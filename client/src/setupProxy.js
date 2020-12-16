import  { createProxyMiddleware } from'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://beta.zingmp3.vn',
      changeOrigin: true,
    })
  );
};