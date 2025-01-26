<template>
  <header class="header header--bg">
    <div class="container header__wrapper">
      <div class="header__top">
        <router-link to="/" class="header__logo">
          <main-logo class="header__logo-icon" />
        </router-link>

        <nav-menu class="header__menu" />

        <div class="header__contacts">
          <a href="/" class="header__phone">+544 3490 00000</a>

          <div class="header__caption">Звони скорее!</div>
        </div>
      </div>

      <div class="header__bottom">
        <div class="header__content">Найдено 349 котов</div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import MainLogo from "icons/main-logo.vue";

import NavMenu from "common/nav-menu";

defineOptions({
  name: "app-header",
});
</script>
