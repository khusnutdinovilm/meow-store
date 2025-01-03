import HomePage from "pages/home-page.vue";

export default [
  {
    path: "/",
    name: "home-page",
    component: HomePage,
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
];
