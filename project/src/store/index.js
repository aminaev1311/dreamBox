import Vue from 'vue'
import Vuex from 'vuex'
import alert from '@s/alert'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {},
  mutations: {},
  actions: {},
  modules: { alert }
})
