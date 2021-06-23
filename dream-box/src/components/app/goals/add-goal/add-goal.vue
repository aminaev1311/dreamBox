<template>
  <form class="add-goal" @submit.prevent="() => {}">
    <div class="goal-name">
      <ChooseTheme />
      <input
        type="text"
        name="goal-name"
        class="input-goal-name"
        placeholder="Name of the goal"
      />
      <button class="menu"></button>
      <button class="close"></button>
    </div>
    <div class="details">
      <input type="text" name="datails" placeholder="Details" />
    </div>
    <div class="metrics">
      <span class="title">Metrics</span>
      <!--   <MetricsQuantity /> -->
      <input type="text" class="units" name="units" placeholder="units" />
    </div>
    <div class="tactits-wrapper">
      <span class="title">Tactics</span>
      <div class="tactics">
        <p v-for="(tactic, i) in goal.tactics" :key="tactic.id">
          {{ i + 1 }}. {{ tactic.name.toUpperCase() }}
        </p>
      </div>
      <AddMore @add-tactic="add($event)" />
    </div>
  </form>
</template>

<script>
import ChooseTheme from "@c/app/goals/add-goal/choose-theme";
import AddMore from "@c/app/goals/add-goal/add-more";
import uid from "uniqid";
/* import MetricsQuantity from "@c/app/goals/add-goal/metrics-quantity"; */
export default {
  components: {
    ChooseTheme,
    AddMore,
    /* MetricsQuantity, */
  },
  data() {
    return {
      goal: {
        id: null,
        theme: "",
        name: "",
        metrics: {
          number: 0,
          units: "",
        },
        tactics: [],
      },
    };
  },
  methods: {
    add(tactic) {
      this.goal.tactics.push({ id: uid(), name: tactic });
    },
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