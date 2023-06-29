/**
 * 中间件：
 *
 */
const express = require("express");

const app = express();

// 定义一个最简单的中间件函数
const mw1 = function (req, res, next) {
  console.log("这是最简单的中间件函数1");
  // 把流转关系转交给下一个中间件或路由
  next();
};
const mw2 = function (req, res, next) {
  console.log("这是最简单的中间件函数2");
  // 把流转关系转交给下一个中间件或路由
  next();
};
const mw3 = function (req, res, next) {
  console.log("这是最简单的中间件函数3");
  // 把流转关系转交给下一个中间件或路由
  next();
};

// 将mw注册为全局生效的中间件
// 多个中间件按顺序执行
app.use(mw1).use(mw2).use(mw3);

app.get("/", (req, res) => {
  res.send("yes");
});

// 定义全局中间件的简化形式
app.use((req, res, next) => {
  console.log("这是简化后的中间件函数");
  next();
});

app.listen(80, () => {
  console.log("express server running at http://192.168.1.128");
});
