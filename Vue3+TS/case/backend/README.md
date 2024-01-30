# 使用 Node 创建后端服务器

## 1. 导入相关的包

将 package.json 文件放入根目录下

```json
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "01-node.js",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-jwt": "^8.4.1",
    "express-session": "^1.17.3",
    "jsonwebtoken": "^9.0.0",
    "moment": "^2.29.4",
    "mysql": "^2.18.1"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "nemo",
  "license": "ISC"
}
```

使用命令：

```
npm install 安装上述所用的包
```

## 2. 创建 app.js 文件

```js
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
// app 注册中间件
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

// 导入自定义接口模块
const login = require("./api/login");
app.use("/api", login);

// 启动服务器
app.listen(80, () => {
  console.log("192.168.1.128");
});
```

## 3. 连接 mysql

根目录下创建 api/mysql/mysql.js 文件

**Tips：创建 api 文件夹是为了统一管理自定义 api 模块**

```js
// 导入mysql
const mysql = require("mysql");
// 创建db
const db = mysql.createPool({
  host: "127.0.0.1", // 主机ip
  user: "root", // 用户名
  password: "root", // 密码
  database: "vuepractise",
});
// 导出db
module.exports = db;
```

## 4. 创建自定义接口模块(以 login 接口模块为例)

创建 api/login.js 文件

```js
// 导入express 创建服务器
const express = require("express");
// 创建 router 路由器
const router = express.Router();
// 导入jwt 为了生成token
const jwt = require("jsonwebtoken");
// 导入密钥
const secretKey = require("../secretKey");
// 导入数据库
const db = require("./mysql/mysql");

/**
 * 登录接口
 */
router.post("/login/getToken", (req, res) => {
  const userInfo = req.body;
  // console.log(userInfo);

  let account = userInfo.account;
  let password = userInfo.password;

  let isExist = false;
  // 操作数据库
  db.query(
    "select * from user where username=? and password=?",
    [account, password],
    (err, result) => {
      if (err) return log(err.message);
      if (result.length) {
        isExist = true;
        // 创建token，设置有效期为 1 小时
        const token = jwt.sign({ username: account }, secretKey, {
          expiresIn: "1h",
        });
        return res.send({
          state: 1,
          msg: "登录成功",
          token: token,
        });
      } else {
        return res.send({
          state: 0,
          msg: "账号密码错误",
        });
      }
    }
  );
});
// 导出router
module.exports = router;
```

自定义模块创建完后需要在 app.js 文件中导入才能使用

```js
// 导入自定义接口模块
const login = require("./api/login");
app.use("/api", login);
```
