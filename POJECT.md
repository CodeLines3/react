
# 问题 DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
* 升级 
```
npm i webpack-dev-server@4.7
```
* 参考 https://github.com/facebook/create-react-app/pull/11862/files/2dff88610f9ad215349424d1769b88e0a0d2fa1d

# npm i mobx mobx-react react-router react-router-dom sass graphql graphql.macro antd antd-mobile axios dayjs @craco/craco rxjs babel-plugin-import
# npm install craco-sass-resources-loader --save-dev

# 移动端 npm i --save postcss-aspect-ratio-mini @jonny1994/postcss-px-to-viewport postcss-write-svg
* postcss-aspect-ratio-mini：主要用来处理固定宽高比；
* postcss-write-svg：主要用来处理1像素边框问题（该方法对圆角处理还未实现）；
* postcss-px-to-viewport：将px单位自动转换成viewport单位；

# postcss.config.js 无效 （Postcss 8）
* craco.config.ts 配置
```ts
module.exports = {
  style: {
    postcss: {
      loaderOptions: () => {
        return {
          postcssOptions: {
            ident: "postcss",
          }
        };
      }
    },
    // ...
  }
  // ...
}
```


# npm i react-app-rewired customize-cra -D
