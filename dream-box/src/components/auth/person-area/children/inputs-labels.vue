<template>
  <div class="inputs_labels">
    <input
      class="input_dream-box"
      :class="{errorInp}"
      :type="!isShow ? type : 'text'"
      v-model="value"
      @change="$emit('remuve-input',input.name)"
    /><label class="label_frame_lk">{{ title }}</label>
    <div class="cursor after">
      <img
        v-if="type === 'password'"
        :src="
          !isShow
            ? require('@i/auth/eye-close.png')
            : require('@i/auth/eye-open.png')
        "
        alt="eye-close"
        @click="isShow = !isShow"
      />
    </div>
  </div>
</template>

<script>
export default {
 data() {
    return {
      isShow: false,
    };
  },
  name: "inputs-labels",
  props: {
    title: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "No filled",
    },
    input: Array,
    errorInp: Boolean
  },
};
</script>

<style lang="scss">
.errorInp{
  background-color: rgba(200,3,3,0.1)!important;
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
    outline: none;;
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
