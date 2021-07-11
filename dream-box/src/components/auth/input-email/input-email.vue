<template>
  <div class="wrapper-input-email">
    <label for="emali">E-mail:</label>
    <div class="email">
      <div class="before">
        <img src="@i/auth/user-icon.png" alt="password-icon" />
      </div>
      <input type="text" v-model="email" id="email" name="email" />
    </div>
    <small v-if="error.empty">{{ error.emptyMessage }}</small>
    <small v-if="error.isntCorrect">{{ error.isntCorrectMessage }}</small>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  props: {
    error: {
      type: Object,
      default: () => ({
        empty: false,
        emptyMessage: "This field can't be empty!",
        isntCorrect: false,
        isntCorrectMessage: "This field is not correct filled!",
      }),
    },
    value: {
      type: String,
      default: "",
    },
  },
  emits: {
    "update:value": (value) => typeof value === "string",
  },
  mounted() {
    this.email = this.value;
  },
  watch: {
    value() {
      this.email = this.value;
    },
    email() {
      this.$emit("update:value", this.email);
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

.wrapper-input-email > small {
  color: red;
}
</style>
