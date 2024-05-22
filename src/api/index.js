import axios from "../util/http";

export function login(user) {
  return axios.get("/api/login?user=" + user);
}
