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

    <form class="contact_frame_lk" @submit.prevent="() => {}">
      <inputs-labels
        title="First name"
        :value="fields.firstName"
        v-model="fields.firstName"
        @input="changeControl()"
      ></inputs-labels>
      <inputs-labels
        title="Last name"
        :value="fields.firstName"
        v-model="fields.firstName"
        @input="changeControl()"
      ></inputs-labels>
      <inputs-labels
        title="Birthday"
        :value="fields.firstName"
        v-model="fields.firstName"
        @input="changeControl()"
      ></inputs-labels>
      <radios-lk></radios-lk>
      <button-dream :is-disabled="!isChenged"></button-dream>
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
  components: { ButtonDream, InputsLabels, RadiosLk, ChangeImage },
  data() {
    return {
      show: false,
      isChenged: false,
    };
  },
  methods: {
    changeControl() {
      this.isChenged = true;
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
    firstName() {
      return this.user?.name.split(" ")[0].trim();
    },
    lastName() {
      return this.user?.name.split(" ")[1] ? this.user.name.split(" ")[1] : "No filled";
    },
    birthday() {
      return this.user?.birthday ? this.user.birthday : "No filled";
    },
    fields() {
      return {
        lastName: this.lastName,
        firstName: this.firstName,
        birthday: this.birthday,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
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
