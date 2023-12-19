/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 * 请你编写一个函数，检查给定的值是否是给定类或超类的实例。
 * 可以传递给函数的数据类型没有限制。例如，值或类可能是  undefined 。
 */

var checkIfInstanceOf = function (obj, classFunction){
  if (obj === null || obj === undefined || !(classFunction instanceof Function))
    return false;
  return Object(obj) instanceof classFunction;
}

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
let dog = new Dog("dog");
// checkIfInstanceOf(dog, Animal);
checkIfInstanceOf(5n, Object);
