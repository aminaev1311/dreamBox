<template>
  <form :class="$style['form-regisrtation']" @submit.prevent="submit" ref="reg">
    <div v-for="field in fields" :key="field.id">
      <RegField :$v="$v" :field="field" />
    </div>
    <div :class="$style.buttons">
      <button
        type="submit"
        :class="$style['batton-create']"
        :disabled="$v.$invalid || isLoadReg"
      >
        <span v-if="!isLoadReg">Create</span>
        <div
          v-else
          class="spin primary"
          style="width: 1.5rem; height: 1.5rem"
        ></div>
      </button>
      <span :class="$style.or">or</span>
      <div :class="$style['sosial-networks']">
        <button :class="$style['button-network']" @click.prevent="() => {}">
          <img src="@/assets/images/new-account/google.png" alt="icon" />
        </button>
        <button :class="$style['button-network']" @click.prevent="() => {}">
          <img src="@/assets/images/new-account/vk.png" alt="icon" />
        </button>
        <button :class="$style['button-network']" @click.prevent="() => {}">
          <img src="@/assets/images/new-account/fb.png" alt="icon" />
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
import fields from "./reg-form";
import RegField from "@c/auth/reg/field";

export default {
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
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
      isBusy: async function (value) {
        if (value === "") return true;
        const res = await this.checkLogin(value);
        return res;
      },
    },
    email: {
      required,
      email,
      isBusy: async function (value) {
        if (value === "") return true;
        const res = await this.checkEmail(value);
        return res;
      },
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
    birthday: {
      required: false,
      birthday: (value) => {
        const myIf =
          /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/.test(value.trim()) &&
          new Date(value) > new Date("01.01.1900") &&
          new Date(value) < new Date();

        return value ? myIf : true;
      },
      autoDot() {
        if (
          this.$v.birthday.$model.length === 2 ||
          this.$v.birthday.$model.length === 5
        ) {
          this.$v.birthday.$model += ".";
        } else if (this.$v.birthday.$model.length === 11) {
          this.$v.birthday.$model.length === "";
        }
        return true;
      },
    },
  },
  async mounted() {
    const getParams = this.$router.currentRoute.fullPath.split("/?")[1];
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
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const form = new FormData(this.$refs.reg);
        form.append("currentURL", ''/* this.$router.currentRoute.path */);
        const reg = await this.register(form);
        if (reg) {
            this.$refs.reg.reset()
          //this.$router.push({ name: "auth" });
        }
      }
    },
  },
  computed: {
    ...mapGetters({
      isLoadReg: ["auth/isLoadReg"],
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
</style>
