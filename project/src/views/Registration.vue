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
        <form
          :class="$style['form-regisrtation']"
          @submit.prevent="submit"
          ref="reg"
        >
          <!--  Emale -->
          <div
            class="animate__animated"
            :class="[$style.field, { animate__shakeX: $v.email.$error }]"
          >
            <label for="reg-email" :class="$style['form-label']"
              >Email address</label
            >
            <input
              name="email"
              type="email"
              id="reg-email"
              v-model.trim="$v.email.$model"
              :class="[$style.input, { error_input: $v.email.$error }]"
              placeholder="Your email"
            />
            <small
              :class="$style['form-text']"
              v-if="!$v.email.required && $v.email.$error"
            >
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
              name="name"
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
              name="password1"
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
              name="password2"
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
          <div
            class="animate__animated"
            :class="[$style.field, { animate__shakeX: $v.db.$error }]"
          >
            <label for="db" :class="$style['form-label']">Date of birth:</label>
            <input
              name="db"
              type="text"
              id="db"
              v-model.trim="$v.db.$model"
              :class="[$style.input, { error_input: $v.db.$error }]"
              placeholder="31.12.2000"
              @input="autoDot($event)"
            />

            <small :class="$style['form-text']" v-if="$v.db.$error">
              This field has an invalid value !!!.
            </small>
          </div>
          <!-- buttons -->
          <div :class="$style.buttons">
            <button
              type="submit"
              :class="$style['batton-create']"
              :disabled="$v.$invalid || craeteDisabled"
            >
              <span v-if="!craeteDisabled">Create</span>
              <div
                v-else
                class="spinner-border"
                style="width: 1.5rem; height: 1.5rem; color: lightBlue;"
                role="status"
              >
                <span class="sr-only"></span>
              </div>
            </button>
            <span :class="$style.or">or</span>
            <div :class="$style['sosial-networks']">
              <button
                :class="$style['button-network']"
                @click.prevent="() => {}"
              >
                <img src="@/assets/images/new-account/google.png" alt="icon" />
              </button>
              <button
                :class="$style['button-network']"
                @click.prevent="() => {}"
              >
                <img src="@/assets/images/new-account/vk.png" alt="icon" />
              </button>
              <button
                :class="$style['button-network']"
                @click.prevent="() => {}"
              >
                <img src="@/assets/images/new-account/fb.png" alt="icon" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import { sentForm, activate } from "@api/auth/reg";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      login: "",
      email: "",
      password_1: "",
      password_2: "",
      submitStatus: null,
      db: "",
      dbValue: "",
      craeteDisabled: false,
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
    db: {
      required: false,
      db: (value) =>
        value ? /^[1-3][0-9]\.[01][0-9]\.[0-9]{4}$/.test(value) : true,
    },
  },
  async mounted() {
    console.log(window.protocol);
    const getParams = this.$router.currentRoute.fullPath.split("/?")[1];
    if (getParams) {
      try {
        await activate({
          id: getParams.split("=")[1].trim(),
        });
        this.setAlert({
          status: "success",
          message: "You account get activeted successfully!!!",
          daley: 4000,
        });
      } catch (e) {
        this.setAlert({
          status: "error",
          message: "Error by ctivete!!! Try leter...",
          daley: 4000,
        });
      }
    }
  },
  methods: {
    ...mapActions({
      setAlert: "alert/setAlert",
    }),

    autoDot() {
      if (this.$v.db.$model.length === 2 || this.$v.db.$model.length === 5) {
        this.$v.db.$model += ".";
      }
    },

    async submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const form = new FormData(this.$refs.reg);
        form.append("currentURL", this.$router.currentRoute.path);
        try {
          this.craeteDisabled = true;
          await sentForm(form);
          this.craeteDisabled = false;
          this.setAlert({
            status: "info",
            message:
              "You registered successfully. We have sent you an email with a link to complete the registration.",
            daley: 10000,
            buttonTitle: "X",
            cb: () => this.setAlert(null),
          });
          this.$router.push({ name: "auth" });
        } catch (e) {
          this.setAlert({
            status: "error",
            message: "Error by registration...Try later...",
            daley: 4000,
          });
          console.log("Error by registration....");
        }
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

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.batton-create {
  cursor: pointer;
  outline: none;
  border: none;
  width: 132px;
  min-height: 43px;
  background-color: $color-buttons;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-light;
}
.batton-create:hover {
  background-color: darken($color-buttons, 20%);
}
.batton-create:active {
  transform: scale(0.99);
}

.batton-create:disabled {
  cursor: not-allowed;
  background-color: $color-buttons-disabled;
  color: $color-font-disabled;
}

.or {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  color: #a9acbf;
}

.sosial-networks {
  display: flex;
  align-items: center;
}

.button-network {
  background-color: transparent;
  width: 43px;
  height: 43px;
  border: 1px solid #a9acbf;
  outline: none;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-network:hover {
  border-color: #5464bb;
}
.button-network:active {
  border-color: #8a91b9;
  transform: scale(0.95);
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

