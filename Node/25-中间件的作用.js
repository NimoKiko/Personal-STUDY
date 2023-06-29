const express = require("express");

const app = express();

// 定义一个最简单的中间件函数
const mw = function (req, res, next) {
  console.log("这是最简单的中间件函数");
  // 在req和res中挂载的值可以传递下去
  req.a = "i stored a word at here";
  // 把流转关系转交给下一个中间件或路由
  next();
};

app.use(mw);

app.get("/", (req, res) => {
  res.send(req.a);
});

app.listen(80, () => {
  console.log("express server running at http://192.168.1.128");
});
