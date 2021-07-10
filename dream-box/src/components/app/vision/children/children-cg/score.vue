<template>
  <div class="score">
    <div class="score_text">
      <ScoreAssessment>
        <h3>Goal score</h3>
        <h4>{{ descr }}</h4>
      </ScoreAssessment>
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
import ScoreAssessment from "@c/app/vision/children/children-cg/score/score-assessment";
import DoughnutChart from "@c/app/vision/children/children-cg/score/doughnut-chart";
export default {
  components: { ScoreAssessment, DoughnutChart },
  data() {
    return {
      descr: "could be better",
      percent: 53,
    };
  },
};
</script>

<style lang="scss" scoped>
.score {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-item: center;
  width: 334px;
  height: 120px;
  border-radius: 8px;
  padding: 12px 16px;
  background: #fff;
  box-sizing: border-box;
}
.score_text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.a_details {
  padding-top: 25px;
}
.details {
  font-family: $base-ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #1e92fa;
  text-decoration: none;
}
h3 {
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: left;
}
h4 {
  font-family: $base-ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  margin-top: 5px;
  text-transform: uppercase;
  color: $color-font-yellow;
}
</style>
