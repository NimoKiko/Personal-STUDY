/**
 * 请你编写一个函数，它接收一个其他的函数，并返回该函数的 柯里化 后的形式。
 * 柯里化 函数的定义是接受与原函数相同数量或更少数量的参数，
 * 并返回另一个 柯里化 后的函数或与原函数相同的值。
 * 实际上，当你调用原函数，如 sum(1,2,3) 时，它将调用 柯里化 函数的某个形式，
 * 如 csum(1)(2)(3)， csum(1)(2,3)， csum(1,2)(3)，或 csum(1,2,3) 。
 * 所有调用 柯里化 函数的方法都应该返回与原始函数相同的值。
 */
var curry = function (fn) {
  return function curried(...args0) {
    if (fn.length > args0.length) {
      return function (...args1) {
        return curried.apply(null, [...args0, ...args1]);
      };
    } else {
      return fn.apply(null, args0);
    }
  };
};
function sum(a, b) {
  return a + b;
}
const csum = curry(sum);
console.log(csum(1)(2));
