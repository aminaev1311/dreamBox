<template>
  <button
    :type="typeBtn"
    :class="[$style[color], $style['button-create']]"
    :disabled="isDisabled"
    @click="$emit('click')"
    :style="`width: ${width}px;`"
  >
    <span v-if="!isLoad">
      <slot></slot>
    </span>
    <div v-else class="spin primary" style="width: 1.5rem; height: 1.5rem"></div>
  </button>
</template>

<script>
export default {
  props: {
    isLoad: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    typeBtn: {
      type: String,
      default: "submit",
    },
    color: {
      type: String,
    },
    width: {
      type: Number,
      default: 132,
    },
  },
  emits: {
    click: null,
  },
};
</script>

<style lang="scss" module>
$danger: rgb(216, 87, 87);
$info: rgb(59, 219, 72);
.button-create {
  cursor: pointer;
  outline: none;
  border: none;
  min-height: 43px;
  background-color: $color-buttons;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-light;
}

.button-create:hover {
  background-color: darken($color-buttons, 20%);
}

.button-create.danger {
  background-color: $danger;
}

.button-create.danger:hover {
  background-color: darken($danger, 20%);
}
.button-create.info {
  background-color: $info;
}

.button-create.info:hover {
  background-color: darken($info, 20%);
}

.button-create:active {
  transform: scale(0.99);
}

.button-create:disabled {
  cursor: not-allowed;
  background-color: $color-buttons-disabled;
  color: $color-font-disabled;
}
</style>
