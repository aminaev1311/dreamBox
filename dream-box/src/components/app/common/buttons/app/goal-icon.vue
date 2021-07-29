<template>
  <div class="goal_icon_cg" ref="div" :class="goalIcon">
    <div class="img_goal" :class="goal_type"></div>
    <small class="goal_text_cg"> Goal </small>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => {
        return typeof value === "string";
      },
    },
  },
  data() {
    return {
      goalIcon: null,
      gTitle: null,
      goals: [
        { title: "family", goal_icon: "goal_icon_1", class_goal: "goal_type_1" },
        { title: "career", goal_icon: "goal_icon_2", class_goal: "goal_type_2" },
        { title: "self-development", goal_icon: "goal_icon_3", class_goal: "goal_type_3" },
        { title: "spititual", goal_icon: "goal_icon_4", class_goal: "goal_type_4" },
        { title: "finance", goal_icon: "goal_icon_5", class_goal: "goal_type_5" },
        { title: "sports", goal_icon: "goal_icon_6", class_goal: "goal_type_6" },
        { title: "health", goal_icon: "goal_icon_7", class_goal: "goal_type_7" },
        { title: "relax", goal_icon: "goal_icon_8", class_goal: "goal_type_8" },
      ],
      goal_type: null,
    };
  },
  mounted() {
    this.goals.forEach((item) => {
      if (this.type === item.title) {
        this.goalIcon = item.goal_icon;
        this.gTitle = item.title;
        console.log(this.gTitle);
        this.goal_type = item.class_goal;
        this.$emit("goal-title", this.gTitle);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.goal_icon_1 {
  background-color: #fa7d98;
}
.goal_icon_2 {
  background-color: #f2994a;
}
.goal_icon_3 {
  background-color: #57c238;
}
.goal_icon_4 {
  background-color: #03a9de;
}
.goal_icon_5 {
  background-color: #118743;
}

.goal_icon_6 {
  background-color: #900093;
}
.goal_icon_7 {
  background-color: #eb5757;
}
.goal_icon_8 {
  background-color: #1100d4;
}
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
    width: 14px;
    height: 13px;
    margin-right: 40px;
  }
  .goal_type_1 {
    background: url("~@i/auth/app/common-images/family.svg") no-repeat;
  }
  .goal_type_2 {
    background: url("~@i/auth/app/common-images/career.svg") no-repeat;
  }
  .goal_type_3 {
    background: url("~@i/auth/app/common-images/self-development.svg") no-repeat;
  }
  .goal_type_4 {
    background: url("~@i/auth/app/common-images/spititual.svg") no-repeat;
  }
  .goal_type_5 {
    background: url("~@i/auth/app/common-images/finance.svg") no-repeat;
  }
  .goal_type_6 {
    background: url("~@i/auth/app/common-images/athletics.svg") no-repeat;
  }
  .goal_type_7 {
    background: url("~@i/auth/app/common-images/health.svg") no-repeat;
  }
  .goal_type_8 {
    background: url("~@i/auth/app/common-images/relax.svg") no-repeat;
  }
}
</style>
