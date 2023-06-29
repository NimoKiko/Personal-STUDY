/**
 * 1.格式化时间的传统做法
 */
let exp = require('./19.1-格式化时间传统方法')

console.log( exp.getDate());

/**
 * 2.格式化时间的和高级做法
 */
// 1.安装moment包：执行命令 npm i moment
// 2.导入需要的包
const moment = require('moment')
// 3.调用moment()方法
const dt = moment().format('YYYY-MM-DD HH:mm:ss')

console.log(dt);



