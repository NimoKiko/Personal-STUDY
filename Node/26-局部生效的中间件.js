const express = require("express");

const app = express();

const mw = (req, res, next) => {
  req.word = "this is a middleware function";
  next();
};
const mw1 = (req, res, next) => {
  console.log("this is the first middleware function");
  next();
};
const mw2 = (req, res, next) => {
  console.log("this is the second middleware function");
  next();
};

// 局部注册中间件函数，只在注册过的路由中执行中间件函数
app.get("/", mw, (req, res) => {
  res.send(req.word);
});
// 没有注册中间件函数，路由不会执行中间件函数
app.post("/", (req, res) => {
  res.send(req.word);
});
// 多个局部中间件定义可用数组写入
app.get("/use", [mw1, mw2], (req, res) => {
  res.send('okk')
});

app.listen(80, () => {
  console.log("192.168.1.128");
});
