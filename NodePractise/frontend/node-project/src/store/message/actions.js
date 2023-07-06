import { getPo } from "../../network/message";
export default {
  getPo({ commit }, params) {
    let p = getPo(params);
    return p;
  },
};
