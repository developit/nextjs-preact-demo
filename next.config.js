const withPrefresh = require('@prefresh/next');
const preact = require('preact');
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  experimental: {
    modern: true,
  },
});
