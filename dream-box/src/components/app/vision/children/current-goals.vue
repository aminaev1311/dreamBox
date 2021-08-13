<template>
  <h3>Currents goals</h3>
  <div class="currents-goals">
    <Goal v-for="(type, i) in goals" :type="type" :goalNumber="i + 1" :key="type"> </Goal>
  </div>
</template>

<script>
import goalsTypes from "@/config/goals-types";
import Goal from "@c/app/vision/children/children-cg/goal";
export default {
  name: "Currents-Goals",
  components: { Goal },
  data() {
    return {
      goals: goalsTypes,
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 15px;
  margin-top: 20px;
  text-align: left;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 46px;
  letter-spacing: 0.2px;
  color: $color-font-dark;
}
.currents-goals {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
