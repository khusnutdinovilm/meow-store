<template>
  <main class="page container">
    <div class="page__content" :class="pageClasses">
      <slot v-if="isContentLoading" name="content-loading"></slot>
      <slot v-else-if="isContentEmpty" name="content-empty"></slot>
      <slot v-else></slot>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "page-template",
});

const props = defineProps<{
  isContentLoading?: boolean;
  isContentEmpty?: boolean;
}>();

const pageClasses = computed(() => ({
  "page__content--loading": props.isContentLoading,
  "page__content--empty": props.isContentEmpty,
}));
</script>
