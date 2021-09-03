<template>
  <div class="record-ec">
    <div class="header">
      <GoalIcon :type="career" :goalNumber="goalNumber"></GoalIcon>
      <GoalMenu class="goal-menu" />
    </div>
    <h3 class="title">{{ "Test title" }}</h3>
    <div class="score">
      <div class="score_text">
        <h3 class="score_h3">Goal score</h3>
        <h4>{{ descr }}</h4>
        <div class="a_details">
          <a href="" class="details">see details </a>
        </div>
      </div>
      <div class="score_dough">
        <DoughnutChart :percent="percent"></DoughnutChart>
      </div>
    </div>
  </div>
</template>

<script>
import GoalIcon from "@c/app/common/goal-icon";
import GoalMenu from "@c/app/common/buttons/goal-menu";
import DoughnutChart from "@c/app/vision/children/children-cg/doughnut-chart";
export default {
  name: "record-ec",
  props: {
    type: {
      type: String,
      required: true,
    },
    goalNumber: {
      type: Number,
      default: null,
    },
  },
  components: { DoughnutChart, GoalIcon, GoalMenu },
  data() {
    return {
      title: null,
      descr: "could be better",
      percent: 53,
    };
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 44px 15px 17px 0;
  text-align: left;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: $color-font-dark;
}
.record-ec {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 366px;
  height: 100%;
  min-height: 239px;
  background: #f0f3fc;
  border-radius: 9px;
  margin: 0 22px 22px 0;
  padding: 15px;
  box-sizing: border-box;
  & > .header {
    display: flex;
  }
  & > .title {
    margin: 15px 0;
  }
}
.goal-menu {
  margin-left: auto;
}
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

  .score_text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .score_h3 {
      margin: 0 !important;
      font-family: $base-ff;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      text-align: left;
      color: #2d3446;
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
    .a_details {
      padding-top: 25px;

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
    }
  }
}
</style>
