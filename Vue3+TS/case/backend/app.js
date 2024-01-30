// 导入express 创建服务
const express = require("express");
// 导入cors 解决跨域问题
const cors = require("cors");
// 导入express-jwt 解决token问题
const { expressjwt: expressjwt } = require("express-jwt");
// 导入密钥
const secretKey = require("./secretKey");

// 创建服务
const app = express();

app
  .use(cors()) // 解决跨域
  .use(express.urlencoded({ extended: false })) // 解析URL-encoded类型数据
  .use(express.json()) // 解析JSON类型数据
  .use(
    // 解决token问题
    expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({
      path: [/^\/api\/login\//],
    })
  );

// 导入login接口模块
const login = require("./api/login");
app.use("/api", login);
// 导入user接口模块
const user = require("./api/user");
app.use("/api", user);

// 启动服务器
app.listen(80, () => {
  console.log("192.168.1.128");
});
