/**
 *编写代码实现字符串方法 string.replicate(x) ，它将返回重复的字符串 x 次。
 *请尝试在不使用内置方法 string.repeat 的情况下实现它。
 */
String.prototype.replicate = function (times) {
  let str = "";
  for (let i = 0; i < times; i++) {
    str = str + this;
  }
};

let str = "hello";

str.replicate(2);
