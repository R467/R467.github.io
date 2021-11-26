const withPlugins = require('next-transpile-modules')(['next-compose-plugins']);
const optimizedImages = require('next-transpile-modules')(['next-optimized-images']);

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    optimizeImages: true,
    handleImages: ['jpg', 'png', 'svg'],
    optimizeImagesInDev: true,
    defaultImageLoader: 'responsive-loader',
  }],

  // your other plugins here

]);