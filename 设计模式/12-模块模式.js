/**
 * 模块模式
 *  - 最初是为类提供私有和公有封装的一种方法
 *  -
 */
// 闭包实现私有变量
const obj = (function () {
  var count = 0;
  return {
    increase() {
      return ++count;
    },
    decrease() {
      return --count;
    },
    get() {
      return count;
    },
  };
})();

console.log(obj.get());



