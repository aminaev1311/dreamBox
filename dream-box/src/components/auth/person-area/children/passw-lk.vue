<template>
  <div class="passw_lk">
    <form>
      <h3 class="h_frame_lk">Change Password</h3>
      <InputPassword
        v-for="input in inputs"
        :key="input.name"
        :placeholder="input.placeholder"
        v-model="input.value"
        :errorMessage="input.errorMessage"
        :name="input.name"
        :error="input.error"
        :autocomplete="input.placeholder"
      ></InputPassword>
      <button-dream
        :isDisabled="isDisabled"
        @click.prevent="savePassword"
      ></button-dream>
    </form>
  </div>
</template>

<script>
import ButtonDream from "@ca/buttons/button-dream";
import InputPassword from "@ca/input-password";
export default {
  name: "passw-lk",
  components: { InputPassword, ButtonDream },
  data() {
    return {
      inputs: [
        {
          value: "",
          placeholder: "input old password",
          name: "oldPassword",
          error: false,
          errorMessage: "Old password isn't correct",

        },
        {
          value: "",
          placeholder: "new password",
          name: "newPassword",
          error: false,
          errorMessage: "New passwords are different",
        },
        {
          value: "",
          placeholder: "confirm new password",
          name: "confirmNewPassword",
          error: false,
          errorMessage: "New passwords are different",
        },
      ],
    };
  },
  methods: {
    async savePassword() {
      const passwords = new FormData();
      this.inputs.forEach(({ value, name }) => {
        passwords.append(name, value);
      });

      const { oldPassword, currentPasswords } = await this.$store.dispatch(
        "auth/updateUserPassword",
        passwords
      );
      if (oldPassword) {
        this.inputs[0].error = true;
      } else {
        this.inputs[0].error = false;;
      }
      if (currentPasswords) {
        this.inputs[1].error = this.inputs[2].error = true;
      } else {
        this.inputs[1].error = this.inputs[2].error = false;
      }
      if (!oldPassword && !currentPasswords) {
        this.inputs.forEach((p) => {
          p.value = "";
        });
      }
    },
  },

  computed: {
    isDisabled() {
      return this.inputs.some(({ value }) => value === "");
    },
  },
};
</script>

<style lang="scss" scoped>
.passw_lk {
  min-height: 100%;
  height: 432px;
  max-width: 618px;
  width: 363px;
  border-radius: 8px;
  padding: 20px;
  margin-left: 20px;
  background: #f0f3fc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  .h_frame_lk {
    margin-bottom: 15px;
    text-align: left;
    font-family: $base-ff;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
}
</style>
