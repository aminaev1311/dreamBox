<template>
<div class="record-ec">
  <GoalIcon :numbers="numbers[0]"
            :colors="colors[0]"
            :comp="comp"
  ></GoalIcon>
  <Counter>
    <h3>{{ title }}</h3>
  </Counter>
  <Score>

  </Score>
</div>
</template>

<script>

import GoalIcon from "@c/auth/short-vision/children/children-cg/goal-icon";
import Counter from "@c/auth/short-vision/children/children-cg/counter";
import Score from "@c/auth/short-vision/children/children-cg/score";
export default {
  name: "record-ec",
  props:{
    numbers: Number,
    colors: String,
    comp: String,
    title: String
  },
  components: {Score, Counter, GoalIcon},
  data() {
    return{

    }
  }
}
</script>

<style scoped>
h3 {
  margin: 44px 15px 17px;
  text-align: left;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: $color-font-dark;
}
.record-ec{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 366px;
  height: 267px;
  background: #F0F3FC;
  border-radius: 9px;
  padding: 15px;
  box-sizing: border-box;
}
</style>

