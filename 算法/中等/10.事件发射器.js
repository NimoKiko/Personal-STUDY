/**
 * 设计一个 EventEmitter 类。这个接口与 Node.js 或 DOM 的 Event Target 接口相似，
 * 但有一些差异。EventEmitter 应该允许订阅事件和触发事件。
 * 你的 EventEmitter 类应该有以下两个方法：
 * subscribe -
 * 这个方法接收两个参数：一个作为字符串的事件名和一个回调函数。
 * 当事件被触发时，这个回调函数将被调用。 一个事件应该能够有多个监听器。
 * 当触发带有多个回调函数的事件时，应按照订阅的顺序依次调用每个回调函数。
 * 应返回一个结果数组。你可以假设传递给 subscribe 的回调函数都不是引用相同的。
 * subscribe 方法还应返回一个对象，其中包含一个 unsubscribe 方法，使用户可以取消订阅。
 * 当调用 unsubscribe 方法时，回调函数应该从订阅列表中删除，并返回 undefined。
 * emit -
 * 这个方法接收两个参数：一个作为字符串的事件名和一个可选的参数数组，这些参数将传递给回调函数。
 * 如果没有订阅给定事件的回调函数，则返回一个空数组。
 * 否则，按照它们被订阅的顺序返回所有回调函数调用的结果数组。
 */
class EventEmitter {
  constructor() {
    this.events = {};
  }
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
    console.log(this.events);
    return {
      unsubscribe: () => {
        let flag = callback;
        this.events[eventName] = this.events[eventName].filter((item) => {
          return item !== flag;
        });
      },
    };
  }

  emit(eventName, args = []) {
    // 定义结果数组
    let result = [];
    // 如果没有订阅给定事件的回调函数，则返回一个空数组。
    if (this.events[eventName] === undefined) return [];
    // 遍历所有回调函数，按顺序执行
    this.events[eventName].forEach((element) => {
      result.push(element(...args));
    });
    return result;
  }
}

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
sub1.unsubscribe(); // undefined
console.log(emitter.emit("firstEvent", [5]));
// emitter.emit("firstEvent", [5]);
