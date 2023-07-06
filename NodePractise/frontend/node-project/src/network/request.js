import axios from "axios";
export function request(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: "http://192.168.1.128/api",
    timeout: 5000,
  });

  // axios的拦截器
  instance.interceptors.request.use(
    (config) => {
      //1.比如config中的一些信息不符合服务器要求

      //2.比如发送网络请求时，显示一个请求中的图标

      //3.某些网络请求（比如登录token），必须携带一些特殊信息
      let token = sessionStorage.getItem("token");
      if (token) {
        config.headers["authorization"] = "Bearer " + token;
      }
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  // 响应拦截
  instance.interceptors.response.use(
    (res) => {
      console.log(res);

      if (res.data.state == 401) {
        confirm("请先登录");
        // window.location = "user";
      }

      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );

  // 发送真正的网络请求
  return instance(config);
}
