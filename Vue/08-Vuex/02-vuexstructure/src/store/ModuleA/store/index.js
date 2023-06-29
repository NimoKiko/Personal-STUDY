import mutationsA from "./mutations";
import actionsA from "./actions";
import gettersA from "./getters";

const ModuleA = {
    state:{
        counter:0,
        data:""
    },
    mutations: mutationsA,
    actions:actionsA,
    getters:gettersA

}
export default ModuleA;