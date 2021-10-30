import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const app = new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
});

app
  .$mount('#app')

