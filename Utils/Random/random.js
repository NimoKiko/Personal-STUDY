const randomColor = function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};
// 获取容器
let container = document.querySelector(".container");

// 设置定时器
// let timer = setInterval(() => {
//   container.style.backgroundColor = randomColor();
// }, 100);
