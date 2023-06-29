const path = require("path")

const fpath = '/a/b/c/d/index.js'

// 获取文件的扩展名
const extname = path.extname(fpath);

console.log(extname);
