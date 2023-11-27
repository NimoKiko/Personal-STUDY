/**
 * 构造函数：constructor()
 *  - 构造函数会在创建对象时调用
 *  - 在实例方法中，this表示当前实例
 *  - 在构造函数中，this表示当前新建的对象
 *  - 可以通过this向新建的对象中添加属性
 */
class Dog {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(`${this.name},汪汪！`);
  }
}

const dog1 = new Dog("jack", 3);
const dog2 = new Dog("rose", 4);

dog1.bark();
