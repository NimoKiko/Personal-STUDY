const mysql = require("mysql");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "nodepractise",
});

db.query("SELECT 1", (err, res) => {
  if (err) return log(err.message);
  // 只要打印出了[RowDataPacket { '1' : 1 }]的结果，就证明数据库连接成功
  log(res);
});

module.exports = db;
