export default {
GET_MULTIDATA(state, res) {
  console.log(res);
  state.multidata = res.data;
}
}
