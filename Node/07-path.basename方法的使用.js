const path = require("path")

const fpath = '/a/b/c/d/index.js'

// 获取文件的名字
const fullName1 = path.basename(fpath);

console.log(fullName1);

// 获取文件的名字(不带扩展名)
const fullName2 = path.basename(fpath,".js");

console.log(fullName2);