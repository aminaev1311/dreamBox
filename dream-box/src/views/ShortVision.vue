<template>
  <h3>Short vision</h3>
  <SVReview/>
  <CurrentsGoals/>
</template>

<script>
import SVReview from "@c/auth/short-vision/children/SV-review";
import CurrentsGoals from "@c/auth/short-vision/children/Currents-Goals";

export default {
  components: {CurrentsGoals, SVReview }
}
</script>
<style>
h3{
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
