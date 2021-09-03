import * as authApi from "@api/goals";
//import router from "@r";

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
      console.log(state.goals);
    },
    ADD_GOAL(state, goal) {
      state.goals.push(goal);
      console.log(state.goals);
    },
    REMOVE_GOAL(state, goal) {
      state.goals.filter(({ id }) => goal.id.toString() === id.toSting());
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
