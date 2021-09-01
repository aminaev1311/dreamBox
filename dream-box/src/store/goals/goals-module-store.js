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
    ADD_GOAL(state, goal) {
      state.goals.push(goal);
      console.log(state.goals);
    },
    REMOVE_GOAL(state, goal) {
      state.goals.filter(({ id }) => goal.id.toString() === id.toSting());
    },
    UPDATE_GOAL(state, goal) { },
  },
  actions: {
    async addGoal({ commit, rootGetters }, goal) {
      try {
        const userId = rootGetters['auth/user']?._id
        if (userId) {
          goal.userId = userId
          await authApi.addGoal(goal)
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
};
