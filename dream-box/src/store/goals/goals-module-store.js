export default {
  namespaced: true,
  state: {
    goals: [],
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
    UPDATE_GOAL(state, goal) {},
  },
  actions: {},
};
