/**
 * 构造器模式：
 *  - 抽象了每个对象中共有的属性
 *  - 当一个类的构造函数参数大于4个，且有的参数可选，有些参数需要设置，可以考虑使用
 *  - 缺点：
 *    如果在构造函数中创建方法，每次创建实例的时候都会在内存中开辟空间创建这个方法，造成冗余。
 *    但是使用class的方式创建类可以解决这个问题，在类中创建的方法是挂在原型上的。
 */
class Hero {
  constructor(name, level, scope, type) {
    this.name = name;
    this.level = level;
    this.scope = scope;
    this.type = type;
  }
}

const qingji = new Hero("清姬", "sr", "群体", "控制");
const fuguqingji = new Hero("缚骨清姬", "sp", "单体", "输出");
const xuzuozhinan = new Hero("须佐之男", "ssr", "单体", "输出");
