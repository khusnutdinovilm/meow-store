<template>
  <app-header />

  <router-view />

  <app-footer />
</template>

<script setup lang="ts">
import AppFooter from "common/app-footer";
import AppHeader from "common/app-header";

defineOptions({
  name: "main-layout",
});
</script>
