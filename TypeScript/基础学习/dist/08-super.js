"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        say() {
            console.log("动物在叫~");
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类中写了构造函数，在子类的构造函数中必须对父类进行调用
            super(name);
            this.age = age;
        }
        // super表示当前类的父类
        say() {
            super.say();
        }
    }
    const dog = new Dog("jack", 3);
    dog.say();
})();
