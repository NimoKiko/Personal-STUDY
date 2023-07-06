import { getToken } from "../../network/login";
export default {
  getToken({ commit }, params) {
    let p = getToken(params);
    return p;
  },
};
