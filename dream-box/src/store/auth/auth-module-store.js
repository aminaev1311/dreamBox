import * as authApi from "@api/auth";
import router from "@r";

let resolve;
const isChecked = () =>
  new Promise((res) => {
    resolve = () => res(true);
  });

export default {
  namespaced: true,
  state: {
    user: null,
    isLoad: false,
  },
  getters: {
    user: (state) => state.user,
    isLoad: (state) => state.isLoad,
    isChecked: () => isChecked(),
  },
  mutations: {
    SETISLOAD(state, val) {
      state.isLoad = val;
    },
    SETUSER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async register({ commit, dispatch }, data) {
      commit("SETISLOAD", true);
      try {
        await authApi.sentFormForReg(data);
        dispatch(
          "alert/setAlert",
          {
            status: "info",
            message:
              "You registered successfully. We have sent you an email with a link to complete the registration.",
            daley: 10000,
            buttonTitle: "X",
          },
          { root: true }
        );
      } catch (e) {
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error by registration...Try later...",
            daley: 4000,
          },
          { root: true }
        );
      }
      commit("SETISLOAD", false);
    },
    async activate({ commit, dispatch }, id) {
      let result = false;
      commit("SETISLOAD", true);
      try {
        await authApi.activate(id);
        dispatch(
          "alert/setAlert",
          {
            status: "success",
            message: "You account get activated successfully!!!",
            daley: 4000,
          },
          { root: true }
        );
        result = true;
      } catch (e) {
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error by activated!!! Try later...",
            daley: 4000,
          },
          { root: true }
        );
      }
      commit("SETISLOAD", false);
      return result;
    },

    async checkLogin({ dispatch }, login) {
      try {
        const { result } = await authApi.checkLogin(login);
        return !result;
      } catch (e) {
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error by checked of login!!! Try later...",
            daley: 2000,
          },
          { root: true }
        );
        return false;
      }
    },
    async checkEmail({ dispatch }, email) {
      try {
        const { result } = await authApi.checkEmail(email);
        return !result;
      } catch (e) {
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error by checked of email!!! Try later...",
            daley: 2000,
          },
          { root: true }
        );
        return false;
      }
    },
    async getUser({ commit, dispatch }, user) {
      commit("SETISLOAD", true);
      try {
        const { user: newUser, result, token } = await authApi.logIn(user);
        if (result) {
          commit("SETUSER", newUser);
          localStorage.setItem("TOKEN", token);
          commit("SETISLOAD", false);
          return true;
        } else {
          commit("SETISLOAD", false);
          return false;
        }
      } catch (e) {
        console.log(e);
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error on server!! Try later...",
            daley: 3000,
          },
          { root: true }
        );
      }
      commit("SETISLOAD", false);
    },
    async checkUser({ commit, dispatch }) {
      const TOKEN = localStorage.getItem("TOKEN") || "";
      try {
        const { result, user } = await authApi.checkUser(TOKEN);
        if (result) {
          commit("SETUSER", user);
        } else {
          commit("SETUSER", null);
        }
      } catch (e) {
        console.log(e);
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error on server!! Try later...",
            daley: 3000,
          },
          { root: true }
        );
      }
      resolve();
    },
    async logOut({ commit }) {
      localStorage.removeItem("TOKEN");
      commit("SETUSER", null);
      router.push({ name: "auth" });
    },
    async removeAccount({ commit, dispatch }) {
      commit("SETISLOAD", true);
      try {
        await authApi.removeAccount();
        localStorage.removeItem("TOKEN");
        commit("SETUSER", null);
        await router.push({ name: "registration" });
        dispatch(
          "alert/setAlert",
          {
            status: "success",
            message: "Your account got deleted succesfully!!!",
            daley: 3000,
          },
          { root: true }
        );
      } catch (e) {
        console.log(e);
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error on server!! Try later...",
            daley: 3000,
          },
          { root: true }
        );
      }
      commit("SETISLOAD", false);
    },
    // Uapdate user info
    async updateUserInfo({ commit, dispatch }, user) {
      commit("SETISLOAD", true);
      try {
        const { user: newUser, token } = await authApi.updateUser(user);
        commit("SETUSER", newUser);
        localStorage.setItem("TOKEN", token);
        dispatch(
          "alert/setAlert",
          {
            status: "success",
            message: "User information updated successfully!!",
            daley: 3000,
          },
          { root: true }
        );
      } catch (e) {
        console.log(e);
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error on server!! Try later...",
            daley: 3000,
          },
          { root: true }
        );
      }
      commit("SETISLOAD", false);
    },
    // Uapdate user password
    async updateUserPassword({ commit, dispatch }, passwords) {
      commit("SETISLOAD", true);
      try {
        const { oldPassword, currentPasswords } = await authApi.updateUserPassword(passwords);
        if (!oldPassword && !currentPasswords) {
          dispatch(
            "alert/setAlert",
            {
              status: "success",
              message: "Your password updated successfully!!",
              daley: 3000,
            },
            { root: true }
          );
        }
        return { oldPassword, currentPasswords };
      } catch (e) {
        console.log(e);
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error on server!! Try later...",
            daley: 3000,
          },
          { root: true }
        );
      }
      commit("SETISLOAD", false);
    },

    // send email for restore password
    async sendEmailRestorePassword({ commit, dispatch }, email) {
      try {
        const { result } = await authApi.sendEmailRestorePassword(email);
        return result;
      } catch (e) {
        console.log(e);
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error on server!! Try later...",
            daley: 3000,
          },
          { root: true }
        );
      }
    },

    async checkTokenRecoveryPassword({ dispatch }, token) {
      try {
        const { result, token: newToken } = await authApi.isToken(token);
        if (!result) {
          await router.push({ name: "auth" });
          dispatch(
            "alert/setAlert",
            {
              status: "error",
              message: "Your token got old. So you need to repeat procedure recovery password",
              daley: 10000,
              buttonTitle: "X",
            },
            { root: true }
          );
        } else {
          localStorage.setItem("RECOVERY_PASSWORD_TOKEN", newToken);
        }
      } catch (e) {
        console.log(e);
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error on server!! Reload this page or try later...",
            daley: 10000,
            buttonTitle: "X",
          },
          { root: true }
        );
      }
    },
    async changePassword({ dispatch }, password) {
      try {
        const token = localStorage.getItem("RECOVERY_PASSWORD_TOKEN") || "";
        const { result } = await authApi.changePassword(token, password);
        if (result) {
          await router.push({ name: "auth" });
          dispatch(
            "alert/setAlert",
            {
              status: "success",
              message: "Your password got changed.",
              daley: 10000,
              buttonTitle: "X",
            },
            { root: true }
          );
        } else {
          dispatch(
            "alert/setAlert",
            {
              status: "error",
              message: "Your token got old. So you need to repeat procedure recovery password",
              daley: 10000,
              buttonTitle: "X",
            },
            { root: true }
          );
        }
      } catch (e) {
        console.log(e);
        dispatch(
          "alert/setAlert",
          {
            status: "error",
            message: "Error on server!! Reload this page or try later...",
            daley: 3000,
          },
          { root: true }
        );
      }
    },
  },
};
