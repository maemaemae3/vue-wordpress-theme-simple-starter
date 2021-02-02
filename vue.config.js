const SETTINGS = require( './settings');

const webpackPlugins = [];
if (process.env.NODE_ENV === 'development') {
  webpackPlugins.push(require('./webpack/plugins/browser-sync'));
}

module.exports = {
  css: {
    // extract compiled css to styles.css in dist
    extract: {
      filename: 'styles.css',
      chunkFilename: 'styles.css',
    },
  },
  transpileDependencies: ['vuetify'],
  // tell webpack where the output directory is
  publicPath: `/wp-content/themes/${SETTINGS.THEME_DIRECTORY_NAME}/dist/`,
  // disable index generation
  // https://cli.vuejs.org/guide/html-and-static-assets.html#disable-index-generation
  chainWebpack: (config) => {
    config.plugins.delete('html');
    config.plugins.delete('prefetch');
    config.plugins.delete('preload');
  },
  // disable generating source map
  productionSourceMap: false,
  configureWebpack: {
    output: {
      filename: `scripts/[name].js`,
      chunkFilename: `scripts/[name].js`,
    },
    optimization: {
      splitChunks: false
    },
    plugins: webpackPlugins,
  },
}
