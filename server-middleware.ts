import { createProxyMiddleware } from 'http-proxy-middleware';

export default {
  path: '/api',
  handler: (req: any, res: any, next: any) => {
    createProxyMiddleware({
      target: 'https://sat7.faulio.com/api/v1',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    })(req, res, next);
  },
};