<template>
  <button
    @click="$emit('click')"
    :disabled="isDisabled"
    :style="`width: ${width}; min-height: ${height};`"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    isDisabled: { type: Boolean, default: false },
    width: { type: String, default: "250px" },
    height: { type: String, default: "60px" },
  },
  emits: {
    click: null,
  },
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  border-radius: 8px;
  border: none;
  outline: none;
  color: $color-font-light;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-base-blue;

  font-family: $base-ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
}
button:hover {
  background-color: darken($color-base-blue, 20%);
}
button:active {
  transform: scale(0.98);
}
</style>
