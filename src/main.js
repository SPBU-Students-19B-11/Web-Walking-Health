import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store'
import vuetify from './plugins/vuetify'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);

Vue.config.productionTip = false

const app = new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
});

app
  .$mount('#app')

