import { postContent } from "../../network/home";
export default {
  postContent({ commit }, params) {
    let p = postContent(params);
    return p;
  },
};
