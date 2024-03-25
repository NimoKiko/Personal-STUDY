/**
 * 方法一：使用for循环
 * @param {*} functions
 * @returns
 */
// var compose = function (functions) {
//   return function (x) {
//     for (let i = functions.length - 1; i >= 0; i--) {
//       x = functions[i](x);
//     }
//     return x;
//   };
// };

// const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
// console.log(fn(4));

/**
 * 方法二： 使用reduceRight
 *
 */
var compose = function (functions) {
  return function (x) {
    return functions.reduceRight((target, fn) => fn(target), x);
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn(4));
