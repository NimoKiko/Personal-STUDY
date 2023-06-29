const fs = require("fs");
/** 
 * 使用fs文件系统的时候，会在终端当前文件位置开始拼接文件路径，容易出错
*/
// fs.readFile("./file/1.txt", "utf8", function (err, res) {
//   if (err) {
//     return console.log("读取失败");
//   }
//   return console.log('读取成功: '+ res);
// });

/**
 * 可以使用绝对路径来解决这个问题，但是代码的移植性很差，不利于后期维护
 */
// fs.readFile("C:\\Users\\quyixing\\Desktop\\mine\\Node\\file\\1.txt", "utf8", function (err, res) {
//     if (err) {
//       return console.log("读取失败");
//     }
//     return console.log('读取成功: '+ res);
//   });

/**
 * 可以使用—__dirname 表示当前文件所处目录
 * 
 */
console.log(__dirname);
  fs.readFile(__dirname+"/file/1.txt", "utf8", function (err, res) {
    if (err) {
      return console.log("读取失败");
    }
    return console.log('读取成功: '+ res);
  });
