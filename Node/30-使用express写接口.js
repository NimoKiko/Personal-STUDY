const { log } = require("console");
const express = require("express");
const apiRouter = require("./30.1-apiRouter");

const app = express();
// 注册express.urlencoded()中间件，解析URL-encoded类型数据
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// 注册路由模块
app.use("/api", apiRouter);

app.listen(80, () => {
  log("192.168.1.128");
});
