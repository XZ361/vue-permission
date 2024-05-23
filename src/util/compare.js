// 1.比对路由权限
// 2.指定返回默认路由

// userRoutes 后台返回的e路由权限数据
// allRoutes 前端配置好的路由
//  resultRoutes 对比之后符合条件的可展示的路由
export function compareRoute(userRoutes = [], allRoutes = []) {
  let resultRoutes = [];
  allRoutes.forEach((a, i) => {
    userRoutes.forEach((u, i) => {
      if (u.name === a.meta.name) {
        if (u.children && u.children.length > 0) {
          a.children = compareRoute(u.children, a.children);
        }
        resultRoutes.push(a);
      }
    });
  });
  return resultRoutes;
}

export function setDefaultRoute(routes) {
  // console.log(routes);
  // routes.forEach((v) => {
  if (routes.children && routes.children.length > 0) {
    routes.redirect = { name: routes.children[0].name };
    setDefaultRoute(routes.children);
  }
  // });
}
