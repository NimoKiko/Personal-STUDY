const { log } = require("console");
/**
 * - 安装MySQL模块：npm i mysql
 * - 导入MySQL模块：const mysql =  require('mysql')
 * - 建立连接：
 *    const db = mysql.createPool({
 *      host:"", 主机地址
 *      user:"", 用户名
 *      password:"", 密码
 *      database:""  指定要操作哪个数据库
 * })
 */
// 1.导入MySQL模块
const mysql = require("mysql");
// 2.创建连接池，并配置
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "nodepractise",
});

// 检测连接是否成功
// db.query('SELECT 1', (err,res) => {
//   if(err) return log(err.message)
//   // 只要打印出了[RowDataPacket { '1' : 1 }]的结果，就证明数据库连接成功
//   log(res)
// })

//  查询数据
// db.query("select * from user",(err,res) => {
//   if(err) return log(err.message)
//   // 执行select语句，执行的结果是数组
//   log(res)
// })

// 插入数据
// 定义要插入的数据
// let user = { username: "su", password: "123456", status: 0 };
// // 待执行的sql语句，使用 ? 来表示占位符
// let sqlStr = "insert into user(username,password,status) values(?,?,?)";
// // 使用数组的形式依次为占位符指定具体的值
// db.query(sqlStr, [user.username, user.password, user.status], (err, res) => {
//   if (err) return log(err.message);

//   if(res.affectedRows == 1) {
//     log('插入成功')
//   }
// });

// 更新数据
// let user = { id: 5, username: "jun", password: "00000000" };

// let sqlStr = "update user set username=?,password=? where id=?";

// db.query(sqlStr, [user.username, user.password, user.id], (err, res) => {
//   if (err) return log(err.message);
//   if (res.affectedRows == 1) {
//     log("更新成功");
//   }
// });

// 更新数据的简便方法
// let user = { id: 5, username: "jun", password: "00000002" };

// let sqlStr = "update user set ? where id=?";

// db.query(sqlStr, [user, user.id], (err, res) => {
//   if (err) return log(err.message);
//   if (res.affectedRows == 1) {
//     log("更新成功");
//   }
// });

// 删除数据
// let sqlStr = "delete from user where id=?";

// db.query(sqlStr, 1, (err, res) => {
//   if (err) return log(err.message);

//   if (res.affectedRows == 1) {
//     log("删除成功");
//   }
// });

// 标记删除
let sqlStr = "update user set status=? where id=?";

db.query(sqlStr, [1, 3], (err, res) => {
  if (err) return log(err.message);

  if (res.affectedRows == 1) {
    log("更新成功");
  }
});
