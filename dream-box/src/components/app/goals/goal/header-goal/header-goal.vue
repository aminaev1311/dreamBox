<template>
  <div class="closed-goal">
    <GoalIcon :type="goal?.theme" :theme="true"></GoalIcon>
    <p class="goal-name-closed">{{ goal.name }}</p>
    <div class="control-buttons">
      {{isDisabled}}
      <GoalMenuButton :isDisabled="isDisabled" />
      <OpenCloseGoal :isDisabled="isDisabled" :status="status" @click="openClose" />
    </div>
  </div>
</template>

<script>
import GoalMenuButton from "@c/app/common/buttons/goal-menu";
import OpenCloseGoal from "@c/app/common/buttons/roll-up-or-expend-goal";
import GoalIcon from "@c/app/common/goal-icon";
export default {
  components: {
    OpenCloseGoal,
    GoalMenuButton,
    GoalIcon,
  },
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    goal: {
      type: Object,
      required: true,
    },
    // возможно он не понадобится.
    status: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    click: null,
  },
  methods: {
    openClose() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.closed-goal {
  display: flex;
  width: 100%;
  background-color: $color-base-gray;
  padding: 12px 16px 12px;
  border-radius: 8px;
  margin-bottom: 18px;
  align-items: center;
  box-sizing: border-box;
}
.goal-name-closed {
  margin-left: 20px;
  font-family: $base_ff;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #52575c;
}
.control-buttons {
  display: flex;
  margin-left: auto;
}
</style>
