import path from "path";

const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");

module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  style: {
    sass: {
      loaderOptions: {
        /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
    },
  },
};
