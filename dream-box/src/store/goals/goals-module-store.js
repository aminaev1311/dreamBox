const defaultGoal = () => [
  {
    id: 111,
    view: "is-created",
    theme: "career",
    ditails: "some text ....",
    name: "first Goal",
    viewWindowGoal: "close",
    metrics: {
      quantity: "3",
      units: "hours",
    },
    tactics: [
      {
        id: "1krrtrtowctik",
        name: "rfesrwe",
        weeks: [
          { weekNumber: 1, weeksValue: "default" },
          { weekNumber: 2, weeksValue: "default" },
          { weekNumber: 3, weeksValue: "default" },
          { weekNumber: 4, weeksValue: "default" },
          { weekNumber: 5, weeksValue: "default" },
          { weekNumber: 6, weeksValue: "default" },
          { weekNumber: 7, weeksValue: "default" },
          { weekNumber: 8, weeksValue: "default" },
          { weekNumber: 9, weeksValue: "default" },
          { weekNumber: 10, weeksValue: "default" },
          { weekNumber: 11, weeksValue: "default" },
          { weekNumber: 12, weeksValue: "default" },
        ],
      },
    ],
  },
  {
    id: 454545,
    view: "is-created",
    theme: "health",
    ditails: "some text ....",
    name: "first Goal",
    viewWindowGoal: "close",
    metrics: {
      quantity: "3",
      units: "hours",
    },
    tactics: [
      {
        id: "1krowcdreetik",
        name: "rfesrwe",
        weeks: [
          { weekNumber: 1, weeksValue: "default" },
          { weekNumber: 2, weeksValue: "default" },
          { weekNumber: 3, weeksValue: "default" },
          { weekNumber: 4, weeksValue: "default" },
          { weekNumber: 5, weeksValue: "default" },
          { weekNumber: 6, weeksValue: "default" },
          { weekNumber: 7, weeksValue: "default" },
          { weekNumber: 8, weeksValue: "default" },
          { weekNumber: 9, weeksValue: "default" },
          { weekNumber: 10, weeksValue: "default" },
          { weekNumber: 11, weeksValue: "default" },
          { weekNumber: 12, weeksValue: "default" },
        ],
      },
    ],
  },
];

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
    UPDATE_GOAL(state, goal) {},
  },
  actions: {},
};
