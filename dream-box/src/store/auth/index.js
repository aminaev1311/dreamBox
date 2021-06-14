import * as authApi from '@api/auth'
import router from '@r'

let resolve
const isChecked = () =>
  new Promise(res => {
    resolve = () => res(true)
  })

export default {
  namespaced: true,
  state: {
    user: null,
    isLoad: false
  },
  getters: {
    user: state => state.user,
    isLoad: state => state.isLoad,
    isChecked: state => isChecked()
  },
  mutations: {
    setIsLoad(state, val) {
      state.isLoad = val
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    async register({ commit, dispatch }, data) {
      commit('setIsLoad', true)
      try {
        await authApi.sentFormForReg(data)
        dispatch(
          'alert/setAlert',
          {
            status: 'info',
            message:
              'You registered successfully. We have sent you an email with a link to complete the registration.',
            daley: 10000,
            buttonTitle: 'X'
          },
          { root: true }
        )
      } catch (e) {
        dispatch(
          'alert/setAlert',
          {
            status: 'error',
            message: 'Error by registration...Try later...',
            daley: 4000
          },
          { root: true }
        )
      }
      commit('setIsLoad', false)

    },
    async activate({ commit, dispatch }, id) {
      let result = false
      commit('setIsLoad', true)
      try {
        await authApi.activate(id)
        dispatch(
          'alert/setAlert',
          {
            status: 'success',
            message: 'You account get activated successfully!!!',
            daley: 4000
          },
          { root: true }
        )
        result = true
      } catch (e) {
        dispatch(
          'alert/setAlert',
          {
            status: 'error',
            message: 'Error by activated!!! Try later...',
            daley: 4000
          },
          { root: true }
        )
      }
      commit('setIsLoad', false)
      return result
    },
    async checkLogin({ dispatch }, login) {
      try {
        const { result } = await authApi.checkLogin(login)
        return !result
      } catch (e) {
        dispatch(
          'alert/setAlert',
          {
            status: 'error',
            message: 'Error by checked of login!!! Try later...',
            daley: 2000
          },
          { root: true }
        )
        return false
      }
    },
    async checkEmail({ dispatch }, email) {
      try {
        const { result } = await authApi.checkEmail(email)
        return !result
      } catch (e) {
        dispatch(
          'alert/setAlert',
          {
            status: 'error',
            message: 'Error by checked of email!!! Try later...',
            daley: 2000
          },
          { root: true }
        )
        return false
      }
    },
    async getUser({ commit, dispatch }, user) {
      commit('setIsLoad', true)
      try {
        const { user: newUser, result, token } = await authApi.logIn(user)
        if (result) {
          commit('setUser', newUser)
          localStorage.setItem('TOKEN', token)
          commit('setIsLoad', false)
          return true
        } else {
          commit('setIsLoad', false)
          return false
        }
      } catch (e) {
        console.log(e)
        dispatch(
          'alert/setAlert',
          {
            status: 'error',
            message: 'Error on server!! Try later...',
            daley: 3000
          },
          { root: true }
        )
      }
      commit('setIsLoad', false)
    },
    async checkUser({ commit, dispatch }) {
      try {
        const { result, user } = await authApi.checkUser()
        if (result) {
          commit('setUser', user)
        } else {
          commit('setUser', null)
        }
      } catch (e) {
        console.log(e)
        dispatch(
          'alert/setAlert',
          {
            status: 'error',
            message: 'Error on server!! Try later...',
            daley: 3000
          },
          { root: true }
        )
      }
      resolve()
    },
    async logOut({ commit }) {
      await router.push({ name: 'auth' })
      localStorage.removeItem('TOKEN')
      commit('setUser', null)
      console.log(1)
    },
    async removeAccount({ commit, dispatch }) {
      commit('setIsLoad', true)
      try {
        await authApi.removeAccount()
        localStorage.removeItem('TOKEN')
        await router.push({ name: 'registration' })
        dispatch(
          'alert/setAlert',
          {
            status: 'success',
            message: 'Your account got deleted succesfully!!!',
            daley: 3000
          },
          { root: true }
        )
      } catch (e) {
        console.log(e)
        dispatch(
          'alert/setAlert',
          {
            status: 'error',
            message: 'Error on server!! Try later...',
            daley: 3000
          },
          { root: true }
        )
      }
      commit('setIsLoad', false)
    }
  }
}