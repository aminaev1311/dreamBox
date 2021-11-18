import * as authApi from "@api/goals";
// import router from "@r";

const defaultGoal = () => [];

export default {
  namespaced: true,
  state: {
    goals: defaultGoal(),
  },
  getters: {
    getGoals: (state) => state.goals,
  },
  mutations: {
    SET_GOALS_BY_USER(state, goals) {
      state.goals = goals;
    },
    ADD_GOAL(state, goal) {
      state.goals.push(goal);
    },
    REMOVE_GOAL(state, id) {
      state.goals = state.goals.filter(({ _id }) => _id !== id);
    },
    UPDATE_GOAL(state, goal) {},
  },
  actions: {
    async getGoalsByUser({ commit, rootGetters }) {
      try {
        const goals = await authApi.getGoalsByUser();
        commit("SET_GOALS_BY_USER", goals);
      } catch (e) {
        console.log(e);
      }
    },
    async deleteGoalById({ commit }, id) {
      try {
        const goals = await authApi.deleteGoalById(id);
        commit("REMOVE_GOAL", id);
      } catch (e) {
        console.log(e);
      }
    },
    async addGoal({ commit, rootGetters }, goal) {
      try {
        const userId = rootGetters["auth/user"]?._id;
        if (userId) {
          goal.userId = userId;
          const { _id } = await authApi.addGoal(goal);
          commit("ADD_GOAL", { ...goal, _id });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
