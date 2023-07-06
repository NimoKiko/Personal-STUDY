import api from "./api";
import { request } from "./request";

export function postContent(params) {
  return request({
    url: api.postContent,
    method: "post",
    data: params,
  });
}
