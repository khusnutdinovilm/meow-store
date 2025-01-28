<template>
  <div class="base-input" :class="baseInputClasses">
    <label v-if="labelText" :for="id" class="base-input__label">
      {{ labelText }}
    </label>

    <input
      :id="id"
      v-model="model"
      :type="type"
      class="base-input__field"
      :placeholder="placeholder"
    />

    <div v-if="errorText" class="base-input__error-text">
      {{ errorText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { type IBaseInputProps } from "ui/base-input/types";

defineOptions({
  name: "base-input",
});

const props = withDefaults(defineProps<IBaseInputProps>(), {
  type: "text",
});

const model = defineModel<string>({
  required: true,
});

const baseInputClasses = computed(() => ({
  "base-input--danger": props.errorText,
}));
</script>
