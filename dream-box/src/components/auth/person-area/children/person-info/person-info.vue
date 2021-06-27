<template>
  <div class="frame_lk">
    <div class="photo_frame_lk">
      <h3 class="h_frame_lk">Your Profile</h3>
      <ChangeImage :show="show" @hide="show = !show" />
      <div class="round">
        <div class="chage-image" @click="show = !show">
          <img src="@i/auth/camera-plus.png" alt="icon-camera-plus" />
        </div>
        <img :src="logo" alt="avatar" />
      </div>
    </div>

    <form
      v-if="fields.length"
      class="contact_frame_lk"
      @submit.prevent="() => {}"
    >
      <inputs-labels
        v-for="field in fields"
        :key="field.name"
        :title="field.title"
        :value="field.value"
        @input="valid(field, $event.target.value)"
      />

      <radios-lk @chengeGender="validGender($event)" :gender="gender.value">
      </radios-lk>
      <button-dream :isDisabled="!isDisabled || isLoad" @click="update"></button-dream>
    </form>
  </div>
</template>

<script>
import ButtonDream from "@ca/buttons/button-dream";
import InputsLabels from "@c/auth/person-area/children/inputs-labels";
import RadiosLk from "./children/radios_lk";
import ChangeImage from "./children/image-crop-upload";

import { mapGetters } from "vuex";
import config from "@config";

export default {
  USER_FIRST_NAME: "",
  USER_LAST_NAME: "",
  USER_BIRTHDAY: "",
  USER_GENDER: "",

  components: { ButtonDream, InputsLabels, RadiosLk, ChangeImage },
  data() {
    return {
      show: false,
      isChenged: false,
      fields: [],
      gender: {},
    };
  },
  methods: {
    changeControl() {
      this.isChenged = true;
    },
  },
  mounted() {
    this.init();
  },

  methods: {
    valid(field, newValue) {
      field.value = newValue;
      field.isValid = field.valid(newValue);
    },
    validGender(gender) {
      this.gender.value = gender;
      this.gender.isValid = this.gender.valid(gender);
    },
    update() {
      const newUserInfo = new FormData();

      this.fields.forEach(({ name, value }) => {
        newUserInfo.append(name, value || "");
      });
      newUserInfo.append(this.gender.name, this.gender.value || "");

      this.$store
        .dispatch("auth/updateUserInfo", newUserInfo)
        .then(() => this.init());
    },
    init() {
      let { USER_FIRST_NAME, USER_LAST_NAME, USER_BIRTHDAY, USER_GENDER } =
        this.$options;

      USER_FIRST_NAME = this.user?.name?.trim() || "";

      USER_LAST_NAME = this.user?.surname ? this.user.surname : "";

      USER_BIRTHDAY = this.user?.birthday ? this.user.birthday : "";

      USER_GENDER = this.user?.gender ? this.user.gender : null;

      this.fields = [
        {
          value: USER_FIRST_NAME,
          name: "name",
          title: "Name",
          valid: (value) => value !== USER_FIRST_NAME,
          isValid: false,
          type: "field",
        },
        {
          value: USER_LAST_NAME,
          name: "surname",
          title: "Surname",
          valid: (value) => value !== USER_LAST_NAME,
          isValid: false,
          type: "field",
        },
        {
          value: USER_BIRTHDAY,
          name: "birthday",
          title: "Day of Birth",
          valid: (value) => value !== USER_BIRTHDAY,
          isValid: false,
          type: "field",
        },
      ];

      this.gender = {
        value: USER_GENDER,
        name: "gender",
        valid: (value) => value !== USER_GENDER,
        isValid: false,
      };
    },
  },
  computed: {
    ...mapGetters({
      user: ["auth/user"],
      isLoad: ["auth/isLoad"],
    }),
    logo() {
      return config.linkToImg(this.user?.logo).trim();
    },
    isDisabled() {
      return this.fields.some(({ isValid }) => isValid) || this.gender.isValid;
    },
  },
};
</script>

<style  lang="scss"  scoped>
.frame_lk {
  min-height: 100%;
  height: 432px;
  max-width: 618px;
  width: 618px;
  border-radius: 8px;
  padding: 20px;
  background: #f0f3fc;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;

  .photo_frame_lk {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: none;
    border-radius: 8px;

    .h_frame_lk {
      margin-bottom: 15px;
      font-family: $base-ff;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #000000;
    }
    .round {
      border-radius: 100%;
      width: 190px;
      height: 190px;
      position: relative;
      & > img {
        border-radius: 100%;
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 20;
      }
      & > .chage-image {
        cursor: pointer;
        display: none;
        background-color: rgba(255, 255, 255, 0.479);
        backdrop-filter: blur(2px);
        position: absolute;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        z-index: 30;
        top: 0;
        left: 0;
        color: $color-base-blue;
        border-radius: 50%;
      }
    }
    .round:hover {
      & > .chage-image {
        display: flex;
      }
    }
  }

  .contact_frame_lk {
    width: 100%;
    height: 432px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 20%;
    padding-bottom: 30px;
    box-sizing: border-box;
  }
}
</style>
