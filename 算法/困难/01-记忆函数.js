/**
 * 现给定一个函数 fn ，返回该函数的一个 记忆化 版本。
 * 一个 记忆化 的函数是一个函数，它不会被相同的输入调用两次。而是会返回一个缓存的值。
 * 函数 fn 可以是任何函数，对它所接受的值类型没有任何限制。
 * 如果两个输入值在 JavaScript 中使用 === 运算符比较时相等，则它们被视为相同。
 */
function memoize(fn) {
  let map = new Map();
  let paramsMap = new Map();
  return function (...args) {
    let item;
    // 判断参数是什么类型
    if (typeof args[0] === "object") {
      // 如果是Object类型
      let key = JSON.stringify(args[0]);
      if (!paramsMap.has(key)) {
        map.set(key, fn.apply(this, args));
        paramsMap.set(key, args[0]);
        return map.get(key);
      }
      // console.log(args[0] === paramsMap.get(key));
      if (args[0] === paramsMap.get(key)) {
        return map.get(key);
      } else {
        map.set(key, fn.apply(this, args));
        paramsMap.set(key, args[0]);
        return map.get(key);
      }
    } else {
      // 如果是基本类型
      item = args.join(",");
      if (!map.has(item) && !(args === paramsMap.get(item))) {
        map.set(item, fn.apply(this, args));
      }
    }

    return map.get(item);
  };
}

let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return a + b;
// });
// memoizedFn(2, 3); // 5
// memoizedFn(2, 3); // 5

const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return { ...a, ...b };
});
console.log(memoizedFn({}, {}));
console.log(memoizedFn({}, {}));
// const memoizedFn = memoize(function (a, b) {
//   callCount += 1;
//   return { ...a, ...b };
// });
// const o = {};
// console.log(memoizedFn(o, o));
// console.log(memoizedFn(o, o));
// console.log(memoizedFn(o, o));
console.log(callCount); // 1
