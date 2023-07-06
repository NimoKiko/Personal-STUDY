import { request } from "./request";
import api from "./api";

export function getUser(params) {
  return request({
    url: api.getUser,
    method: "get",
  });
}
