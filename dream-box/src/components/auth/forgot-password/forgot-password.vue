<template>
  <div class="wrapper-forgot-password">
    <form class="form-forgot-password">
      <p class="pass-recovery">Pass recovery</p>
      <h1 class="h1">FORGOT PASSWORD?</h1>
      <p class="instruction">
        It happens! Type your e-mail address and click on the button below to reset your password
      </p>
      <InputEmail v-model="v$.email.$model" :propError="errors" />
      <BaseButton class="button" @click="send" :disabled="isDisabled" :is-load="false" :width="176">
        RESET password
      </BaseButton>
      <ToPage
        class="to-page"
        message="Don’t have an account?"
        :rout="{ name: 'registration' }"
        name-link="Sign Up!"
      />
    </form>
  </div>
</template>

<script>
import InputEmail from "@c/auth/input-email";
import BaseButton from "@c/common/base-button";
import ToPage from "@c/auth/to-page";
import { email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
export default {
  components: { InputEmail, BaseButton, ToPage },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      error: {},
      startValid: false,
      isDisabled: false,
    };
  },
  validations() {
    return {
      email: {
        email,
      },
    };
  },
  computed: {
    errors: {
      get() {
        return {
          empty: this.startValid && this.v$.email.$model === "",
          isntCorrect: this.startValid && this.v$.email.$error && this.v$.email.$model !== "",
        };
      },
      set(value) {
        this.error = { ...this.error, ...value };
      },
    },
  },
  methods: {
    send() {
      if (!this.startValid) this.startValid = true;
      if (this.errors.empty || this.errors.isntCorrect) return;
      console.log('send is good');
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-forgot-password {
  display: flex;
  justify-content: flex-end;
  background-color: $color-base-gray;
  background-image: url("~@/assets/images/auth/background-forgot-password.svg");
  background-repeat: no-repeat;
  background-position-x: 18%;
  background-position-y: 30%;
  width: 100%;
  max-width: $max-width;
  border-radius: 8px;
  padding: 108px 137px;
  box-sizing: border-box;
}
.form-forgot-password {
  width: 100%;
  max-width: 407px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.pass-recovery {
  font-family: $base-ff;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-dark;
}
.h1 {
  margin: 0;
  font-family: $base-ff;
  font-weight: bold;
  font-size: 25px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-dark;
}
.instruction {
  font-family: $base-ff;
  max-width: 336px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: $color-font-dark;
  margin: 31px 0 65px;
  text-align: left;
}
.button {
  margin-top: 30px;
}
.to-page {
  margin-top: 18px;
}
</style>
