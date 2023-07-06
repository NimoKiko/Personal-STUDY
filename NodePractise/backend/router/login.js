const express = require("express");

const router = express.Router();

const jwt = require("jsonwebtoken");

const secretKey = require("../secretKey");

const db = require("./mysql/mysql");

const { log } = require("console");

/**
 * 登录接口
 * - 获取token
 */
router.post("/login/getToken", (req, res) => {
  const userInfo = req.body;
  // console.log(userInfo);

  let account = userInfo.account;
  let password = userInfo.password;

  let isExist = false;

  db.query(
    "select * from user where username=? and password=?",
    [account, password],
    (err, result) => {
      if (err) return log(err.message);
      if (result.length) {
        isExist = true;
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

module.exports = router;
