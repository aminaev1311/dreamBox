import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
//import 'bootstrap/scss/bootstrap.scss'
import 'css-spinners/dist/all.min.css'
import 'font-awesome/scss/font-awesome.scss'
import 'animate.css'

store.dispatch('auth/checkUser')

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
