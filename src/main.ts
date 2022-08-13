import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { router } from "~@plugins/router";
import { i18n } from "~@plugins/i18n";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

app.use(router);

app.use(i18n);

app.mount("#app");
