/**
 * 现给定一个值，返回该值的有效 JSON 字符串。
 * 你可以假设这个值只包括字符串、整数、数组、对象、布尔值和 null。
 * 返回的字符串不能包含额外的空格。键的返回顺序应该与 Object.keys() 的顺序相同。
 * 请你在不使用内置方法 JSON.stringify 的前提下解决这个问题。
 */
var jsonStringify = function (object) {
  let str = "";
  if (object instanceof Array) {
    for (let item of object) {
      if (typeof item !== "object") {
        str += `"${item}",`;
      } else if (item == null) {
        str += `${item},`;
      } else {
        str += `${jsonStringify(item)},`;
      }
    }
    str = str.slice(0, -1);
    str = `[${str}]`;
    return str;
  } else if (object instanceof Object) {
    for (let key in object) {
      if (object[key] instanceof Array) {
        str += `"${key}":${jsonStringify(object[key])},`;
      } else if (object[key] instanceof Object) {
        str += `"${key}":${jsonStringify(object[key])},`;
      } else if (typeof object[key] == "string") {
        str += `"${key}":"${object[key]}",`;
      } else {
        str += `"${key}":${object[key]},`;
      }
    }
    str = str.slice(0, -1);
    str = `{${str}}`;
    return str;
  } else if (typeof object == "string") {
    return `${object}`;
  } else {
    return object;
  }
};
// let object = { a: "str", b: -12, c: true, d: null };
// let object = { key: { a: 1, b: [{}, null, "Hello"] } };
let object = { a: "str", b: -12, c: true, d: null };

console.log(jsonStringify(object));
