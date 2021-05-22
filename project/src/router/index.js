import Vue from "vue"
import VueRouter from "vue-router"
import Auth from "@p/Auth.vue"
import Registration from "@p/Registration.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
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

export default router
