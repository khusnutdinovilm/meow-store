import { createPinia } from "pinia";
import { createApp } from "vue";

import "assets/scss/main.scss";

import App from "src/app.vue";
import router from "src/router";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router).mount("#app");
