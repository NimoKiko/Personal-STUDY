/**
 * Async Await关键词
 *
 * Async 可以将一个普通函数变成异步函数，返回值是Promise对象
 *
 * Await 可以暂停异步函数的执行，等待Promise对象返回结果后再执行
 *
 */
// async function run() {
//   console.log("1");
//   // 随机生成1或者2
//   let num = Math.random() > 0.5 ? 1 : 2;
//   let two = await new Promise((resolve, reject) => {
//     if (num === 1) {
//       resolve("成功");
//     } else {
//       reject("失败");
//     }
//   });
//   console.log(two);
//   console.log("3");

//   return {
//     name: "lisa",
//     age: 18,
//   };
// }

// run().then((res) => {
//   console.log(res);
// });

function fun1() {
  console.log("111");
  setTimeout(() => {
    console.log("111");
  }, 6000);
}

function fun2() {
  console.log("222");
  setTimeout(() => {
    console.log("222");
  }, 4000);
}

function fun3() {
  console.log("333");
  setTimeout(() => {
    console.log("333");
  }, 2000);
}

fun1();
fun2();
fun3();
