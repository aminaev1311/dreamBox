<template>
  <div class="score">
    <div class="score_text">
      <h3>Goal score</h3>
      <h4>{{ descr }}</h4>
      <div class="a_details">
        <a href="" class="details">see details </a>
      </div>
    </div>
    <div class="score_dough">
      <DoughnutChart :percent="percent"></DoughnutChart>
    </div>
  </div>
</template>
<script>
import DoughnutChart from "@c/app/vision/children/children-cg/doughnut-chart";
export default {
  components: { DoughnutChart },
  data() {
    return {
      descr: "could be better",
      percent: 53,
    };
  },
};
</script>

<style lang="scss" scoped></style>
