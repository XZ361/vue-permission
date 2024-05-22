import axios from "axios";
import baseURL from "./baseURL";
// import store from "../store";
import { Message } from "element-ui";

const http = {};
const instance = axios.create({
  // baseURL: baseUrl,
  timeout: 5000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 全局给header添加token
    // if (store.state.UserToken) {
    //   // 如果是CAS平台
    //   // 在请求头部增加 切换的租户 字段（User-Information）发给后台
    //   config.headers.Authorization = store.state.UserToken;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 500 || error.response.status === 502) {
      Message({
        message: error.response.data.msg,
        type: "warning",
      });
    } else if (error.response.status === 404) {
      Message({
        message: "请求接口不存在" + error.response.status,
        type: "error",
      });
    } else if (error.response.status === 401) {
      Message({
        message: "token失效，请重新登陆",
        type: "warning",
      });
      router.replace({
        name: "login",
        params: {
          clear: true,
        },
      });
    } else {
      Message({
        message: error.response.status,
        type: "warning",
      });
    }

    return Promise.reject(error);
  }
);

http.get = function (url, options) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, options)
      .then((response) => {
        if (response.code === 0) {
          resolve(response.data);
        } else {
          Message.error({
            message: response.message,
          });
          reject(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
};
http.post = function (url, data, options) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, options)
      .then((response) => {
        if (response.code === 0) {
          resolve(response.data);
        } else {
          Message.error({
            message: response.message,
          });
          reject(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });
};
export default http;
