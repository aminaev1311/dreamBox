<template>
  <div class="goal_icon_cg" ref="div" :style="{ backgroundColor: gColor }">
    <div class="img_goal" :class="goal_type"></div>
    <small class="goal_text_cg"> Goal {{ id }}</small>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
      validator: (value) => {
        return typeof value === "number";
      },
    },
  },
  data() {
    return {
      gColor: null,
      gTitle: null,
      goals: [
        { id: 1, title: "family & friends", color: "#FA7D98", class_goal: "goal_type_1" },
        { id: 2, title: "career", color: "#F2994A", class_goal: "goal_type_2" },
        { id: 3, title: "self-development", color: "#57C238", class_goal: "goal_type_3" },
        { id: 4, title: "spiritual", color: "#03A9DE", class_goal: "goal_type_4" },
        { id: 5, title: "finance", color: "#118743", class_goal: "goal_type_5" },
        { id: 6, title: "sports", color: "#900093", class_goal: "goal_type_6" },
        { id: 7, title: "health", color: "#EB5757", class_goal: "goal_type_7" },
        { id: 8, title: "relax", color: "#1100D4", class_goal: "goal_type_8" },
      ],
      goal_type: null,
    };
  },
  mounted() {
    this.goals.forEach((item) => {
      if (this.id === item.id) {
        this.gColor = item.color;
        this.gTitle = item.title;
        console.log(this.gTitle);
        this.goal_type = item.class_goal;
        this.$refs.div.style.backgroundColor = this.gColor;
        this.$emit("goal-title", this.gTitle);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.goal_icon_cg {
  margin: 0 0 28px;
  position: absolute;
  display: flex;
  width: 89px;
  height: 28px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;

  .goal_text_cg {
    position: relative;
    font-family: $base-ff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #ffffff;
  }
  .goal_text_cg::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 11px;
    margin-right: 7px;
  }
  .img_goal {
    position: absolute;
    display: inline-block;
    width: 12px;
    height: 11px;
    margin-right: 40px;
  }
  .goal_type_1 {
    background-image: url("~@i/auth/family.png");
  }
  .goal_type_2 {
    background-image: url("~@i/auth/career.png");
  }
  .goal_type_3 {
    background-image: url("~@i/auth/self-development.png");
  }
  .goal_type_4 {
    background-image: url("~@i/auth/spititual.png");
  }
  .goal_type_5 {
    background-image: url("~@i/auth/finance.png");
  }
  .goal_type_6 {
    background-image: url("~@i/auth/athletics.png");
  }
  .goal_type_7 {
    background-image: url("~@i/auth/health.png");
  }
  .goal_type_8 {
    background-image: url("~@i/auth/relax.png");
  }
}
</style>
