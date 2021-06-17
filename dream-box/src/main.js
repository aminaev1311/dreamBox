import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import 'css-spinners/dist/all.min.css'
import 'font-awesome/scss/font-awesome.scss'
import 'animate.css'
import Maska from 'maska'

import mitt from 'mitt';
const emitter = mitt();
store.dispatch('auth/checkUser')
const app = createApp(App).use(emitter).use(Maska).use(store).use(router).mount('#app')
console.log(app);
