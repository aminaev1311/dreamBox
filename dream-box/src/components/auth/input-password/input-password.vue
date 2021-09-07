<template>
  <div class="wrapper-input-email">
    <label v-if="title" :for="id">{{ title }}</label>
    <div class="password">
      <div class="before">
        <img src="@i/auth/password-icon.png" alt="password-icon" />
      </div>
      <input
        :type="isShowPassword ? 'text' : 'password'"
        :id="id"
        v-model="modelValue"
        name="password"
        current-password
      />
      <div class="cursor after">
        <img
          :src="
            !isShowPassword ? require('@i/auth/eye-close.png') : require('@i/auth/eye-open.png')
          "
          alt="eye-close"
          @click.prevent="isShowPassword = !isShowPassword"
        />
      </div>
    </div>
    <div v-for="error in currentErrors" :key="error.message">
      <small v-if="error.value">{{ error.message }}</small>
    </div>
  </div>
</template>

<script>
import uniqid from "uniqid";
export default {
  data() {
    return {
      isShowPassword: false,
      id: uniqid(),
    };
  },
  props: {
    errors: {
      type: Array,
    },
    title: {
      type: String,
    },
    modelValue: {
      type: String,
    },
  },
  emits: {
    "update:modelValue": (value) => typeof value === "string" || value === "",
  },
  methods: {
    init() {
      this.password = this.modelValue || "";
    },
  },
  mounted() {
    this.init();
  },
  computed: {
    password: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
    currentErrors() {
      const newErrors = this.errors;
      const index = this.errors.findIndex(({ value }) => value);
      return index || index === 0 ? newErrors.splice(index, 1) : [];
    },
  },

  watch: {
    modelValue() {
      this.init();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-input-email {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  margin-bottom: 20px;
  align-items: flex-start;
}
.wrapper-input-email > .password {
  width: 100%;
  position: relative;
  display: flex;
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
    right: 0;
    top: -5px;
  }
}
.wrapper-input-email > label {
  margin-bottom: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: $color-font-dark;
}

.wrapper-input-email > .password > input {
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
  border-bottom: 1px solid #a9acbf;
  margin-bottom: 5px;
  padding: 0 30px;
  box-sizing: border-box;
}

.wrapper-input-email > input.error {
  border-color: red;
}

.wrapper-input-email > div > small {
  color: red;
}
</style>
