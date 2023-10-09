export {};
// 声明一个js对象
// 开发中不使用
let obj: object;

// {} 用来指定对象中可以包含哪些属性
// 在属性后加一个 ？ 表示可选属性
let obj2: { name: string; age?: number };

obj2 = {
  name: "gongjun",
  age: 19,
};
// [propName: string]: any 表示任意类型的属性
// 这种语法可以解决创建对象的时候，不用一一声明对象中该有什么属性
let obj3: { name: string; [propName: string]: any };
obj3 = {
  name: "gongjun",
  age: 18,
  gender: "male",
};

let fun1: (a: number, b: number) => number;

fun1 = function sum(x, y) {
  return x + y;
};

/**
 * 声明数组
 */
let StringArr: string[];
let NumberArr: number[];
// 以此类推

/**
 * 声明元组(固定长度的数组)
 */
let tuple1: [string, string];
tuple1 = ["1", "2"];

/**
 * enum 枚举
 */
enum Gender {
  Male = 0,
  Female = 1,
}

let enum1: { name: string; gender: Gender };

enum1 = {
  name: "zhangsan",
  gender: Gender.Male, //male
};

//类别别名
type myType = 1 | 2 | 3 | 4 | 5;

let a: myType;
let b: myType;
let c: myType;
