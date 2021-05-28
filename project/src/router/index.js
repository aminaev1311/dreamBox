import Vue from "vue"
import VueRouter from "vue-router"
import Auth from "@p/Auth.vue"
import Registration from "@p/Registration.vue"
import StartPage from "@p/Start.vue"
import store from "@s"
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "start",
    component: StartPage,
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})
/* 
router.beforeEach((to, from, next) => {
  if (to.name === 'auth' || to.name === 'registration') {
    next()
  }
  else if (!store.getters['auth/user']) {
    next({ name: 'auth' })
  }
}) */

export default router
