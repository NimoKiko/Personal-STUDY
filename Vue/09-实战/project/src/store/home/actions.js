import {
  getMultidata
} from "../../request/home/home";
export default {
getMultidata({commit},params){
  let p = getMultidata(params);
  // p.then(res => {
  //   commit("GET_MULTIDATA",res);
  // })
  return p;
}
}
