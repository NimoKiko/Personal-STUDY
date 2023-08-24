/**
 * 代理模式
 *  - 为其他对象提供一种代理以控制对这个对象的访问
 *  - ES6中可以使用Proxy()对象来给对象添加代理
 *
 */
class Star {
  play() {
    console.log("演戏");
  }
}

class StarProxy {
  constructor() {
    this.superStar = new Star();
  }

  talk(price) {
    if (price >= 10000) {
      this.superStar.play();
    } else {
      throw new Error("价钱不合适");
    }
  }
}

let star = {
  workprice: 1000,
  name: "zhangsan",
};

// ES6语法 Proxy()
let proxy = new Proxy(star, {
  get(target, key) {
    console.log(target, key);

    return target[key];
  },
  set(target, key, newValue, receiver) {
    target[key] = newValue;
  },
});

proxy.name = "lisi";

console.log(proxy.name);
