import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";
// export const useTextStore = defineStore("text", {
//   actions: {
//     async getTalk() {
//       let { data } = await axios.get(
//         "https://api.uomg.com/api/rand.qinghua?format=json"
//       );

//       let obj = { id: nanoid(), title: data.content };
//       console.log(obj);

//       this.talkList.push(obj);
//     },
//   },
//   state() {
//     return {
//       talkList: [
//         {
//           id: "1",
//           title: "今天你有点怪，哪里怪？怪好看的....",
//         },
//         {
//           id: "2",
//           title: "草莓，蓝莓，蔓越莓，今天想我了没？",
//         },
//         {
//           id: "3",
//           title: "心里留了一块地，我的死心塌地...",
//         },
//       ],
//     };
//   },
// });

// 组合式的写法
import { reactive } from "vue";
export const useTextStore = defineStore("text", () => {
  let talkList = reactive([
    {
      id: "1",
      title: "今天你有点怪，哪里怪？怪好看的....",
    },
    {
      id: "2",
      title: "草莓，蓝莓，蔓越莓，今天想我了没？",
    },
    {
      id: "3",
      title: "心里留了一块地，我的死心塌地...",
    },
  ]);

  async function getTalk() {
    let { data } = await axios.get(
      "https://api.uomg.com/api/rand.qinghua?format=json"
    );

    let obj = { id: nanoid(), title: data.content };
    console.log(obj);

    talkList.push(obj);
  }

  return {talkList, getTalk}
});
