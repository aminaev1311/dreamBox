<template>
  <div class="wrapper-forgot-password" @submit.prevent="send">
    <form class="form-forgot-password">
      <p class="pass-recovery">Pass recovery</p>
      <h1 class="h1">CHOOSE YOUR NEW PASSWORD</h1>

      <InputPassword title="New Password:" v-model="password" :errors="errorsPassword" />
      <InputPassword
        title="Confirm New Password:"
        v-model="comfirmPassword"
        :errors="errorsComfirmPassword"
      />
      <BaseButton class="button" :disabled="isDisabled" :is-load="isload"> SAVE </BaseButton>
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
import InputPassword from "@c/auth/input-password";
import BaseButton from "@c/common/base-button";
import ToPage from "@c/auth/to-page";
import { email } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { mapActions } from "vuex";
export default {
  components: { InputPassword, BaseButton, ToPage },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      password: "",
      comfirmPassword: "",
      startValid: false,
      isDisabled: false,
      isload: false,
      isAbsent: false,
      hashRecoveryPassword: null,
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
    errorsPassword() {
      return [
        {
          type: "is-empty",
          value: this.startValid && this.password === "",
          message: "This fild cun't be empty",
        },
        {
          type: "minLength",
          value: this.startValid && this.password.length < 7,
          message: "Password length can't be less 7 symbols",
        },
      ];
    },
    errorsComfirmPassword() {
      return [
        {
          type: "is-empty",
          value: this.startValid && this.comfirmPassword === "",
          message: "This fild cun't be empty",
        },
        {
          type: "minLength",
          value: this.startValid && this.comfirmPassword.length < 7,
          message: "Password length can't be less 7 symbols",
        },
        {
          type: "isSame",
          value: this.startValid && this.comfirmPassword !== this.password,
          message: "Passwords aren't the same",
        },
      ];
    },
  },
  methods: {
    ...mapActions({
      checkTokenRecoveryPassword: "auth/checkTokenRecoveryPassword",
      changePassword: "auth/changePassword",
    }),
    async send() {
      if (!this.startValid) this.startValid = true;
      if (
        this.errorsPassword.some(({ value }) => value) ||
        this.errorsComfirmPassword.some(({ value }) => value)
      )
        return;
      this.isload = true;
      await this.changePassword(this.password);
      this.password = "";
      this.comfirmPassword = "";
      this.startValid = false;
      this.isload = false;
    },
  },
  created() {
    console.log(this.$route);
    this.hashRecoveryPassword = this.$route.params.hash || null;
    if (this.hashRecoveryPassword) {
      this.checkTokenRecoveryPassword(this.hashRecoveryPassword);
    }
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
  margin: 0 0 40px 0;
  font-family: $base-ff;
  font-weight: bold;
  font-size: 25px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-dark;
}
.button {
  margin-top: 30px;
}
.to-page {
  margin-top: 18px;
}
</style>
