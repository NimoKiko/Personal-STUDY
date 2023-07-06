import { getUser } from "../../network/user";
export default {
  getUser({ commit }, params) {
    let p = getUser();
    return p;
  },
};
