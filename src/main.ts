import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue3-apexcharts";
import "./styles/main.scss";

createApp(App)
  .use(vuetify)
  .use(VueApexCharts)
  .mount("#app");
