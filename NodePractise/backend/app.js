// 导入express
const express = require("express");
// 导入cors
const cors = require("cors");
// 导入jwt
const jwt = require("jsonwebtoken");
// 导入express-JWT
const { expressjwt: expressjwt } = require("express-jwt");
// 导入MySQL
const mysql = require("mysql");
// 导入打印模块
const { log } = require("console");
// 创建密钥
const secretKey = require("./secretKey");
// 创建express服务器
const app = express();

// 挂载中间件
app
  .use(cors())
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(
    expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({
      path: [/^\/api\/login\//],
    })
  );

// 导入login接口模块
const login = require("./router/login");
app.use("/api", login);

// 导入user接口模块
const user = require("./router/user");
app.use("/api", user);

// 导入work接口模块
const work = require('./router/work')
app.use("/api", work);

// 导入message接口模块
const message = require('./router/message')
app.use("/api", message);

// 错误捕捉
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.send({
      state: 401,
      msg: err,
    });
  } else {
    res.send({
      state: 500,
      msg: "未知错误",
    });
  }
  next();
});

// 启动服务器
app.listen(80, () => {
  log("192.168.1.128");
});
