import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/login";
import Home from "../pages/home";
import NotFound from "../pages/errorPage/404";
import Forbidden from "../pages/errorPage/403";
import Layout from "../pages/layout";

Vue.use(VueRouter);
// 初始化路由
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

// 根据用户权限的不同，所能看到的页面和可操作性也不同
// admin->可看到所有页面
// vip->属于vip的权限
// 准备动态加载的路由

export const DynamicRoutes = [
  {
    path: "",
    component: Layout,
    name: "container",
    redirect: "home",
    meta: {
      requiresAuth: true,
      name: "首页",
    },
    children: [
      {
        path: "home",
        component: Home,
        name: "home",
        meta: {
          // 用来匹配规则
          name: "首页",
          icon: "icon-name",
        },
      },
    ],
  },
  {
    path: "/403",
    component: Forbidden,
    name: "403",
  },
  {
    path: "*",
    component: NotFound,
    name: "404",
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
