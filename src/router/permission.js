// 路由权限处理
import router from "./index";
import store from "@/store";
router.beforeEach((to, from, next) => {
  if (!store.state.UserToken) {
    // 说明用户未登录
    if (
      to.matched.length > 0 &&
      !to.matched.some((record) => record.meta.requiresAuth)
    ) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    if (!store.state.permission.permissionList) {
      store.dispatch("permission/getPermission").then(() => {
        next({ path: to.path });
      });
    } else {
      if (to.path !== "/login") {
        next();
      } else {
        next(from.fullPath);
      }
    }
  }
});
//路由权限业务
//1.定义好全部的路由地址
// 2.通过用户不同，向后台请求不同的用户权限数据
// 3.对用户权限作对比：请求的数据===全部的路由 取出相同的作为路由配置
