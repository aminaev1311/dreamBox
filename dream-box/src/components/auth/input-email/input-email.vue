<template>
  <div class="wrapper-input-email">
    <label for="emali">E-mail:</label>
    <div class="email">
      <div class="before">
        <img src="@i/auth/user-icon.png" alt="password-icon" />
      </div>
      <input v-model="email" id="email" name="email" />
    </div>

    <div v-for="error in errors" :key="error.message">
      <small v-if="error.value">{{ error.message }}</small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
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
      this.email = this.modelValue || "";
    },
  },
  mounted() {
    this.init();
  },
  computed: {
    email: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
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
.wrapper-input-email > .email {
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

.wrapper-input-email > .email > input {
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
