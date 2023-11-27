/**
 * 抽象类
 *  - 以abstract开头的类是抽象类
 *  - 抽象类不能创建对象，专门被用来被继承的类
 *  - 抽象类中可以添加抽象方法
 */
(function () {
  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // 抽象方法使用abstract开头，没有方法体，且子类必须对抽象方法进行重写
    abstract say(): void;
  }

  class Dog extends Animal {
    say(): void {
      console.log("汪汪汪！");
    }
  }

  class Cat extends Animal{
    say(): void {
      console.log('喵喵喵！');
      
    }
  }

  const dog = new Dog("jack");

  dog.say();
})();
