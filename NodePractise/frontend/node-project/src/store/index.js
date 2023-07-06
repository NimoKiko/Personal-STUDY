import { createStore } from "vuex";
import login from "./login";
import user from "./user";
import home from "./home";
import message from "./message";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    user,
    home,
    message
  },
});
