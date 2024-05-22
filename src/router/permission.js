// 路由权限处理
import router from "./index";
import store from "@/store";
router.beforeEach((to, from, next) => {
  if (!store.stte.UserToken) {
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
    next();
  }
});
