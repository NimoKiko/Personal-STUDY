// 引入一个包
const path = require("path");
// 引入html-webpack-plugin
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 引入clean插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// webpack中的配置信息写在此处
module.exports = {
  mode: "development",
  // 入口文件
  entry: "./src/index.ts",
  // 指定打包文件所在目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, "dist"),
    // 打包后文件的名字
    filename: "boundle.js",
    // 告诉webpack不使用箭头函数
    // environment: {
    //   arrowFunction: false,
    // },
  },
  // 指定打包时使用的模块
  module: {
    // 指定加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: "88",
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    // 使用corejs的方式 "usage" 表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        // 要排除的文件
        exclude: /node-modules/,
      },
      // 设置less文件的处理
      {
        test: /\.less$/,
        // 从下到上执行
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title:'自定义title',
      template: "./src/index.html",
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
  },
};
