import { ref, reactive } from "vue";
import { customRef } from "vue";

export default function(initValue:string,delay:number=1000) {
  initValue = initValue;
  let timer:number
  // track:跟踪  trigger:触发
  let msg = customRef((track, trigger) => {
    return {
      // msg被读取时调用
      get() {
        track(); // 告诉vue 数据很重要，需要对msg持续关注，一旦数据变化就更新
        return initValue;
      },
      // msg被修改时调用
      set(value) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          // console.log(value);
          initValue = value;
          trigger(); // 通知vue数据变化了，需要更新视图
        },delay);
      },
    };
  });

  return { msg }
}
