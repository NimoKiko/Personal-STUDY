import { request } from "./request";
import api from "./api";

export function getToken(params) {
  return request({
    url: api.getToken,
    method: "post",
    data: params,
  });
}
