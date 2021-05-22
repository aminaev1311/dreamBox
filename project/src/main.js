import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'normalize.css'
//import 'bootstrap/scss/bootstrap.scss'
import 'font-awesome/scss/font-awesome.scss'
import 'animate.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
