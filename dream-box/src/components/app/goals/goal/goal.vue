<template>
  <div class="wrapper-goal">
    <form v-if="views.creating || views.isCreated" class="add-goal" @submit.prevent="() => {}">
      <div class="goal-name">
        <ChooseTheme v-model:theme="goal.theme" :error="errors.theme" />
        <input
          type="text"
          name="goal-name"
          class="input-goal-name"
          :class="{ error: errors.name }"
          :placeholder="errors.name ? `This field can't be empty` : 'Name of the goal'"
          v-model="goal.name"
        />
        <button class="menu"></button>
        <button class="close"></button>
      </div>
      <div class="details">
        <input type="text" name="datails" placeholder="Details" v-model="goal.details" />
      </div>
      <div class="metrics">
        <span class="title">Metrics</span>
        <MetricsQuantity
          v-model:quantity="goal.metrics.quantity"
          :quantityProp="goal.metrics.quantity"
        />
        <input
          type="text"
          class="units"
          name="units"
          placeholder="units"
          v-model="goal.metrics.units"
        />
      </div>
      <div class="tactits-wrapper">
        <span class="title">Tactics</span>
        <div class="tactics">
          <p v-for="(tactic, i) in goal.tactics" :key="tactic.id">
            {{ i + 1 }}. {{ tactic.name.toUpperCase() }}
          </p>
        </div>
        <AddMore @add-tactic="add($event)" :empty="errors.tactics" />
      </div>
    </form>
    <div class="buttons">
      <BtnBlue v-if="!views.isCreated" :title="titleForBautton" @click="createGoal" />
    </div>
  </div>
</template>

<script>
import ChooseTheme from "@c/app/goals/goal/choose-theme";
import AddMore from "@c/app/goals/goal/add-more";
import uid from "uniqid";
import MetricsQuantity from "@c/app/goals/goal/metrics-quantity";
import BtnBlue from "@c/app/common/buttons/w-btn-blue";
import { mapGetters } from "vuex";

const defaultGoal = () => ({
  id: null,
  view: "null",
  theme: "",
  ditails: "",
  name: "",
  metrics: {
    quantity: "",
    units: "",
  },
  tactics: [],
});

export default {
  components: {
    ChooseTheme,
    AddMore,
    MetricsQuantity,
    BtnBlue,
  },
  data() {
    return {
      goal: defaultGoal(),
      startCreateGoal: false,
    };
  },
  props: {
    goalProp: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters({ goals: "goals/getGoals" }),
    titleForBautton() {
      return !this.goals.length && !this.goal.id ? "Start" : "Create a goal";
    },
    errors() {
      return {
        theme: this.startCreateGoal && this.goal.theme === "",
        name: this.startCreateGoal && this.goal.name === "",
        tactics: this.startCreateGoal && !this.goal.tactics.length,
      };
    },
    // goal's fields are filled correctly/uncorrectly
    isValidGoalField() {
      return !Object.values(this.errors).some((v) => v);
    },
    views() {
      const {
        goal: { id, view },
      } = this;
      return {
        creating: id && view === "creating",
        isCreated: id && view === "is-created",
      };
    },
  },
  methods: {
    createGoal() {
      if (!this.initGoal()) return false;
      this.startCreateGoal = true;
      if (this.isValidGoalField) {
        this.goal.view = "is-created";
        this.$store.commit("goals/ADD_GOAL", this.goal);
        this.goal = defaultGoal();
        this.startCreateGoal = false;
      }
    },
    initGoal() {
      if (this.goal.id) return true;
      this.goal.id = uid();
      this.goal.view = "creating";
      return false;
    },
    setTheme(theme) {
      this.goal.theme = theme;
    },
    setMetricsQuantity(quantity) {
      this.goal.metrics.quantity = quantity;
    },
    add(tactic) {
      this.goal.tactics.push({ id: uid(), name: tactic, weeks: this.createWeeksForTactics() });
    },
    createWeeksForTactics() {
      const weeks = [];
      for (let number = 1; number < 13; number++) {
        weeks.push({
          weekNumber: number,
          weeksValue: "default",
        });
      }
      return weeks;
    },
  },
  mounted() {
    if (this.goalProp) {
      this.goal = this.goalProp;
    }
  },
};
</script>

<style lang="scss" scoped>
.add-goal {
  @include fc-c-c-b;
  background-color: $color-base-gray;
  padding: 12px 16px 18px;
  border-radius: 8px;
  margin-bottom: 18px;
}
.goal-name {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-goal-name {
  margin: 0 20px;
  display: flex;
  flex-grow: 1;
  width: auto;
  height: 28px;
  border-radius: 8px;
  background-color: $color-base-light;
  border: 1px solid transparent !important;
  @include o-b-none;
  padding: 4px 20px;
  box-sizing: border-box;
  @include placeholder {
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #a9acbf;
  }
}

.input-goal-name.error {
  background: lighten($color-base-error, 35);
  border-color: $color-base-error !important;
  @include placeholder {
    color: $color-base-light;
  }
}

.menu,
.close {
  display: block;
  background-color: #e6e9f8;
  width: 100%;
  width: 24px !important;
  height: 24px !important;
  border-radius: 50%;
  margin-left: 10px;
  @include o-b-none;
  box-sizing: border-box;
}
.menu {
  background-image: url("~@/assets/images/goals/three-dots.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.close {
  background-image: url("~@/assets/images/goals/arrow-top-gray.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.menu:hover,
.close:hover {
  background-color: lighten(#e6e9f8, 20%);
}
.menu:active,
.close:active {
  background-color: lighten($color-base-blue, 40%);
}

.details {
  margin-top: 16px;
  width: 100%;
  border-bottom: 2px solid #e6e9f8;
  padding-bottom: 15px;
  box-sizing: border-box;
  & > input {
    display: flex;
    width: 100%;
    flex-grow: 1;
    height: 28px;
    border-radius: 8px;
    background-color: $color-base-light;
    @include o-b-none;
    padding: 4px 20px;
    box-sizing: border-box;
    @include placeholder {
      font-family: $base-ff;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.1px;
      color: #a9acbf;
    }
  }
}
.metrics {
  width: 100%;
  justify-content: flex-start;
  margin-top: 18px;
  display: flex;
  box-sizing: border-box;
  & > .title {
    font-family: $base-ff;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: $color-font-dark;
    margin-right: 8px;
  }
  & > .units {
    @include o-b-none;
    width: 100%;
    max-width: 350px;
    height: 18px;
    padding: 2px 5px;
    border-radius: 3px;
    box-sizing: border-box;
    font-family: $base-ff;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.1px;
    margin-left: 8px;
    @include placeholder {
      font-family: $base-ff;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.1px;
      color: #a9acbf;
    }
  }
}

.tactits-wrapper {
  margin-top: 18px;
  width: 100%;
  min-height: 180px;
  background-color: $color-base-light;
  @include fc-s-s-b;
  padding: 15px;
  border-radius: 8px;
  & > .title {
    font-family: $base-ff;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #2d3446;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0 0 13px;
  }
  & > .tactics {
    @include fc-c-c-b;
    align-items: flex-start !important;
    & > p {
      font-family: $base-ff;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.1px;
      text-transform: uppercase;
      color: #a9acbf;
      margin-bottom: 14px;
    }
  }
}
</style>
