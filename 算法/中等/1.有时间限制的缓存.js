/**
 * 编写一个类，它允许获取和设置键-值对，并且每个键都有一个 过期时间 。
 * 该类有三个公共方法：
 * set(key, value, duration) ：接收参数为整型键 key 、整型值 value 和以毫秒为单位的持续时间 duration 。一旦 duration 到期后，这个键就无法访问。如果相同的未过期键已经存在，该方法将返回 true ，否则返回 false 。如果该键已经存在，则它的值和持续时间都应该被覆盖。
 * get(key) ：如果存在一个未过期的键，它应该返回这个键相关的值。否则返回 -1 。
 * count() ：返回未过期键的总数。
 */
class TimeLimitedCache {
  constructor() {
    // 储存所有的键值对
    this.keys = {};
    this.timer = {};
  }

  set(key, value, duration) {
    // 如果不存在键值对，直接设置键值对
    if (Object.keys(this.keys).length === 0) {
      this.keys[key] = value;
      // 设置定时器超时清除键值对
      this.timer[key] = setTimeout(() => delete this.keys[key], duration);
      return false;
    } else {
      // 如果存在键值对，判断是否存在重复的键值对
      // 如果键值对存在,返回true,并充值持续时间
      if (this.keys[key]) {
        clearTimeout(this.timer[key]);
        this.keys[key] = value;
        this.timer[key] = setTimeout(() => delete this.keys[key], duration);
        return true;
      } else {
        // 如果键值对不存在,直接设置键值对
        this.keys[key] = value;
        this.timer[key] = setTimeout(() => delete this.keys[key], duration);
        return false;
      }
    }
  }

  get(key) {
    if (this.keys[key]) {
      return this.keys[key];
    } else {
      return -1;
    }
  }
  count() {
    // console.log(this.keys.length);
    return Object.keys(this.keys).length;
  }
}
const a = new TimeLimitedCache();

a.set(1, 42, 50);
a.set(1, 42, 100);
setTimeout(() => console.log(a.get(1)), 50);
setTimeout(() => console.log(a.count()), 90);
setTimeout(() => console.log(a.get(1)), 150);
// setTimeout(() => console.log(1), 1000);
// setTimeout(() => console.log(2), 2000);
// setTimeout(() => console.log(3), 3000);
