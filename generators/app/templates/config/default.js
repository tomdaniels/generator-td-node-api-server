const defer = require('config/defer').deferConfig;

module.exports = {
  PORT: process.env.PORT || 3000,
  SSL_PORT: process.env.SSL_PORT || 4430,
  NO_CDN_API_ENDPOINT: process.env.NO_CDN_API_ENDPOINT || '',

  LOG_LEVEL: process.env.LOG_LEVEL || 'silly',

  DISABLE_ALL_CACHES: process.env.DISABLE_ALL_CACHES || false,
  ENABLE_ETAG: process.env.ENABLE_ETAG || true,

  SERVER_TIMING: process.env.SERVER_TIMING || true,

  isProduction: defer(() => process.env.NODE_ENV === 'production'),
  isDevelopment: defer(
    () => !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  ),
  isLocal: defer(() => process.env.NODE_ENV === 'local'),
};
