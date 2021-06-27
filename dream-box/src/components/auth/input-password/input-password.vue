<template>
  <div class="wrapper-input-password"
  :class="{ error: error }"
  >
    <input
      :type="isShowPassword ? 'text' : 'password'"
      @input="setValue($event)"
      :id="placeholder"
      :value="modelValue"
      :name="name"
      :placeholder="placeholder"
      class="password"
      :autocomplete="autocomplete"
      
    />
    <div class="cursor after">
      <img
        :src="
          !isShowPassword
            ? require('@i/auth/eye-close.png')
            : require('@i/auth/eye-open.png')
        "
        alt="eye-close"
        @click="isShowPassword = !isShowPassword"
      />
    </div>
  </div>
  <small v-if="error">{{ errorMessage }}</small>
</template>

<script>
export default {
  data() {
    return {
      isShowPassword: false,
    };
  },
  props: {
    modelValue: {
      type: String,
    },
    name: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "",
    },
    autocomplete: {
      type: String,
      default: "",
    },
    error:{
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: "",
    },
  },
  emits: {
    "update:modelValue": (payload) => typeof payload === "string",
  },
  methods: {
    setValue({ target }) {
      this.$emit("update:modelValue", target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-input-password {
  @include fc-c-c-b;
  width: 319px;
  min-height: 60px;
  background: $color-base-light;
  border-radius: 8px;
  position: relative;
  margin-bottom: 20px;
  & > .before {
    width: 24px;
    height: 24px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0px;
  }
  & > .after {
    width: 24px;
    height: 24px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 5px;
    top: 19px;
  }
}

.wrapper-input-password > input {
  width: 100%;
  border: none;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  background-color: transparent;
  color: $color-font-dark;
  padding-bottom: 4px;
  padding: 0 30px;
  box-sizing: border-box;
  @include placeholder {
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #52575c;
  }
}

.wrapper-input-password.error {
  border:1px solid red!important;
}

small {
  color: red;
  display: flex;
  margin-bottom: 20px;
  padding-left: 10px;
}
</style>