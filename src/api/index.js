import axios from "../util/http";
import store from "../store";

export function login(user) {
  return axios.get("/api/login?user=" + user);
}
export function fetchPerssion() {
  return axios.get("/api/permission?user=" + store.state.UserToken);
}
