import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import 'css-spinners/dist/all.min.css'
import 'font-awesome/scss/font-awesome.scss'
import 'animate.css'
console.log(process.env.NODE_ENV);

store.dispatch('auth/checkUser')

createApp(App).use(store).use(router).mount('#app')
