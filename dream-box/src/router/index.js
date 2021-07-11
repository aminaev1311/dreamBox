import { createRouter, createWebHistory } from "vue-router";

import Auth from "@p/Auth.vue";
import Registration from "@p/Registration.vue";
import App from "@p/App";
import PersonArea from "@p/PersonArea.vue";
import ForgotPassword from "@p/ForgotPassword";
import store from "@s";
import Weeks from "@p/App/Weeks.vue";
import Goals from "@p/App/Goals.vue";
import Vision from "@p/App/Vision.vue";
import Archive from "@p/App/Archive.vue";

const routes = [
  {
    path: "/",
    name: "start",
    component: App,
    children: [
      {
        path: "/",
        name: "Weeks",
        component: Weeks,
      },
      {
        path: "/goals",
        name: "Goals",
        component: Goals,
      },
      {
        path: "/vision",
        name: "Vision",
        component: Vision,
      },
      {
        path: "/archive",
        name: "Archive",
        component: Archive,
      },
      {
        path: "/person-area",
        name: "person-area",
        component: PersonArea,
      },
    ],
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
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let flag = false;

router.beforeEach(async (to, from, next) => {
  if (!flag) {
    flag = await store.getters["auth/isChecked"];
  }

  const condition =
    to.name === "auth" || to.name === "registration" || to.name === "forgot-password";
  const isUser = store.getters["auth/user"];

  if (condition && !isUser) {
    next();
  } else if (condition && isUser) {
    next({ path: "/person-area" });
  } else if (!store.getters["auth/user"]) {
    next({ name: "auth" });
  } else {
    next();
  }
});

export default router;
