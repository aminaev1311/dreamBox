<template>
  <form :class="$style['form-regisrtation']" @submit.prevent="submit" ref="reg">
    <div v-for="field in fields" :key="field.id">
      <RegField :v$="v$" :field="field" />
    </div>
    <Buttons :isLoad="!isLoad" :isDisabled="isLoad" />
    <ToPage
      :class="$style['to-page']"
      message="Already a user? "
      :rout="{ name: 'auth' }"
      name-link="Sign in!"
    />
  </form>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  minLength,
  email,
  sameAs,
  helpers,
} from "@vuelidate/validators";
const { withAsync } = helpers;

import { mapActions, mapGetters } from "vuex";
import fields from "./reg-form";
import Buttons from "@c/auth/buttons";
import RegField from "./field";
import ToPage from "@c/auth/to-page";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: "",
      email: "",
      password_1: "",
      password_2: "",
      submitStatus: null,
      birthday: "",
      fields: [...fields],
    };
  },
  components: {
    RegField,
    Buttons,
    ToPage,
  },
  validations() {
    return {
      name: {
        required,
        minLength: minLength(2),
      },
      email: {
        required,
        email,
        isBusy: withAsync(async function (value) {
          if (value === "") return true;
          const res = await this.checkEmail(value);
          return res;
        }),
      },
      password_1: {
        required,
        minLength: minLength(7),
      },
      password_2: {
        required,
        sameAs: sameAs(this.password_1),
      },
      birthday: {
        birthday: (value) => {
          if (!value) return true;
          const newValue =
            value.split(".")[1] +
            "." +
            value.split(".")[0] +
            "." +
            value.split(".")[2];
          const myIf =
            /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/.test(newValue.trim()) &&
            new Date(newValue) > new Date("01.01.1900") &&
            new Date(newValue) < new Date();

          return myIf;
        },
        /*       autoDot() {
          if (
            this.v$.birthday.$model.length === 2 ||
            this.v$.birthday.$model.length === 5
          ) {
            this.v$.birthday.$model += ".";
          } else if (this.v$.birthday.$model.length === 11) {
            this.v$.birthday.$model.length === "";
          }
          return true;
        }, */
      },
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
      setAlert: "alert/setAlert",
      register: "auth/register",
      activate: "auth/activate",
      checkLogin: "auth/checkLogin",
      checkEmail: "auth/checkEmail",
    }),

    async submit() {
      console.log(1);
      this.v$.$touch();
      console.log(this.v$);
      if (!this.v$.$invalid) {
        try {
          const form = new FormData(this.$refs.reg);
          form.append("currentURL", "auth");
          await this.register(form);
          let { name, email, password_1, password_2, submitStatus, birthday } =
            this;
          name = email = password_1 = password_2 = submitStatus = birthday = "";
          console.log(this.$refs.reg.reset())
        } catch (e) {
          console.log(e);
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      isLoad: ["auth/isLoad"],
    }),
  },
};
</script>
<style lang="scss" module>
.form-regisrtation {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button-create {
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
.button-create:hover {
  background-color: darken($color-buttons, 20%);
}
.button-create:active {
  transform: scale(0.99);
}

.button-create:disabled {
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
.to-page {
  margin-top: 30px;
}
</style>