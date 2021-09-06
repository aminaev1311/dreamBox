<template>
  <div class="goal_icon" :class="goalsClass">
    <div class="icon"></div>
    <small v-if="theme" class="goal_text"> {{ type }} </small>
    <small v-else class="goal_text"> Goal {{ goalNumber ? goalNumber : "" }} </small>
  </div>
</template>

<script>
import goalsTypes from "@/config/goals-types";

export default {
  props: {
    theme: {
      type: Boolean,
      default: false,
    },
    goalNumber: {
      type: Number,
      default: null,
    },
    type: {
      type: String,
      required: true,
      validator: (value) => {
        return goalsTypes.some((v) => v === value);
      },
    },
  },
  data() {
    return {
      goals: [],
    };
  },
  computed: {
    goalsClass() {
      return this.goals?.find(({ title }) => title === this.type)?._class;
    },
  },
  mounted() {
    this.goals = goalsTypes.map((type, index) => ({
      title: type,
      _class: `goal-${type.replace("&", "-")}`,
    }));
  },
};
</script>

<style lang="scss" scoped>
.goal_icon {
  display: flex;
  min-width: 89px;
  height: 28px;
  border-radius: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 14px;
  box-sizing: border-box;
}
.goal_text {
  position: relative;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: #ffffff;
  margin-left: 15px;
}

.img_goal {
  position: absolute;
  display: inline-block;
  width: 14px;
  height: 13px;
  margin-right: 40px;
}
.goal-family-friends {
  background-color: #fa7d98;
  & > .icon {
    width: 15px;
    height: 15px;
    background: url("~@i/app/common/family.svg") no-repeat;
    background-position: center;
  }
}
.goal-career {
  background-color: #f2994a;
  & > .icon {
    display: flex;
    width: 15px;
    height: 15px;
    background: url("~@i/app/common/career.svg") no-repeat;
    background-position: center;
  }
}
.goal-self-development {
  background-color: #57c238;
  & > .icon {
    display: flex;
    width: 15px;
    height: 15px;
    background: url("~@i/app/common/self-development.svg") no-repeat;
    background-position: center;
  }
}
.goal-spiritual {
  background-color: #03a9de;
  & > .icon {
    display: flex;
    width: 15px;
    height: 15px;
    background: url("~@i/app/common/spititual.svg") no-repeat;
    background-position: center;
  }
}
.goal-finance {
  background-color: #118743;
  & > .icon {
    display: flex;
    width: 15px;
    height: 15px;
    background: url("~@i/app/common/finance.svg") no-repeat;
    background-position: center;
  }
}
.goal-sports {
  background-color: #900093;
  & > .icon {
    display: flex;
    width: 15px;
    height: 15px;
    background: url("~@i/app/common/athletics.svg") no-repeat;
    background-position: center;
  }
}
.goal-health {
  background-color: #eb5757;
  & > .icon {
    display: flex;
    width: 15px;
    height: 15px;
    background: url("~@i/app/common/health.svg") no-repeat;
    background-position: center;
  }
}
.goal-relax {
  background-color: #1100d4;
  & > .icon {
    display: flex;
    width: 15px;
    height: 15px;
    background: url("~@i/app/common/relax.svg") no-repeat;
    background-position: center;
  }
}
</style>
