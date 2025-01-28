<template>
  <div class="toggle-wrapper" @click.prevent.stop="toggleState">
    <slot :is-active="activeState"></slot>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "toggle-wrapper",
});

const activeState = defineModel<boolean>({
  required: true,
  default: false,
});

const toggleState = () => (activeState.value = !activeState.value);
</script>
