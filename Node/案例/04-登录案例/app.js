// 导入express
const express = require("express");
// 导入cors:处理跨域
const cors = require("cors");
// 导入session
const session = require("express-session");
// 导入路由模块
const router = require("./router");

// 创建express服务器
const app = express();
// 注册中间件
app
  .use(
    session({
      secret: "sessiontest",
      resave: false,
      saveUninitialized: true,
    })
  )
  .use("/", express.static("./pages"))
  .use(cors()) // 处理跨域
  .use(express.urlencoded({ extended: false })) //处理urlencoded型数据
  .use("/api", router);

// 启动服务器
app.listen(80, () => {
  console.log("192.168.1.128");
});
