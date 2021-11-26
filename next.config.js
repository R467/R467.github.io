const withPlugins = require('next-transpile-modules')(['next-compose-plugins']);
const optimizedImages = require('next-transpile-modules')(['next-optimized-images']);

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    optimizeImages: true,
    handleImages: ['jpg', 'png', 'svg'],
    optimizeImagesInDev: true,
    defaultImageLoader: 'responsive-loader',
    responsive: {
      adapter: require('next-transpile-modules')(['responsive-loader/sharp'])
    }
  }],

  // your other plugins here

]);