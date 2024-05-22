// 订单管理
const Order = () => import("../pages/order-manage");
const OrderList = () => import("../pages/order-manage/order-list");
const ProductManage = () => import("../pages/order-manage/product-manage");
const ProductionList = () =>
  import("../pages/order-manage/product-manage/production-list");
const ReviewManage = () =>
  import("../pages/order-manage/product-manage/review-manage");
const ReturnGoods = () => import("../pages/order-manage/return-goods");

// 产品管理
const Goods = () => import("../pages/goods-manage");
const GoodsList = () => import("../pages/goods-manage/goods-list");
const GoodsClassify = () => import("../pages/goods-manage/goods-classify");

// 需要权限判断的路由
const dynamicRoutes = [
  {
    path: "/order",
    component: Order,
    name: "order-manage",
    meta: {
      name: "订单管理",
      icon: "icon-email",
    },
    children: [
      {
        path: "list",
        component: OrderList,
        name: "order-list",
        meta: {
          name: "订单列表",
          icon: "icon-quit",
        },
      },
      {
        path: "product",
        component: ProductManage,
        name: "product-manage",
        meta: {
          name: "生产管理",
          icon: "icon-service",
        },
        children: [
          {
            path: "/product",
            component: ProductionList,
            name: "product-list",
            meta: {
              name: "生产列表",
              icon: "icon-nav",
            },
          },
          {
            path: "/review",
            component: ReviewManage,
            name: "review-Manage",
            meta: {
              name: "审核列表",
              icon: "icon-finance-manage",
            },
          },
        ],
      },
      {
        path: "/returnGoods",
        component: ReturnGoods,
        name: "return-goods",
        meta: {
          name: "退货管理",
          icon: "icon-product-manage",
        },
      },
    ],
  },
  {
    path: "/goods",
    component: Goods,
    name: "goods",
    meta: {
      name: "产品管理",
      icon: "icon-order-manage",
    },
    children: [
      {
        path: "list",
        component: GoodsList,
        name: "goods-list",
        meta: {
          name: "产品列表",
          icon: "icon-home",
        },
      },
      {
        path: "classify",
        component: GoodsClassify,
        name: "goods-classify",
        meta: {
          name: "产品分类",
          icon: "icon-product-manage",
        },
      },
    ],
  },
];

export default dynamicRoutes;
