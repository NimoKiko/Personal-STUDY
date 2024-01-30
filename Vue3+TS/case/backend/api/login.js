// 导入express
const express = require("express");
// 导入router
const router = express.Router();
// 导入jwt
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

  console.log(userInfo);

  let username = userInfo.username;
  let password = userInfo.password;

  let isExist = false;

  db.query(
    "select * from user where username=? and password=?",
    [username, password],
    (err, result) => {
      if (err) return log(err.message);
      if (result.length) {
        isExist = true;
        const token = jwt.sign({ username: username }, secretKey, {
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

/**
 * 获取用户信息接口
 */
router.get("/user/info", (req, res) => {
  // 发送用户信息
  res.send(req.auth);
});

module.exports = router;
