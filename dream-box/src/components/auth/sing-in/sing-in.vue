<template>
  <div class="sing-in-container">
    <form class="sing-in" ref="form-sing-in" @submit.prevent="sentForm">
      <p class="action">Sing in</p>
      <h1 class="h1">Your account</h1>
      <div
        class="field animate__animated"
        :class="{
          animate__shakeX: error,
        }"
      >
        <label for="emali">E-mail:</label>
        <div class="email">
          <div class="before">
            <img src="@i/auth/user-icon.png" alt="password-icon" />
          </div>
          <input type="text" v-model="email" id="email" name="email" />
        </div>
        <small v-if="!email && sent">This field can't be empty!</small>
        <small v-if="error">Email or password aren't correct!</small>
      </div>
      <div
        class="field animate__animated"
        :class="{
          animate__shakeX: error,
        }"
      >
        <label for="password">Password</label>
        <div class="password">
          <div class="before">
            <img src="@i/auth/password-icon.png" alt="password-icon" />
          </div>
          <input
            :type="isShowPassword ? 'text' : 'password'"
            v-model="password"
            id="password"
            name="password"
            current-password
          />
          <div class="cursor after">
            <img
              :src="
                !isShowPassword ? require('@i/auth/eye-close.png') : require('@i/auth/eye-open.png')
              "
              alt="eye-close"
              @click="isShowPassword = !isShowPassword"
            />
          </div>
        </div>
        <small v-if="!password && sent">This field can't be empty!</small>
        <small v-if="error">Email or password aren't correct!</small>
      </div>
      <Buttons :is-load="!isLoad" :is-disabled="isLoad" title-main-button="Log In" />
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
import { mapActions, mapGetters } from "vuex";
import Buttons from "@c/auth/buttons";
import ToPage from "@c/auth/to-page";

export default {
  components: {
    Buttons,
    ToPage,
  },
  data() {
    return {
      email: "",
      password: "",
      sent: false,
      isShowPassword: false,
      error: false,
    };
  },
  async mounted() {
    const getParams = this.$router.currentRoute.value.fullPath.split("/?")[1];
    if (getParams) {
      await this.activate({
        id: getParams.split("=")[1].trim(),
      });
    }
  },
  methods: {
    ...mapActions({
      activate: "auth/activate",
      getUser: "auth/getUser",
    }),
    async sentForm() {
      this.sent = true;
      if (this.sent && this.email && this.password) {
        const { email, password } = this;
        const isLogIn = await this.getUser({ email, password });
        if (isLogIn) {
          this.sent = false;
          this.email = "";
          this.password = "";
          this.$router.push({ path: "/" });
        } else {
          this.error = true;
        }
      } else {
        return false;
      }
    },
  },
  computed: {
    ...mapGetters({
      isLoad: ["auth/isLoad"],
    }),
  },
  watch: {
    email: function () {
      this.error = false;
    },
    password: function () {
      this.error = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.sing-in-container {
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: $max-width;
  padding: 106px 139px;
  justify-content: flex-end;
  box-sizing: border-box;
  background: url("~@/assets/images/auth/background-sing-in.png") no-repeat;
  background-color: $color-background;
  background-position-x: 140px;
  background-position-y: center;
  min-height: 405px;
  border-radius: 10px;
}

.sing-in {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 407px;
}
.action {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-dark;
  text-align: left;
  margin-bottom: 5px;
}
.h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-dark;
  margin: 0 0 39px 0;
  text-align: left;
}

.field {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  margin-bottom: 20px;
  align-items: flex-start;
}
.field > .email,
.field > .password {
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
.field > label {
  margin-bottom: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: $color-font-dark;
}

.field > .email > input,
.field > .password > input {
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

.field > input.error {
  border-color: red;
}

.field > small {
  color: red;
}
.to-page {
  margin-top: 30px;
}
.cursor {
  cursor: pointer;
}
</style>
