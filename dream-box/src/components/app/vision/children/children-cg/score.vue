<template>
  <div class="score">
    <ScoreAssessment>
      <h3>Goal score</h3>
      <h4>{{ descr }}</h4>
    </ScoreAssessment>
    <div>
      <a href="" class="details">see details </a>
    </div>
  </div>
</template>
<script>
import ScoreAssessment from "@c/app/vision/children/children-cg/score/score-assessment";
export default {
  components: { ScoreAssessment },
  data() {
    return {
      descr: "could be better",
    };
  },
};
</script>

<style lang="scss" scoped>
.score {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 334px;
  height: 120px;
  border-radius: 8px;
  padding: 12px 16px;
  background: #fff;
  box-sizing: border-box;
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
</style>
