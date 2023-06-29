const { log } = require("console");
const express = require("express");
const apiRouter = require("./30.1-apiRouter");

const app = express();
// 注册express.urlencoded()中间件，解析URL-encoded类型数据
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * 使用CORS中间件处理跨域问题
 * 1.安装 ：npm i cors
 * 2.导入：require('cors')
 * 3.注册：app.use(cors())
 * tips：必须在路由前注册cors中间件
 */
const cors = require('cors')

app.use(cors())

// 注册路由模块
app.use("/api", apiRouter);

app.listen(80, () => {
  log("192.168.1.128");
});
