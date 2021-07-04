<template>
  <div class="second-ig">
    <GoalIcon :numbers="numbers" :colors="colors" :comp="comp"></GoalIcon>
    <Counter>
      <h3>{{ title }}</h3>
    </Counter>
    <Score />
  </div>
</template>

<script>
import GoalIcon from "@c/app/vision/children/children-cg/goal-icon";
import Counter from "@c/app/vision/children/children-cg/counter";
import Score from "@c/app/vision/children/children-cg/score";
export default {
  name: "Second-ig",
  components: { Score, GoalIcon, Counter },
  props: {
    numbers: Number,
    colors: String,
    comp: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 59px 15px 17px 0;
  text-align: left;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: $color-font-dark;
}
.second-ig {
  display: flex;
  position: relative;
  width: 366px;
  height: 239px;
  flex-direction: column;
  background: #f0f3fc;
  border-radius: 9px;
  margin-left: 22px;
  padding: 15px;
  box-sizing: border-box;
}
</style>
