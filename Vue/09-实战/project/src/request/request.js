import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:8000/api/w6",
    timeout: 5000,
  });

  // axios拦截器（请求拦截）
  instance.interceptors.request.use(
    (config) => {
      //1.比如config中的一些信息不符合服务器要求

      //2.比如发送网络请求时，显示一个请求中的图标

      //3.某些网络请求（比如登录token），必须携带一些特殊信息

      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  // axios拦截器（响应拦截）
  instance.interceptors.response.use(
    (res) => {
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  return instance(config);
}
