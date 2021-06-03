import { createRouter, createWebHistory } from 'vue-router'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@p/Auth.vue'
import Registration from '@p/Registration.vue'
import StartPage from '@p/Start.vue'
import PersonArea from '@p/PersonArea.vue'
import store from '@s'

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartPage
  },
  {
    path: '/person-area',
    name: 'person-area',
    component: PersonArea
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  await store.getters['auth/isChecked']
  if (to.name === 'auth' || to.name === 'registration') {
    next()
  } else if (!store.getters['auth/user']) {
    next({ name: 'auth' })
  } else {
    next()
  }
})

export default router
