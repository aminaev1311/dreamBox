<template>
  <div v-if="goal.theme" class="wrapper-goal">
    <HeaderGoal v-if="_view" :goal="_goal" :status="_view" @click="_view = !_view" />
    <BodyGoal v-else :goal="_goal" :status="_view" @click="_view = !_view" />
  </div>
</template>

<script>
import HeaderGoal from "@c/app/goals/goal/header-goal";
import BodyGoal from "@c/app/goals/goal/body-goal";

export default {
  components: {
    HeaderGoal,
    BodyGoal,
  },
  data() {
    return {
      _goal: {},
      _view: true,
    };
  },
  props: {
    goal: {
      type: Object,
      required: true,
    },
    view: {
      type: Boolean,
      default: true,
    },
  },

  watch: {
    view() {
      this._view = this.view;
    },
  },
  mounted() {
    this._view = this.view;
    if (this.goal) {
      this._goal = this.goal;
    }
  },
};
</script>

<style lang="scss" scoped>
.goal {
  @include fc-c-c-b;
  background-color: $color-base-gray;
  padding: 12px 16px 18px;
  border-radius: 8px;
  margin-bottom: 18px;
}
.goal-name {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-goal-name {
  margin: 0 20px;
  display: flex;
  flex-grow: 1;
  width: auto;
  height: 28px;
  border-radius: 8px;
  background-color: $color-base-light;
  border: 1px solid transparent !important;
  @include o-b-none;
  padding: 4px 20px;
  box-sizing: border-box;
  @include placeholder {
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #a9acbf;
  }
}

.input-goal-name.error {
  background: lighten($color-base-error, 35);
  border-color: $color-base-error !important;
  @include placeholder {
    color: $color-base-light;
  }
}

.close {
  display: block;
  background-color: #e6e9f8;
  width: 100%;
  width: 24px !important;
  height: 24px !important;
  border-radius: 50%;
  margin-left: 10px;
  @include o-b-none;
  box-sizing: border-box;
}

.close {
  background-image: url("~@/assets/images/goals/arrow-top-gray.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.menu:hover,
.close:hover {
  background-color: lighten(#e6e9f8, 20%);
}
.menu:active,
.close:active {
  background-color: lighten($color-base-blue, 40%);
}

.details {
  margin-top: 16px;
  width: 100%;
  border-bottom: 2px solid #e6e9f8;
  padding-bottom: 15px;
  box-sizing: border-box;
  & > input {
    display: flex;
    width: 100%;
    flex-grow: 1;
    height: 28px;
    border-radius: 8px;
    background-color: $color-base-light;
    @include o-b-none;
    padding: 4px 20px;
    box-sizing: border-box;
    @include placeholder {
      font-family: $base-ff;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.1px;
      color: #a9acbf;
    }
  }
}
.metrics {
  width: 100%;
  justify-content: flex-start;
  margin-top: 18px;
  display: flex;
  box-sizing: border-box;
  & > .title {
    font-family: $base-ff;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: $color-font-dark;
    margin-right: 8px;
  }
  & > .units {
    @include o-b-none;
    width: 100%;
    max-width: 350px;
    height: 18px;
    padding: 2px 5px;
    border-radius: 3px;
    box-sizing: border-box;
    font-family: $base-ff;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.1px;
    margin-left: 8px;
    @include placeholder {
      font-family: $base-ff;
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.1px;
      color: #a9acbf;
    }
  }
}

.tactits-wrapper {
  margin-top: 18px;
  width: 100%;
  min-height: 180px;
  background-color: $color-base-light;
  @include fc-s-s-b;
  padding: 15px;
  border-radius: 8px;
  & > .title {
    font-family: $base-ff;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #2d3446;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0 0 13px;
  }
  & > .tactics {
    @include fc-c-c-b;
    align-items: flex-start !important;
    & > p {
      font-family: $base-ff;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.1px;
      text-transform: uppercase;
      color: #a9acbf;
      margin-bottom: 14px;
    }
  }
}
</style>
