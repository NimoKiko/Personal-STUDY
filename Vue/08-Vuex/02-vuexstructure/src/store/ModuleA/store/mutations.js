export default {
    // mutations
    ADD(state, res){
        state.counter++;
    },
    MINU(state, res){
        state.counter--;
    },
    GET_DATA(state, res) {
        // console.log(res.data);
        // state.data = res.data.returnCode;
        state.data = res.data;
    }
}