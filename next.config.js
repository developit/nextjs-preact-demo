const withPrefresh = require('@prefresh/next');
const preact = require('preact');

const config = {
  experimental: {
    modern: true,
  },

  webpack(config, { dev, isServer }) {
    const splitChunks = config.optimization && config.optimization.splitChunks
    if (splitChunks) {
      const cacheGroups = splitChunks.cacheGroups;
      const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
      if (cacheGroups.framework) {
        cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
          test: preactModules
        });
        cacheGroups.commons.name = 'framework';
      }
      else {
        cacheGroups.preact = {
          name: 'commons',
          chunks: 'all',
          test: preactModules
        };
      }
    }
    
    // Install webpack aliases:
    const aliases = config.resolve.alias || (config.resolve.alias = {});
    aliases.react = aliases['react-dom'] = 'preact/compat';

    if (dev) {
      if (isServer) {
        // Remove circular `__self` and `__source` props only meant for
        // development. See https://github.com/developit/nextjs-preact-demo/issues/25
        let oldVNodeHook = preact.options.vnode;
        preact.options.vnode = (vnode) => {
          const props = vnode.props;
          if (props != null) {
            if ('__self' in props) props.__self = null;
            if ('__source' in props) props.__source = null;
          }

          if (oldVNodeHook) {
            oldVNodeHook(vnode);
          }
        }
      } else {
        // inject Preact DevTools
        const entry = config.entry;
        config.entry = () => entry().then(entries => {
          entries['main.js'] = ['preact/debug'].concat(entries['main.js'] || []);
          return entries;
        });
      }
    }

    return config;
  }
};

module.exports = withPrefresh(config);
