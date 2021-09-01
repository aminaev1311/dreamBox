<template>
  <button class="menu" :disabled="isDisabled"></button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  cursor: pointer;
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
.menu {
  background-image: url("~@/assets/images/goals/three-dots.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.menu:disabled {
  cursor: not-allowed;
  background-color: lighten(#e6e9f8, 30%);
}
</style>
