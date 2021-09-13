<template>
  <form v-if="_goal?.name" class="goal" @submit.prevent="() => {}">
    <div class="goal-name">
      <ChooseTheme v-model:theme="goal.theme" />
      <input type="text" name="goal-name" class="input-goal-name" v-model="_goal.name" />
      <GoalMenuButton
        :isDisabled="isDisabled"
        :menuList="[
          { title: 'Delete goal', cb: () => $store.dispatch('goals/deleteGoalById', goal._id) },
        ]"
      />
      <OpenCloseGoal :status="status" @click="openClose" />
    </div>
    <div class="details">
      <input type="text" name="datails" placeholder="Details" v-model="_goal.ditails" />
      {{ _goal.details }}
    </div>
    <div class="metrics">
      <span class="title">Metrics</span>
      <MetricsQuantity
        v-model:quantity="_goal.metrics.quantity"
        :quantityProp="_goal.metrics.quantity"
      />
      <input
        type="text"
        class="units"
        name="units"
        placeholder="units"
        v-model="_goal.metrics.units"
      />
    </div>
    <div class="tactits-and-score">
      <div class="tactics-wrapper">
        <TacticsHeader />
        <div class="tactics">
          <div class="tactic" v-for="(tactic, i) in _goal.tactics" :key="tactic.id">
            <p>{{ i + 1 }}. {{ tactic.name.toUpperCase() }}</p>
            <div class="weeks">
              <div class="week" v-for="week in tactic.weeks" :key="week.id"></div>
            </div>
          </div>
        </div>
        <AddMore @add-tactic="addTactic($event)" :empty="!_goal.tactics.length" />
      </div>
    </div>
  </form>
</template>

<script>
import ChooseTheme from "@c/app/goals/goal/choose-theme";
import AddMore from "@c/app/goals/goal/add-more";
import MetricsQuantity from "@c/app/goals/goal/metrics-quantity";
import GoalMenuButton from "@c/app/common/buttons/goal-menu";
import OpenCloseGoal from "@c/app/common/buttons/roll-up-or-expend-goal";
import TacticsHeader from "@c/app/common/taсtics-header";

import uid from "uniqid";

export default {
  components: {
    ChooseTheme,
    AddMore,
    MetricsQuantity,
    GoalMenuButton,
    OpenCloseGoal,
    TacticsHeader,
  },

  data() {
    return {
      _goal: {},
    };
  },

  props: {
    goal: {
      type: Object,
      reqired: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    click: null,
  },
  computed: {},

  methods: {
    openClose() {
      this.$emit("click");
    },
    addTactic(tactic) {
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
    if (this.goal) {
      this._goal = this.goal;
    }
  },
};
</script>

<style lang="scss" scoped>
.goal {
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

.tactits-and-score {
  margin-top: 18px;
  width: 100%;
  min-height: 180px;
  background-color: $color-base-light;
  @include fc-s-s-b;
  padding: 15px;
  border-radius: 8px;
  & > .tactics-wrapper {
    display: flex;
    max-width: 850px;
    width: 100%;
    flex-direction: column;
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
      & > .tactic {
        display: flex;
        width: 100%;
        margin: 2px 0;
        justify-content: space-between;
        & > .weeks {
          display: flex;
          max-width: 426px;
          width: 100%;
          box-sizing: border-box;
          & > .week {
            cursor: pointer;
            width: 30px;
            height: 30px;
            margin: 0 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #f0f3fc;
            border-radius: 8px;
            box-sizing: border-box;
          }
        }
      }
    }
  }
}
</style>
