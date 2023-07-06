import api from "./api";
import { request } from "./request";

export function getPo(params) {
  return request({
    url: api.getPo,
    params: params,
  });
}
