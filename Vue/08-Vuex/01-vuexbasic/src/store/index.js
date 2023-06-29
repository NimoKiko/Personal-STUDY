import { createStore } from "vuex";

import moduleA from "./ModuleA";
export default createStore({

  modules: {
    moduleA
  },
});
