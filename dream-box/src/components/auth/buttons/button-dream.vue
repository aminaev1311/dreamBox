<template>
  <button
    class="button_dream-box"
    :disabled="isDisabled"
    @click="$emit('event-fb')"
  >
    Сохранить
  </button>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    "event-fb": null,
  },
};
</script>

<style  lang="scss" scoped>
.button_dream-box {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 15px 19px;
  border-radius: 8px;
  border: none;
  position: static;
  width: 134px;
  height: 39px;
  left: 0px;
  top: 280px;
  background: $color-buttons;
  font-family: $base-ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: $color-font-light;
}
.button_dream-box:hover {
  background: darken($color-buttons, 10%);
}
.button_dream-box:active {
  background: darken($color-buttons, 20%);
}

.button_dream-box:disabled {
  color: $color-font-light;
  cursor: not-allowed;
  background: lighten($color-buttons, 30%);
}
</style>
