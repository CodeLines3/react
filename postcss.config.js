
module.exports = {
  plugins: {
    'postcss-aspect-ratio-mini': {}, // 主要用来处理元素容器宽高比
    'postcss-write-svg': { utf8: false }, // 用来画1像素线
    '@jonny1994/postcss-px-to-viewport': {
      unitToConvert: "px",              // 默认值`px`，需要转换的单位
      viewportUnit: "vw",               // 指定需要转换成视窗单位
      fontViewportUnit: "vw",           // 字体使用的视窗单位
      landscapeUnit: "vw",              // 横屏时使用的单位
      viewportWidth: 750,              // 视窗的宽度,对应设计稿宽度 750 1920
      // viewportHeight: 1334,          // 视窗的高度, 根据375设备的宽度来指定，一般是667，也可不配置
      landscapeWidth: 1134,             // 横屏时使用的视窗宽度
      propList: ["*"],                  // 转化为vw的属性列表
      selectorBlaskList: [".ignore-"],  // 忽略转换为视窗单位的类
      exclude: [],                      // 忽略某些文件夹下的文件或特定文件
      unitPrecision: 2,                 // 转化精度，指定`px`转换为视窗单位值的小数位数
      minPixelValue: 1,                 // 小于或等于`1px`时不转换为视窗单位
      replace: true,                    // 是否直接更换属性值而不添加备用属性
      mediaQuery: false,                // 允许在媒体查询中转换`px`
      landscape: false,                 // 是否添加根据landscapeWidth生成的 @media (orientation: landscape)
    },
    // autoprefixer: {}
  }
};
