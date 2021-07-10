<template>
  <div class="record-ec">
    <GoalIcon :color="item.color" :item="item" :goal_icon="item.goal_icon"></GoalIcon>
    <Counter>
      <h3>{{ item.title }}</h3>
    </Counter>
    <Score></Score>
  </div>
</template>

<script>
import GoalIcon from "@c/app/vision/children/children-cg/goal-icon";
import Counter from "@c/app/vision/children/children-cg/counter";
import Score from "@c/app/vision/children/children-cg/score";
export default {
  name: "record-ec",
  props: {
    item: {
      type: Object,
      required: true,
      validator : value =>{
        return (typeof value === "object" && !Array.isArray(value) && value !== null)
      }}
    // color: String,
    // goal_icon: String,
    // title: String,
    // key: Number
  },
  components: { Score, Counter, GoalIcon },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 44px 15px 17px 0;
  text-align: left;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: $color-font-dark;
}
.record-ec {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 366px;
  height: 100%;
  min-height: 239px;
  background: #f0f3fc;
  border-radius: 9px;
  margin: 0 22px 0 0;
  padding: 15px;
  box-sizing: border-box;
}
</style>
