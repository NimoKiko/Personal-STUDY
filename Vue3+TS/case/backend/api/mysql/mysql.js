const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1", // 主机ip
  user: "root", // 用户名
  password: "root", // 密码
  database: "vuepractise",
});

module.exports = db;
