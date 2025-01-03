import { createPinia } from "pinia";
import { createApp } from "vue";

import "assets/scss/main.scss";

import App from "src/app.vue";
import router from "src/router";

import PageTemplate from "common/page-template";

const app = createApp(App);
const pinia = createPinia();

app.component("page-template", PageTemplate);

app.use(pinia).use(router).mount("#app");
