// 函数柯里化
// 柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
// 柯里化的主要作用：
// 参数复用、提前返回和 延迟计算/运行

function setTitle(title){
  let pre = title;

  return function(content,path) {
    return `${pre}${content}${path}`
  }

}

let fun = setTitle("https://");

let res1 = fun("www.baidu.com","/index.html")

console.log(res1);


