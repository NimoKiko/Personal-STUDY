import { request } from "../request";
import api from "./api";
export function getMultidata(params) {
  return request({
    url: api.getMultidata,
    params: params
  })
}
