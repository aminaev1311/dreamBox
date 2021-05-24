import Vue from 'vue'
import Vuex from 'vuex'
import alert from '@s/alert'
import auth from '@s/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: { alert, auth }
})
