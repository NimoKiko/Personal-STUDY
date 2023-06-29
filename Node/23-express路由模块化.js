const express = require("express");

const router = require("./23.1-router模块");

const app = express();

/**
 * app.use()函数的作用：注册全局中间件
 */
app.use("/api", router);


app.listen(80, () => {
  console.log("express server running at http://192.168.1.128");
});
