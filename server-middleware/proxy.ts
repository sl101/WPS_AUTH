import { IncomingMessage, ServerResponse } from 'http';
import { createProxyMiddleware, Options, RequestHandler } from 'http-proxy-middleware';

const proxyOptions: Options = {
  target: 'https://sat7.faulio.com/api/v1',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/',
  },
};

const proxyMiddleware: RequestHandler<IncomingMessage, ServerResponse> = (req, res, next) => {
  createProxyMiddleware(proxyOptions)(req, res, next);
};

export default {
  path: '/api',
  handler: proxyMiddleware,
};