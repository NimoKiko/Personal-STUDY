/**
 * 给定一个函数 fn ，它返回一个新的函数，返回的函数与原始函数完全相同，只不过它确保 fn 最多被调用一次。
 * 第一次调用返回的函数时，它应该返回与 fn 相同的结果。
 * 第一次后的每次调用，它应该返回 undefined 。
 */
var once = function (fn) {
  return function (...args) {
    if (fn) {
      const res = fn.apply(this, args);
      fn = null;
      return res;
    }
  };
};

const fn = function (a, b, c) {
  return a * b * c;
};
const onceFn = once(fn);

console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 4)); // 24
