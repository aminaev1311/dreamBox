<template>
  <button
    class="menu"
    :class="{ off: status }"
    :disabled="disabled"
    @click="$emit('click')"
  ></button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    click: null,
  },
};
</script>

<style lang="scss" scoped>
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
  transition: transform 0.3s;
}

.close {
  background-image: url("~@/assets/images/goals/arrow-top-gray.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.close.off {
  transform: rotate(180deg);
}

.close:disabled {
  cursor: not-allowed;
  background-color: lighten(#e6e9f8, 30%);
}

.close:hover {
  background-color: lighten(#e6e9f8, 20%);
}

.close:active {
  background-color: lighten($color-base-blue, 40%);
}
</style>
