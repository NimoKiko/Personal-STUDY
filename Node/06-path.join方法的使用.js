// 导入path路径模块
const path = require("path")
const fs = require("fs")

let str = path.join('/a',"/b/c","../","/d","./e");
// console.log(str);

fs.readFile(path.join(__dirname,"/file/1.txt"),"utf8",function(err,res) {
    if (err) {
        return console.log("读取失败");
      }
      return console.log('读取成功: '+ res);
})
