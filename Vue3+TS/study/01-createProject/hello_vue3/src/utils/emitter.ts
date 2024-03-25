// 引入mitt
import mitt from "mitt";
// 调用mitt,emitter能绑定事件、触发事件、解绑事件
const emitter = mitt();

// // 绑定事件
// emitter.on("test1", () => {
//   console.log("test1事件触发了");
// });
// emitter.on("test2", () => {
//   console.log("test2事件触发了");
// });

// // 触发事件
// setInterval(() => {
//   emitter.emit("test1");
//   emitter.emit("test2");
// }, 1000);

// // 解绑事件
// setTimeout(() => {
//   // emitter.off("test1");
//   emitter.all.clear();
// }, 3000);

// 导出emitter
export default emitter;
