import { createStore } from "vuex";
import alert from "@s/alert";
import auth from "@s/auth";
import goals from "@s/goals";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alert,
    auth,
    goals,
  },
});
