<template>
  <div class="custom-check-box" :class="customClass"></div>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: "unChecked",
    },
  },
  computed: {
    customClass() {
      return this.status;
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-check-box {
  cursor: pointer;
  margin: 0 3px;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background-color: #f0f3fc;
  background-repeat: no-repeat;
  background-position: center;

  &.unChecked {
    background-color: #f0f3fc;
    background-image: none;
  }

  &.checked {
    background-color: #c8e2ff;
    background-image: none;
  }

  &.completed {
    background-color: #57c238;
    background-image: url("~@/assets/images/app/common/vmark.svg");
  }

  &.unCompleted {
    background-color: #fa7d98;
    background-image: url("~@/assets/images/app/common/cross.svg");
  }
}
</style>