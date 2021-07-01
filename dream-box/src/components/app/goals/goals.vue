<template>
  <div class="wrapper-goals">
    <WeekHeader />
    <h1>Start your first goal</h1>
    <AddGoal />
  </div>
</template>

<script>
import WeekHeader from "@c/app/common/w-header";
import AddGoal from "@c/app/goals/goal";
export default {
  components: {
    WeekHeader,
    AddGoal,
  },
  methods: {
    addGoal() {},
  },
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
