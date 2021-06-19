<template>
  <div class="wrapper-goals">
    <WeekHeader />
    <BtnBlue title="Create a goal"/>
  </div>
</template>

<script>
import BtnBlue from "@c/app/common/buttons/w-btn-blue";
import WeekHeader from "@c/app/common/w-header";

export default {
  components: {
    BtnBlue,
    WeekHeader,
  },
};
</script>

<style>
</style>