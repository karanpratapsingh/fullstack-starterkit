/**
 * ENV Configuration
 * Make sure to configure your environment variables while in production.
 */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
