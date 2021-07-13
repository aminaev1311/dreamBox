<template>
  <div class="short-vision">
  <h3>Short vision</h3>
  <SVReview />
  <CurrentsGoals />
  </div>
</template>

<script>
import CurrentsGoals from "@c/app/vision/children/current-goals";
import SVReview from "@c/app/vision/children/short-vision-review";
export default {
  components: { SVReview, CurrentsGoals },
};
</script>

<style lang="scss" scoped>
.short-vision{
  max-width: 1143px;
  width:100%;
}
h3 {
  margin-top: 35px;
  margin-bottom: 15px;
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
