<template>
  <div class="wrapper-goals">
    <WeekHeader />
    <h1>Start your first goal</h1>
    <div v-if="goals.length" class="wrapper-goals">
      <Goal v-for="goal in goals" :key="goal.id" :goal="goal" />
    </div>
    <AddGoal />
  </div>
</template>

<script>
import WeekHeader from "@c/app/common/w-header";
import Goal from "@c/app/goals/goal";
import AddGoal from "@c/app/goals/goal/add-goal";
import { mapGetters } from "vuex";
export default {
  components: {
    WeekHeader,
    Goal,
    AddGoal,
  },
  computed: {
    ...mapGetters({ goals: "goals/getGoals" }),
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.wrapper-goals {
  margin-top: 15px;
}
h1 {
  margin: 32px 0 10px;
  display: flex;
  justify-content: flex-start;
  font-family: $base-ff;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: $color-font-dark;
}
</style>
