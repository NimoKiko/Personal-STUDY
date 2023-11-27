"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter方法
         * setter方法
         *  - 这类型的方法称为属性的存取器
         */
        // getName() {
        //   console.log(this._name);
        // }
        // setName(value: string) {
        //   this._name = value;
        // }
        // getAge() {
        //   console.log(this._age);
        // }
        // setAge(value: number) {
        //   if (value >= 0) {
        //     this._age = value;
        //   }
        // }
        // TS中设置getter方法的方式
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person("jack", 18);
    /**
     * 现在属性是在对象中设置的，属性可以被任意修改
     *  - 属性可以任意修改就会导致对象中的数据非常不安全
     */
    // per._name = 'rose' //属性“_name”为私有属性，只能在类“Person”中访问。ts(2341)
    per.age = 20;
    console.log(per.age);
    /**
     * 一个创建类的语法糖
     *
     */
    class Test {
        // 在构造函数中声明public的写法和之前那种在构造函数上定义好属性再在构造函数内赋值的写法等价
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const test = new Test('july', 20);
    console.log(test);
})();
