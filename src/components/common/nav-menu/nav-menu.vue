<template>
  <nav class="nav-menu">
    <div v-for="link in navMenuLinks" :key="link.name" class="nav-menu__item">
      <router-link
        :to="{ name: link.name }"
        class="nav-menu__link"
        active-class="nav-menu__link--active"
        exact-active-class="nav-menu__link--active"
      >
        {{ link.title }}
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineOptions({
  name: "nav-menu",
});

const navMenuLinks = [
  {
    path: "/",
    name: "home-page",
    title: "Главная",
  },
  {
    path: "/cart",
    name: "cart-page",
    title: "Корзина",
  },
  {
    path: "/favorite",
    name: "favorite-page",
    title: "Избранное",
  },
];
</script>
