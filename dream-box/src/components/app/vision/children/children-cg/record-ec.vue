<template>
  <div class="record-ec">
    <GoalIcon :numbers="numbers" :colors="colors" :comp="comp"></GoalIcon>
    <Counter>
      <h3>{{ title }}</h3>
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
    numbers: Number,
    colors: String,
    comp: String,
    title: String,
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
  height: 267px;
  background: #f0f3fc;
  border-radius: 9px;
  padding: 15px;
  box-sizing: border-box;
}
</style>
