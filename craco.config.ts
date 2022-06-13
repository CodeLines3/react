import path from "path";
const CracoAntdPlugin = require('craco-antd')

const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
} = require("@craco/craco");

module.exports = {
  style: {
    postcss: {
      loaderOptions: () => {
        return {
          postcssOptions: {
            ident: "postcss",
          },
        };
      },
    },
    sass: {
      loaderOptions: {
        /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */
        additionalData: `@import "~@/styles/index.scss";`,
      },
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
    },
  },
  plugins: [
    {plugin: CracoAntdPlugin },
  ],
  //配置代理解决跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:2828",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
