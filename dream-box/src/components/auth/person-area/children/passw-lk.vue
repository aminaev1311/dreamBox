<template>
  <div class="passw_lk">
    <form>
      <h3 class="h_frame_lk">Change password</h3>
      <InputPassword
        type="password"
        v-for="input in inputs"
        :key="input.placeholder"
        :placeholder="input.placeholder"
        v-model="input.value"
        :name="input.attribute"
        :autocomplete="'username'"
      ></InputPassword>
      <button-dream :is-disabled="isDisabled" @click.prevent="savePassword"></button-dream>
    </form>
  </div>
</template>

<script>
import ButtonDream from "@ca/buttons/button-dream";
import InputPassword from "@ca/input-password";
export default {
  name: "PasswLk",
  components: { InputPassword, ButtonDream },
  data() {
    return {
      inputs: [
        {
          value: "",
          placeholder: "input old password",
          attribute: "old-password",
        },
        { value: "", placeholder: "new password", attribute: "new-password" },
        {
          value: "",
          placeholder: "confirm new password",
          attribute: "confirm-new-password",
        },
      ],
    };
  },

  computed: {
    isDisabled() {
      return this.inputs.some(({ value }) => value === "");
    },
  },
  methods: {
    savePassword() {
      console.log("save-password");
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
