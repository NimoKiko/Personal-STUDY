/**
 * 请你编写一个生成器函数，并返回一个可以生成 斐波那契数列 的生成器对象。
 * 斐波那契数列 的递推公式为 Xn = Xn-1 + Xn-2 。
 * 这个数列的前几个数字是 0, 1, 1, 2, 3, 5, 8, 13 。
 */

var fibGenerator = function* () {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
};

const gen = fibGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
