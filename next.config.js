const withCSS = require("@zeit/next-css");
const path = require("path");
/* Without CSS Modules, with PostCSS */
// module.exports = withCSS();

/* With CSS Modules */
// module.exports = withCSS({ cssModules: true })

/* With additional configuration on top of CSS Modules */
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  },
  webpack: function(config) {
    config.resolve.modules.push(path.resolve(__dirname, "/util"));
    return config;
  }
});
