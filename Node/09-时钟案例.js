const fs = require("fs");
const path = require("path");

const regStyle = /<style>[\s\S]*<\/style>/;

const regScript = /<script>[\s\S]*<\/script>/;

// 抽取CSS文件并写入时钟案例.css文件
function reolveCSS(htmlStr) {
  // 1.使用正则提取html中<style></style>中间的元素
  const r1 = regStyle.exec(htmlStr);
  // 2.将提取出来的字符串进一步处理
  const newCSS = r1[0].replace("<style>", "").replace("</style>", "");
  // 3.将提取出来的css写入css文件中
  fs.writeFile("./案例/01-时钟案例/时钟案例.css", newCSS, function (err) {
    if (err) {
      return console.log("写入失败：" + err.message);
    }
    console.log("success！");
  });
}
// 抽取JS文件并写入时钟案例.js文件
function reolveJS(htmlStr) {
  // 1.使用正则提取html中<style></style>中间的元素
  const r1 = regScript.exec(htmlStr);
  // 2.将提取出来的字符串进一步处理
  const newJS = r1[0].replace("<script>", "").replace("</script>", "");
  // 3.将提取出来的css写入css文件中
  fs.writeFile("./案例/01-时钟案例/时钟案例.js", newJS, function (err) {
    if (err) {
      return console.log("写入失败：" + err.message);
    }
    console.log("success！");
  });
}
// 抽取HTML文件并将CSS和JS替换为外联样式和外部JS文件
function resolveHTML(htmlStr) {
  // 1.将HTML文件中的CSS样式和JS代码换成外联样式引入
  const newHTML = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./时钟案例.css">')
    .replace(regScript, '<script src="./时钟案例.js"></script>');
  // 2.写入HTML文件中去
  fs.writeFile(path.join(__dirname,'./案例/01-时钟案例/时钟案例.html'),newHTML,function(err){
    if(err) {
      return console.log("写入失败！："+ err.message);
    }
    console.log("success!");
  })
}

fs.readFile(
  path.join(__dirname, "./案例/01-时钟案例/01-时钟案例.html"),
  "utf8",
  function (err, res) {
    if (err) {
      return console.log("读取文件失败：" + err.message);
    }
    reolveCSS(res);
    reolveJS(res);
    resolveHTML(res);
  }
);
