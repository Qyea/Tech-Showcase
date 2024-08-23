import { createApp } from "vue";
import "./../public/assets/main.scss";
import "./style.css";
import App from "./App.vue";

import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "primeicons/primeicons.css";

import Aura from "@primevue/themes/aura";

import router from "./router/router";

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(ToastService)
  .mount("#app");
