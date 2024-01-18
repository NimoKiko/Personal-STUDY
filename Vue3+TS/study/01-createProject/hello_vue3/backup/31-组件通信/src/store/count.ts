import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
  // 存储数据的地方
  state(){
    return {
      sum: 6
    }
  },
  // actions里放置的是方法,用于响应组件中的动作
  actions:{
    increment(val){
      this.sum += val
    }
  },
  getters:{
    bigSum(){
      return this.sum * 10
    }
  }
})