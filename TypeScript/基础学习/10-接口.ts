/**
 * 接口：
 *  - 用来定义一个类的结构
 *  - 用来定义类中应该包含哪些结构和方法
 *  - 接口可以在定义类的时候限制类的结构
 *  - 接口中的所有属性都不能有实际值
 *  - 接口中只定义对象不考虑实际值
 *  - 接口中的所有方法都是抽象方法
 */
(function () {
  interface myInterface {
    name: string;
    age: number;

    say(): void;
  }

  class MyClass implements myInterface{
    name: string;
    age: number;

    constructor(name:string,age: number){
      this.name = name;
      this.age = age;
    }
    say(): void {
      throw new Error("Method not implemented.");
    }

  }
})();
