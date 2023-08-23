/**
 * 单例模式
 *  - 一个类只有一个实例，创建再多都是同一个实例
 *  - 共享内存地址
 *
 */
// ES5的方式使用单例模式(闭包)
let Single = (function () {
  let instance;

  function User(name, age) {
    this.name = name;
    this.age = age;
  }

  return function (name, age) {
    if (!instance) {
      // 创建实例
      instance = new User(name, age);
    }
    return instance;
  };
})();

// ES6语法下的单例模式
class Singleton {
  constructor(name, age) {
    // 判断这个类上是否存在instance属性(第一次判断总是没有的，会走下方的判断内容，给属性赋值)
    // 第二次再执行的时候，已经存在instance属性，不会再进行赋值，达到单例的目标
    if (!Singleton.instance) {
      this.name = name;
      this.age = age;
      // 为这个类挂载instance属性，赋值为保存了信息的this
      Singleton.instance = this;
    }

    return Singleton.instance;
  }
}

// 无论创建几个实例，总是第一次创建的实例对象
console.log(new Singleton("ab", 18) === new Singleton("bd", 20));
let a  = new Singleton('asbdua',1000)
console.log(Singleton);
