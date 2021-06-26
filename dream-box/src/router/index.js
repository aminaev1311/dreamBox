import { createRouter, createWebHistory } from 'vue-router'

import Auth from '@p/Auth.vue'
import Registration from '@p/Registration.vue'
import StartPage from '@p/Start.vue'
import PersonArea from '@p/PersonArea.vue'
import store from '@s'
import Test from '@p/Test.vue'
import MainPage from '@p/MainPage.vue'
import ShortVision from "@p/ShortVision";

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartPage,
    children: [
      {
        path: '',
        name: 'MainPage',
        component: MainPage
      },
      {
        path: '/person-area',
        name: 'person-area',
        component: PersonArea
      }
    ]
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
  },
  {
    path: '/short-vision',
    name: 'short-vision',
    component: ShortVision
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

let flag = false

router.beforeEach(async (to, from, next) => {
  if (!flag) {
    flag = await store.getters['auth/isChecked']
  }

  const condition = to.name === 'auth' || to.name === 'registration' || to.name === 'test'
  const isUser = store.getters['auth/user']

  if (condition && !isUser) {
    next()
  } else if (condition && isUser) {
    next({ path: '/person-area' })
  }
  else if (!store.getters['auth/user']) {
    next({ name: 'auth' })
  } else {
    next()
  }
})

export default router
