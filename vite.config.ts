import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue(), vueDevTools()],

  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  base: mode === "production" ? "/meow-store/" : "/",

  resolve: {
    alias: {
      src: fileURLToPath(new URL("./src", import.meta.url)),
      pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
      layouts: fileURLToPath(new URL("./src/layouts", import.meta.url)),
      store: fileURLToPath(new URL("./src/store", import.meta.url)),
      router: fileURLToPath(new URL("./src/router", import.meta.url)),
      assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
      icons: fileURLToPath(new URL("./src/components/icons", import.meta.url)),
      ui: fileURLToPath(new URL("./src/components/ui", import.meta.url)),
      shared: fileURLToPath(new URL("./src/components/shared", import.meta.url)),
      use: fileURLToPath(new URL("./src/use", import.meta.url)),
      helpers: fileURLToPath(new URL("./src/helpers", import.meta.url)),
      directives: fileURLToPath(new URL("./src/directives", import.meta.url)),
      modules: fileURLToPath(new URL("./src/modules", import.meta.url)),
    },
  },
}));