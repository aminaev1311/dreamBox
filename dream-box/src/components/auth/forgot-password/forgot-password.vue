<template>
  <div class="wrapper-forgot-password">
    <form class="form-forgot-password">
      <p class="pass-recovery">Pass recovery</p>
      <h1 class="h1">FORGOT PASSWORD?</h1>
      <p class="instruction">
        It happens! Type your e-mail address and click on the button below to reset your password
      </p>
      <InputEmail />
      <BaseButton :disabled="isDisabled" :is-load="false" :width="176"> RESET password </BaseButton>
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
export default {
  components: { InputEmail, BaseButton, ToPage },
};
</script>

<style lang="scss" scoped>
.wrapper-forgot-password {
  display: flex;
  justify-content: flex-end;
  background-color: $color-base-gray;
  width: 100%;
  max-width: $max-width;
  border-radius: 8px;
  padding: 108px 137px;
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
</style>
