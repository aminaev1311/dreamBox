import * as authApi from "@api/auth"

export default {
    namespaced: true,
    state: {
        user: null,
        isLoadReg: false,
    },
    getters: {
        user: state => state.user,
        isLoadReg: state => state.isLoadReg
    },
    mutations: {
        setIsLoadReg(state, val) {
            state.isLoadReg = val
        }
    },
    actions: {
        async register({ commit, dispatch }, data) {
            let result = false
            commit('setIsLoadReg', true)
            try {
                await authApi.sentFormForReg(data)
                dispatch(
                    'alert/setAlert',
                    {
                        status: "info",
                        message:
                            "You registered successfully. We have sent you an email with a link to complete the registration.",
                        daley: 10000,
                        buttonTitle: "X",
                    },
                    { root: true }
                )
                result = true
            } catch (e) {
                dispatch(
                    'alert/setAlert',
                    {
                        status: "error",
                        message: "Error by registration...Try later...",
                        daley: 4000,
                    },
                    { root: true }
                )
            }
            commit('setIsLoadReg', false)

            return result
        },
        async activate({ commit, dispatch }, id) {
            let result = false
            commit('setIsLoadReg', true)
            try {
                await authApi.activate(id)
                dispatch(
                    'alert/setAlert',
                    {
                        status: "success",
                        message: "You account get activated successfully!!!",
                        daley: 4000,
                    },
                    { root: true }
                )
                result = true
            } catch (e) {
                dispatch(
                    'alert/setAlert',
                    {
                        status: "error",
                        message: "Error by activated!!! Try later...",
                        daley: 4000,
                    },
                    { root: true }
                )
            }
            commit('setIsLoadReg', false)
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
                        status: "error",
                        message: "Error by checked of login!!! Try later...",
                        daley: 2000,
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
                        status: "error",
                        message: "Error by checked of email!!! Try later...",
                        daley: 2000,
                    },
                    { root: true }
                )
                return false
            }
        }
    }
}
