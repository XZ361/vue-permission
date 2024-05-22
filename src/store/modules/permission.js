import { fetchPerssion } from "@/api/index";
import dynamicRoutes from "@/router/dynamic-router";
import router, { DynamicRoutes } from "@/router/index";
import { compareRoute, setDefaultRoute } from "@/util/compare";
export default {
  namespaced: true,
  state: {
    permissionList: null,
    siderbarMenu: [], //导航菜单
    currentMenu: [], //高亮
  },
  mutations: {
    SET_PERMISSION(state, routes) {
      state.permissionList = routes;
    },
    CANCLE_PERMISSION(state, routes) {
      state.permissionList = null;
    },
    SET_MENU(state, menu) {
      state.siderbarMenu = menu;
    },
    CANCLE_MENU(state, menu) {
      state.siderbarMenu = [];
    },
  },
  actions: {
    async getPermission({ commit, state }) {
      let permissionList = await fetchPerssion();
      // console.log(permissionList);
      // 筛选路由
      let resRoutes = compareRoute(permissionList, dynamicRoutes);
      let MainContainer = DynamicRoutes.find((v) => v.path === "");
      let children = MainContainer.children;
      children.push(...resRoutes);
      // 生成menu
      commit("SET_MENU", children);
      // 生成默认路由
      setDefaultRoute(MainContainer);
      // 初始化路由
      let initialRoutes = router.options.routes;
      router.addRoute(DynamicRoutes);
      commit("SET_PERMISSION", [...initialRoutes, ...DynamicRoutes]);
    },
  },
};
