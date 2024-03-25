/**
 * 请你编写一个函数 argumentsLength，返回传递给该函数的参数数量。
 */
var argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength(1, 2, 3));
