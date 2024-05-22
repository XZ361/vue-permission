<template>
  <div id="login-wrap" class="clearfix">
    <div class="title">登录页</div>
    <div id="login">
      <div class="login-account">
        <span>账号：</span>
        <input
          type="text"
          v-model.trim="account"
          name="account"
          placeholder="账号"
        />
      </div>
      <div class="login-password">
        <span>密码：</span>
        <input
          type="password"
          v-model.trim="password"
          name="password"
          placeholder="密码"
          @keyup.enter="password"
        />
      </div>
      <p class="login-btn">
        <button id="loginBtn" @click="login">登录</button>
      </p>
    </div>
  </div>
</template>

<script>
import { login } from "../../api";
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    async login() {
      // 网络请求
      let data = await login(this.account);
      let token = data.token;
      //   console.log(data);
      this.$store.commit("LOGIN_IN", token);
    },
  },
};
</script>

<style lang="scss" scoped></style>
