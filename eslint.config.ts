// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import pluginVue from "eslint-plugin-vue";

import pluginVitest from "@vitest/eslint-plugin";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },
  skipFormatting,

  {
    plugins: {
      eslintPluginImport,
      eslintPluginUnicorn,
    },

    rules: {
      "vue/block-order": [
        "error",
        {
          order: ["template", "script", "script[setup]", ["style[scoped]", "style"]],
        },
      ],
      "vue/component-definition-name-casing": ["error", "kebab-case"],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always", // Для пустых элементов вроде <img/> и <input/>
            normal: "never", // Обычные теги не должны быть самозакрывающимися
            component: "always", // Самозакрывающиеся компоненты
          },
          svg: "always", // Самозакрывающиеся SVG теги
          math: "always", // Самозакрывающиеся MathML теги
        },
      ],
      "eslintPluginUnicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
        },
      ],
      "vue/define-macros-order": [
        "error",
        {
          order: ["defineOptions", "defineProps", "defineEmits", "defineModel", "defineSlots"],
          defineExposeLast: true,
        },
      ],
      "vue/attributes-order": [
        "error",
        {
          order: [
            "DEFINITION",
            "LIST_RENDERING",
            "CONDITIONALS",
            "RENDER_MODIFIERS",
            "GLOBAL",
            "UNIQUE",
            "SLOT",
            "TWO_WAY_BINDING",
            "OTHER_DIRECTIVES",
            ["ATTR_DYNAMIC", "ATTR_STATIC", "ATTR_SHORTHAND_BOOL"],
            "EVENTS",
            "CONTENT",
          ],
        },
      ],
      "vue/multi-word-component-names": "error",
      "vue/no-v-html": "warn",
      "vue/v-slot-style": ["error", "shorthand"],
      "vue/component-name-in-template-casing": ["error", "kebab-case"],
      "vue/custom-event-name-casing": ["error", "kebab-case"],
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "eslintPluginImport/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "object", "type"],
          "pathGroups": [
            {
              pattern: "*",
              group: "external",
              position: "before",
            },
            {
              pattern: "router/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "pages/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "layouts/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "icons/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "common/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "ui/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "shared/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "helpers/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "use/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "directives/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "modules/**",
              group: "internal",
              position: "after",
            },
          ],
          "pathGroupsExcludedImportTypes": ["builtin"],
          "newlines-between": "always",
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      // "no-restricted-imports": [
      //   "error",
      //   {
      //     patterns: [
      //       "../*", // запрещает импорты из родительских директорий
      //       "./*", // запрещает импорты из соседних файлов
      //     ],
      //   },
      // ],
    },
  },
);
