<template>
  <h3>Short vision</h3>
  <SVReview />
  <CurrentsGoals />
</template>

<script>
import CurrentsGoals from "@c/app/vision/children/current-goals";
import SVReview from "@c/app/vision/children/SV-review";
export default {
  components: { SVReview, CurrentsGoals },
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: left;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 46px;
  letter-spacing: 0.2px;
  color: $color-font-dark;
}
</style>
