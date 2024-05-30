/**
 * 请你编写一个有关日期对象的方法，使得任何日期对象都可以调用 date.nextDay() 方法，
 * 然后返回调用日期对象的下一天，格式为 YYYY-MM-DD 。
 */
// 方法一：暴力法
// Date.prototype.nextDay = function () {
//   // console.log(this);
//   // 拆分获取当前的年月日
//   let yyyy = this.getFullYear();
//   let mm = this.getMonth() + 1;
//   let dd = this.getDate();
//   // 判断当前年份是闰年还是平年
//   if ((yyyy % 4 === 0 && yyyy % 100 !== 0) || yyyy % 400 === 0) {
//     // 闰年
//     if (
//       mm == 1 ||
//       mm == 3 ||
//       mm == 5 ||
//       mm == 7 ||
//       mm == 8 ||
//       mm == 10 ||
//       mm == 12
//     ) {
//       dd += 1;
//       if (dd > 31) {
//         dd = 1;
//         mm += 1;
//         if (mm > 12) {
//           yyyy += 1;
//           mm = 1;
//         }
//       }
//     } else {
//       if (mm == 2) {
//         dd += 1;
//         if (dd > 29) {
//           dd = 1;
//           mm += 1;
//         }
//       } else {
//         dd += 1;
//         if (dd > 30) {
//           dd = 1;
//           mm += 1;
//         }
//       }
//     }
//   } else {
//     // 平年
//     if (
//       mm == 1 ||
//       mm == 3 ||
//       mm == 5 ||
//       mm == 7 ||
//       mm == 8 ||
//       mm == 10 ||
//       mm == 12
//     ) {
//       dd += 1;
//       if (dd > 31) {
//         dd = 1;
//         mm += 1;
//         if (mm > 12) {
//           yyyy += 1;
//           mm = 1;
//         }
//       }
//     } else {
//       if (mm == 2) {
//         dd += 1;
//         if (dd > 28) {
//           dd = 1;
//           mm += 1;
//         }
//       } else {
//         dd += 1;
//         if (dd > 30) {
//           dd = 1;
//           mm += 1;
//         }
//       }
//     }
//   }
//   mm = mm < 10 ? "0" + mm : mm;
//   dd = dd < 10 ? "0" + dd : dd;
//   // console.log(`${yyyy}-${mm}-${dd}`);
//   return `${yyyy}-${mm}-${dd}`;
// };

// 方法二
Date.prototype.nextDay = function () {
  this.setDate(this.getDate() + 1);
  return this.toISOString().slice(0, 10);
};
const date = new Date("2013-2-28");

console.log(date.nextDay());
