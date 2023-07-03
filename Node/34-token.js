/**
 * 当前端认证请求不存在跨域问题时推荐使用Session身份认证机制。
 * 当前端认证请求需要跨域请求后端接口时，推荐使用JWT认证机制。
 *
 * - JWT(JSON Web Token)
 * 1. 组成部分：
 *  - Header(头部)
 *  - Payload(有效载荷)：真正的用户信息
 *  - Signature(签名)
 * 三者使用 '.' 分隔
 * 2. 客户端收到服务器返回的JWT之后，存储载locakStorage或者sessionStorage中。
 * 3. 客户端可以把 JWT 放在请求头的Authorization字段中
 *
 * 4. 安装JWT相关的包
 *  - npm i jsonwebtoken express-jwt
 */
const express = require("express");
const jwt = require("jsonwebtoken");
const { expressjwt: expressjwt } = require("express-jwt");
const cors = require("cors");

const app = express();
const secretKey = "nimokiko _ ^.^";
app
  .use(cors())
  .use(express.urlencoded({ extended: false }))
  //配置成功express-jwt就能把解析出来的用户信息挂载到req.auth属性上
  .use(
    expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({
      path: [/^\/api\//],
    })
  );
// app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/login\//] }));

/**
 * 登录接口
 * 在登陆成功之后，调用jwt.sign()生成JWT字符串。并通过token属性发送给客户端
 * 参数1：用户信息对象
 * 参数2：加密的密钥
 * 参数3：配置对象，可以配置当前token的有效期
 */
app.post("/api/login", (req, res) => {
  const userInfo = req.body;

  if (userInfo.username !== "admin" && userInfo.password !== "123") {
    return res.send({
      state: 400,
      msg: "登录失败",
    });
  } else {
    const token = jwt.sign({ username: userInfo.username }, secretKey, {
      expiresIn: "5s",
    });
    res.send({
      state: 200,
      msg: "登录成功",
      token: token,
    });
  }
});

app.get("/admin/getUser", (req, res) => {
  console.log(req.auth);
  res.send({
    state: 200,
    msg: "获取用户信息成功",
    data: req.auth,
  });
});

// 注册错误中间件捕捉因token过期或不合法造成的解析失败错误
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.send({
      state: 401,
      msg: "无效的token",
    });
  } else {
    res.send({
      state: 500,
      msg: "未知错误",
    });
  }
});

app.listen(80, () => {
  console.log("192.168.1.128");
});
