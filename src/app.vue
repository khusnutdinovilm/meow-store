<template>
  <router-view />
</template>

<script setup lang="ts"></script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;

  & main {
    flex: auto;
  }
}
</style>
