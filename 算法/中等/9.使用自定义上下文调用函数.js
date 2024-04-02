/**
 * 增强所有函数，使其具有 callPolyfill 方法。该方法接受一个对象 obj 作为第一个参数，
 * 以及任意数量的附加参数。obj 成为函数的 this 上下文。附加参数将传递给该函数（即 callPolyfill 方法所属的函数）。
 * 例如，如果有以下函数：
 * function tax(price, taxRate) {
 *   const totalCost = price * (1 + taxRate);
 *   console.log(`The cost of ${this.item} is ${totalCost}`);
 * }
 * 调用 tax(10, 0.1) 将输出 "The cost of undefined is 11" 。
 * 这是因为 this 上下文未定义。
 * 然而，调用 tax.callPolyfill({item: "salad"}, 10, 0.1) 将输出 "The cost of salad is 11" 。
 * this 上下文被正确设置，函数输出了适当的结果。
 * 请在不使用内置的 Function.call 方法的情况下解决这个问题。
 */
Function.prototype.callPolyfill = function (context, ...args) {
  let key = Symbol();
  context[key] = this;
  let result = context[key](...args);
  delete context[key];
  return result;
};

function keys() {
  return Object.keys(this);
}
let obj = {
  x: 1,
  y: 2,
};
console.log(keys.callPolyfill(obj));
