"use strict";
/**
 * 抽象类
 *  - 以abstract开头的类是抽象类
 *  - 抽象类不能创建对象，专门被用来被继承的类
 *  - 抽象类中可以添加抽象方法
 */
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        say() {
            console.log("汪汪汪！");
        }
    }
    class Cat extends Animal {
        say() {
            console.log('喵喵喵！');
        }
    }
    const dog = new Dog("jack");
    dog.say();
})();
