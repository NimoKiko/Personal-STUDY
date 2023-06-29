import {getData} from "@/request/student/studentRequest.js";

export default{
    // moduleA's actions
    getData({commit}, params){
        let p = getData();
        p.then(res => {
            commit("GET_DATA",res);
        })
    }
}