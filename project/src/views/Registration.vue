<template>
  <div :class="$style['container-new-account']">
    <div :class="$style.content">
      <div :class="$style.left">
        <img
          src="@/assets/images/new-account/background.svg"
          alt=""
          width="295"
          height="451"
        />
      </div>
      <div :class="$style.right">
        <p :class="$style['h-small']">Sign UP</p>
        <h1 :class="$style['h1']">new ACCOUNT</h1>
        <form :class="$style['form-regisrtation']" @submit.prevent="submit">
          <!--  Emale -->
          <div
            class="animate__animated"
            :class="[$style.field, { animate__shakeX: $v.email.$error }]"
          >
            <label for="reg-email" :class="$style['form-label']"
              >Email address</label
            >
            <input
              type="email"
              id="reg-email"
              v-model.trim="$v.email.$model"
              :class="[$style.input, { error_input: $v.email.$error }]"
              placeholder="Your email"
            />
            <small :class="$style['form-text']" v-if="!$v.email.required && $v.email.$error">
              Email can't be empty.
            </small>
            <small
              :class="$style['form-text']"
              v-if="$v.email.required && !$v.email.minLength && $v.email.$error"
            >
              This field has an invalid value !!!
            </small>
          </div>
          <!--  Your name -->
          <div
            class="animate__animated"
            :class="[$style.field, { animate__shakeX: $v.login.$error }]"
          >
            <label for="reg-login" :class="$style['form-label']">Login</label>
            <input
              type="text"
              id="reg-login"
              v-model.trim="$v.login.$model"
              :class="[$style.input, { error_input: $v.login.$error }]"
              placeholder="Your name"
            />
            <small
              :class="$style['form-text']"
              v-if="!$v.login.required && $v.login.$error"
            >
              Login can't be empty.
            </small>
            <small
              :class="$style['form-text']"
              v-if="$v.login.required && !$v.login.minLength && $v.login.$error"
            >
              This field can't be shorter 2 symbols
            </small>
          </div>
          <!-- password -->
          <div
            class="animate__animated"
            :class="[$style.field, { animate__shakeX: $v.password_1.$error }]"
          >
            <label for="reg-pass1" :class="$style['form-label']"
              >Password</label
            >
            <input
              type="password"
              if="reg-pass1"
              v-model.trim="$v.password_1.$model"
              :class="[$style.input, { error_input: $v.password_1.$error }]"
              placeholder="Your password"
            />
            <small
              :class="$style['form-text']"
              v-if="!$v.password_1.required && $v.password_1.$error"
            >
              Password can't be empty.
            </small>
            <small
              :class="$style['form-text']"
              v-if="
                $v.password_1.required &&
                !$v.password_1.minLength &&
                $v.password_1.$error
              "
            >
              This field can't be shorter 8 symbols
            </small>
          </div>
          <!-- repeat password -->
          <div
            class="animate__animated"
            :class="[$style.field, { animate__shakeX: $v.password_2.$error }]"
          >
            <label for="reg-pass2" :class="$style['form-label']"
              >Password</label
            >
            <input
              type="password"
              for="reg-pass2"
              v-model.trim="$v.password_2.$model"
              :class="[$style.input, { error_input: $v.password_2.$error }]"
              placeholder="repeat password"
            />
            <small
              :class="$style['form-text']"
              v-if="!$v.password_2.required && $v.password_2.$error"
            >
              Password can't be empty.
            </small>
            <small
              :class="$style['form-text']"
              v-if="
                $v.password_2.required &&
                !$v.password_2.sameAs &&
                $v.password_2.$error
              "
            >
              Passwords aren't the same...
            </small>
          </div>
          <button
            type="submit"
            class="btn btn-primary mt-3"
            :disabled="$v.$invalid"
          >
            Registration
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      login: "",
      email: "",
      password_1: "",
      password_2: "",
      submitStatus: null,
    };
  },
  validations: {
    login: {
      required,
      minLength: minLength(2),
    },
    email: {
      required,
      email,
    },
    password_1: {
      required,
      minLength: minLength(7),
    },
    password_2: {
      required,
      minLength: minLength(7),
      sameAs: sameAs("password_1"),
    },
  },
  mounted() {
    console.log(this.$v);
  },
  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>
<style lang="scss" module>
.container-new-account {
  width: 100%;
  background-color: $color-background;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.content {
  width: 100%;
  max-width: $max-width;
  padding: 49px 139px 48px 217px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    margin: auto;
  }
}
.right {
  width: 100%;
  max-width: 407px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.h-small {
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
  margin: 0 0 36px 0;
}

.form-regisrtation {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
}

.field {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px 0;
  margin-bottom: 20px;
  align-items: flex-start;
}

.form-label {
  margin-bottom: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: $color-font-dark;
}

.input {
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
}

.form-text {
  color: red;
}

.form-check {
  display: flex;
  justify-content: center;
  & > .form-check-label {
    margin-left: 10px;
  }
}

.error {
  border-color: #f66262 !important;
}
</style>

<style lang="scss" >
.error_input {
  border-color: red;
}
</style>

