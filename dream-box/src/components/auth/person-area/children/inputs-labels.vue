<template>
  <div class="inputs_labels">
    <input class="input_dream-box" type="text" :value="value" @input="sendValue($event)" />
    <label class="label_frame_lk">{{ title }}</label>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  data() {
    return {
      isShow: false,
    };
  },
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    sendValue({ target }) {
      this.$emit("update:value", target.value);
    },
  },
};
</script>

<style lang="scss">
.errorInp {
  background-color: rgba(200, 3, 3, 0.1) !important;
}
.inputs_labels {
  position: relative;
  display: flex;

  .input_dream-box {
    height: 60px;
    max-width: 319px;
    width: 100%;
    border: none;
    border-radius: 8px;
    margin-bottom: 20px;
    outline: none;
    padding-left: 19px;
    padding-right: 19px;
    padding-top: 30px;
    padding-bottom: 10px;
    box-sizing: border-box;
    font-family: $base-ff;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: $color-gray-lk;
  }

  .label_frame_lk {
    position: absolute;
    font-family: $base-ff;
    font-style: normal;
    font-weight: 300;
    font-size: 9px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: $color-gray-lk;
    margin: 10px 0 0 19px;
  }
}
.cursor {
  cursor: pointer;
}
.after {
  width: 24px;
  height: 24px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 15px;
  top: 15px;
}
</style>
