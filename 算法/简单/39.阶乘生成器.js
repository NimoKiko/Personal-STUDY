/**
 * 编写一个生成器函数，该函数以一个整数 n 作为参数
 * 并返回一个生成器对象，该生成器对象可以生成 阶乘序列 。
 * 阶乘序列 的定义如下：n! = n * (n-1) * (n-2) * ... * 2 * 1 。
 * 0 的阶乘被定义为 1。
 */
function* factorial(n) {
  if (n == 0) yield 1;
  let init = 1;
  for (let i = 1; i <= n; i++) {
    init = i * init;
    yield init;
  }
}
const gen = factorial(5);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
