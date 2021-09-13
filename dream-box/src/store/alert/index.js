export default {
  namespaced: true,
  state: {
    alert: null,
  },
  getters: {
    alert: (state) => state.alert,
  },
  mutations: {
    setAlert(state, alert) {
      state.alert = alert;
      if (alert && alert.daley) {
        setTimeout(() => (state.alert = null), alert.daley);
      }
    },
  },
  actions: {
    setAlert({ commit }, alert) {
      commit("setAlert", alert);
    },
    close({ commit }) {
      commit("setAlert", null);
    },
  },
};
