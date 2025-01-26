<template>
  <button class="base-button" :class="btnClasses">
    <div v-if="$slots.prepend" class="base-button__prepend">
      <slot name="prepend"></slot>
    </div>

    <div v-if="$slots.default" class="base-button__content">
      <slot></slot>
    </div>
    <div class="base-button__content">
      {{ labelText || "" }}
    </div>

    <div v-if="$slots.append" class="base-button__append">
      <slot name="append"></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { BUTTON_TYPES, type BaseButtonProps } from "ui/base-button/types";

defineOptions({
  name: "base-button",
});

const props = withDefaults(defineProps<BaseButtonProps>(), {
  btnType: BUTTON_TYPES.PRIMARY,
});

const btnClasses = computed(() => ({
  "base-button--primary": props.btnType === BUTTON_TYPES.PRIMARY,
  "base-button--secondary": props.btnType === BUTTON_TYPES.SECONDARY,
  "base-button--terciary": props.btnType === BUTTON_TYPES.TERCIARY,
}));
</script>
