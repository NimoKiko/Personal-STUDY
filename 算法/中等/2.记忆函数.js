/**
 * 请你编写一个函数，它接收另一个函数作为输入，并返回该函数的 记忆化 后的结果。
 * 记忆函数 是一个对于相同的输入永远不会被调用两次的函数。相反，它将返回一个缓存值。
 * 你可以假设有 3 个可能的输入函数：sum 、fib 和 factorial 。
 * sum 接收两个整型参数 a 和 b ，并返回 a + b 。
 * fib 接收一个整型参数 n ，如果 n <= 1 则返回 1，否则返回 fib (n - 1) + fib (n - 2)。
 * factorial 接收一个整型参数 n ，如果 n <= 1 则返回  1 ，否则返回 factorial(n - 1) * n 。
 */
function memoize(fn) {
  const map = new Map();
  return function (...args) {
    let item = args.join(",");
    if (!map.has(item)) {
      map.set(item, fn.apply(this, args));
    }
    return map.get(item);
  };
}

var cnt = 0;
const fn = (n) => {
  if (n <= 1) {
    return 1;
  } else {
    return fn(n - 1) * n;
  }
};

const memoFn = memoize(fn);
console.log(memoFn(2)); // 3
// console.log(memoFn(3)); // 3
// console.log(memoFn(2)); // 2
// console.log(cnt);
