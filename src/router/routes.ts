import MainLayout from "layouts/main-layout.vue";

export default [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "home-page",
        component: () => import("pages/home-page.vue"),
      },
      {
        path: "/cart",
        name: "cart-page",
        component: () => import("pages/cart-page.vue"),
      },
      {
        path: "/favorite",
        name: "favorite-page",
        component: () => import("pages/favorite-page.vue"),
      },
    ],
  },
];
