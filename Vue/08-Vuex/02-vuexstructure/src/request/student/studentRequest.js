import axios from 'axios'
import api from './studentUrl'
// 获取学生列表
export function getData(params){
    return axios({
        url:api.testUrl,
        params: params
    })
}