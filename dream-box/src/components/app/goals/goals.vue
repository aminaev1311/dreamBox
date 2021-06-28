<template>
  <div class="wrapper-goals">
    <WeekHeader />
    <h1>Start your first goal</h1>
    <AddGoal />
    <BtnBlue title="Create a goal" />
  </div>
</template>

<script>
import BtnBlue from "@c/app/common/buttons/w-btn-blue";
import WeekHeader from "@c/app/common/w-header";
import AddGoal from "@c/app/goals/add-goal";

export default {
  components: {
    BtnBlue,
    WeekHeader,
    AddGoal,
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
