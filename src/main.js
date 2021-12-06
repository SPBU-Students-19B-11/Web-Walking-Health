import Vue from "vue";
import App from "./App.vue";
import router from "@/router/router";
import store from "@/store";
import vuetify from "./plugins/vuetify";
import VueApexCharts from "vue-apexcharts";
import Axios from "axios";
import loader from "vue-ui-preloader";

Vue.use(VueApexCharts);
Vue.use(loader);
Vue.component("apexchart", VueApexCharts);

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

const app = new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
});

app.$mount("#app");
