"use strict";
// 使用class关键字定义一个类
class Person {
    constructor() {
        // 实例属性 : 需要通过对象实例访问
        this.name = "jack";
    }
    // 定义方法(如果以static开头则方法为类方法/静态方法 可直接通过类调用)
    sayHello() {
        console.log("hello");
    }
}
// readonly 关键词可以让属性不可修改
// readonly name: string = "jack";
// 在属性前使用static关键词可以定义类属性
// 类属性(静态属性)：可以直接通过类访问
Person.age = 18;
const per = new Person();
per.name = "rose";
per.sayHello();
console.log(per.name);
console.log(Person.age);
