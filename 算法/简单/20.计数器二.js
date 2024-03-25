/**
 * 请你写一个函数 createCounter。这个函数接收一个初始的整数值 init。并返回一个包含三个函数的对象。
 * 这三个函数是：
 * increment() 将当前值加 1 并返回。
 * decrement() 将当前值减 1 并返回。
 * reset() 将当前值设置为 init 并返回。
 */

var createCounter = function (init) {
  return new Counter(init);
};
class Counter {
  constructor(init) {
    this.init = init;
    this._init = init;
  }
  increment() {
    this.init += 1;
    return this.init;
  }
  decrement() {
    this.init -= 1;
    return this.init;
  }
  reset() {
    return (this.init = this._init);
  }
}
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
