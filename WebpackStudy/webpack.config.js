// 引入一个包
const path = require("path");
// webpack中的配置信息写在此处
module.exports = {
  // 入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 打包后文件的名字
    filename:'boundle.js'
  },
  // 指定打包时使用的模块
  module:{
    // 指定加载的规则
    rules:[
      {
        // test指定的是规则生效的文件
        test:/\.ts$/,
        // 要使用的loader
        use:'ts-loader',
        // 要排除的文件
        exclude:/node-modules/
      }
    ]
  }
};
