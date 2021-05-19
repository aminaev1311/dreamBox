<template>
  <div class="container">
    <h1 class="h1 mt-5">Registration</h1>
    <form class="form-regisrtation" @submit.prevent="submit">
      <div
        class="mb-3 animate__animated"
        :class="{ animate__shakeX: $v.login.$error }"
      >
        <label for="reg-login" class="form-label">Login</label>
        <input
          type="text"
          class="form-control"
          id="reg-login"
          v-model.trim="$v.login.$model"
          :class="{ error: $v.login.$error }"
        />
        <div class="form-text" v-if="!$v.login.required && $v.login.$error">
          Login can't be empty.
        </div>
        <div
          class="form-text"
          v-if="$v.login.required && !$v.login.minLength && $v.login.$error"
        >
          This field can't be shorter 2 symbols
        </div>
      </div>
      <div
        class="mb-3 animate__animated"
        :class="{ animate__shakeX: $v.email.$error }"
      >
        <label for="reg-email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="reg-email"
          v-model.trim="$v.email.$model"
          :class="{ error: $v.email.$error }"
        />
        <div class="form-text" v-if="!$v.email.required && $v.email.$error">
          Email can't be empty.
        </div>
        <div
          class="form-text"
          v-if="$v.email.required && !$v.email.minLength && $v.email.$error"
        >
          This field has an invalid value !!!
        </div>
      </div>

      <div
        class="mb-3 animate__animated"
        :class="{ animate__shakeX: $v.password_1.$error }"
      >
        <label for="reg-pass1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          if="reg-pass1"
          v-model.trim="$v.password_1.$model"
          :class="{ error: $v.password_1.$error }"
        />
        <div class="form-text" v-if="!$v.password_1.required && $v.password_1.$error ">
          Password can't be empty.
        </div>
        <div
          class="form-text"
          v-if="
            $v.password_1.required && !$v.password_1.minLength && $v.password_1.$error 
          "
        >
          This field can't be shorter 8 symbols
        </div>
      </div>
      <div
        class="mb-3 animate__animated"
        :class="{ animate__shakeX: $v.password_2.$error }"
      >
        <label for="reg-pass2" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          for="reg-pass2"
          v-model.trim="$v.password_2.$model"
          :class="{ error: $v.password_2.$error }"
        />
        <div class="form-text" v-if="!$v.password_2.required && $v.password_2.$error">
          Password can't be empty.
        </div>
        <div
          class="form-text"
          v-if="
            $v.password_2.required && !$v.password_2.sameAs && $v.password_2.$error
          "
        >
          Passwords aren't the same...
        </div>
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


<style lang="scss" scoped>
.form-regisrtation {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
}
.form-check {
  display: flex;
  justify-content: center;
  & > .form-check-label {
    margin-left: 10px;
  }
}
.form-text {
  color: red;
}

.error {
  color: #495057;
  background-color: #fff;
  border-color: #f66262 !important;
  outline: 0;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(247, 3, 3, 1) !important;
  -moz-box-shadow: 0px 0px 8px 1px rgba(247, 3, 3, 1) !important;
  box-shadow: 0px 0px 8px 1px rgba(247, 3, 3, 1) !important;
}
</style>

