"use strict";
// 1. 使用字面量进行类型声明
let a;
// 使用字面量声明的变量不可修改 类似const
// a = 11  //会报错
// | 表示或 此时的 b可以赋值为二者其一
let b;
// | 还可以连接数据类型 (联合类型)
// 此时的 c 可以赋值为 数字型 布尔值 字符型
let c;
// 2. any 表示可以赋值为任意类型
// 不建议使用
let d;
// 声明变量不指定类型则默认会设置为any
let e;
e = 10;
e = "string";
e = true;
// 3.unkonwn 未知类型
let f;
f = 12;
// a = f;  // 会报错 不能把unknown赋值给别的类型
// unknown 类型安全的any 不能直接赋值给别的变量
let g = 10;
if (typeof f === "number") {
    g = f;
}
// 也可以使用类型断言 as
// 相当于确认f 为 number类型
g = f;
g = f; //使用<type> 和使用 as效果一样
// 4. void 类型
// 可以设置函数没有返回值
function fn() { }
// 5. never 类型 永远没有返回值的函数
function fn2() {
    throw new Error("报错了");
}
