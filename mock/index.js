const express = require("express");
const app = express();
const adminLogin = require("./data/admin-login.json");
const vipLogin = require("./data/vip-login.json");
const adminPerssion = require("./data/admin-perssion.json");
const vipPerssion = require("./data/vip-perssion.json");
const url = require("url");

app.get("/login", (req, res) => {
  const user = url.parse(req.url, true).query.user;
  if (user === "admin") {
    res.send(adminLogin);
  } else {
    res.send(vipLogin);
  }
});
app.get("/permission", (req, res) => {
  const user = url.parse(req.url, true).query.user;
  if (user.search("admin") > -1) {
    res.send(adminPerssion);
  } else {
    res.send(vipPerssion);
  }
});

app.listen(3300, () => {
  console.log("服务器运行在3300");
});
