/**
 * @param {number} millis
 * @return {Promise}
 * 请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。要求此函数可以解析任何值。
 */
async function sleep(millis) {
  return new Promise( res => {
    setTimeout( () => {
      res()
    }, millis)
  });
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100

// let pr = new Promise((resolve, reject) => {
//   // 生成一个1-5000的随机数
//   let num = Math.floor(Math.random() * 5000 + 1);
//   // 模拟异步请求
//   setTimeout(() => {
//     if (num < 2500) {
//       resolve({
//         code: 200,
//         data: "success",
//         num: num,
//       });
//     } else {
//       reject({
//         code: 500,
//         data: "error",
//         num: num,
//       });
//     }
//   }, num);
// });

// pr.then(
//   (res) => {
//     console.log(res);
//   },
//   (rej) => {
//     console.log(rej);
//   }
// );
