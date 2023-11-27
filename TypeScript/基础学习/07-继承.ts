/**
 *继承：
  - 通过继承可以将多个类中的共有代码写在一个父类中
  - 如果希望子类中添加父类没有的属性和方法，直接加就行
  - 子类可以重写父类中的方法
 */
(function () {
  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    say(){
      console.log('动物叫');
      
    }
  }
  // extends 关键词
  // 表示 Dog继承Animal类
  // 使用继承后，子类拥有父类所有的方法和属性
  class Dog extends Animal {

    say() {
      console.log("汪汪汪！");
    }
  }
  class Cat extends Animal {
    say() {
      console.log("喵喵喵！");
    }
  }

  const dog = new Dog("jack", 3);
  const cat = new Cat("rose", 2);

  dog.say();
  cat.say();
})();
