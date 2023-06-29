// 模块A
const ModuleA = {
  state: {
    counter: 0,
    student: [
      {
        name: "lisa",
        age: 18,
      },
      {
        name: "eden",
        age: 18,
      },
      {
        name: "author",
        age: 18,
      },
      {
        name: "eva",
        age: 18,
      },
    ],
    info: {
      name: "eclipse",
      age: 28,
      job: "actor",
    },
  },
  // 在action中处理异步请求
  // 通过commit调起mutations中的方法修改state中的数据
  actions: {
    plus(context, payload) {
      let params = {
        name: "lisa",
        age: 18,
      };
      this.commit("ADD");

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(params);
        }, 1000);
      });
    },
    minu() {
      this.commit("MINU");
    },
  },
  mutations: {
    ADD(state, res) {
      state.counter++;
    },
    MINU(state, res) {
      state.counter--;
    },
    ADD_STUDENT(state, res) {
      state.student.push(res);
    },
    UPDATE_INFO(state, res) {
      delete state.info.age;
      // Vue.delete(state.info,age)
    },
  },
  // 类似于计算属性
  getters: {
    getPower(state) {
      console.log(Math.pow(state.counter, 2));
      return Math.pow(state.counter, 2);
    },
  },
};

export default ModuleA;
