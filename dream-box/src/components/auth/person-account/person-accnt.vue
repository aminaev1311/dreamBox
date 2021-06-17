<template>
  <div class="frame_lk">
    <div class="photo_frame_lk">
      <h3 class="h_frame_lk">Your Profile</h3>
      <my-upload
        :langExt="langExt"
        field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="show"
        :width="300"
        :height="300"
        url="/api/upload"
        :headers="headers"
        img-format="png"
        :noSquare="true"
      ></my-upload>
      <div class="round">
        <div class="chage-image" @click="toggleShow">Change logo</div>
        <img :src="logo" alt="avatar" />
      </div>
    </div>

    <div class="contact_frame_lk">
      <inputs-labels title="First name" :value="firstName"></inputs-labels>
      <inputs-labels title="Last name" :value="lastName"></inputs-labels>
      <inputs-labels title="Birthday" :value="birthday"></inputs-labels>
      <radios-lk></radios-lk>
      <button-dream></button-dream>
    </div>
  </div>
</template>

<script>
import ButtonDream from "@ca/buttons/button-dream";
import InputsLabels from "@c/auth/person-account/inputs-labels";
import RadiosLk from "@c/auth/person-account/radios_lk";

import { mapGetters, mapActions, mapMutations } from "vuex";
import MyUpload from "vue-image-crop-upload";
import config from "@config";

function addToken() {
  return {
    headers: localStorage.getItem("TOKEN")
      ? { token: localStorage.getItem("TOKEN") }
      : "",
  };
}

export default {
  components: { ButtonDream, InputsLabels, RadiosLk, MyUpload },
  data() {
    return {
      show: false,
      imgDataUrl: "",
      headers: addToken().headers,
      langExt: {
        hint: "Click or drag the file here to upload",
        loading: "Uploading…",
        noSupported:
          "Browser is not supported, please use IE10+ or other browsers",
        success: "Upload success",
        fail: "Upload failed",
        preview: "Preview",
        btn: {
          off: "Cancel",
          close: "Close",
          back: "Back",
          save: "Save",
        },
        error: {
          onlyImg: "Image only",
          outOfSize: "Image exceeds size limit: ",
          lowestPx: "Image's size is too low. Expected at least: ",
        },
      },
    };
  },
  methods: {
    ...mapActions({
      logOut: "auth/logOut",
    }),
    ...mapMutations({
      setUser: "auth/SETUSER",
    }),
    cropSuccess(imgDataUrl, field) {},
    cropUploadSuccess(jsonData, field) {
      if (jsonData?.user) {
        this.setUser(jsonData.user);
      }
      if (jsonData?.token) {
        localStorage.setItem("TOKEN", jsonData.token);
      }
    },
    cropUploadFail(status, field) {},
    toggleShow() {
      this.show = !this.show;
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
      return this.user.name.split(" ")[0].trim();
    },
    lastName() {
      return this.user.name.split(" ")[1]
        ? this.user.name.split(" ")[1]
        : "No filled";
    },
    birthday() {
      return this.user.birthday ? this.user.birthday : "No filled";
    },
  },
};
</script>

<style  lang="scss">
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
        background-color: rgba(255, 255, 255, 0.794);
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
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 20%;
    padding-bottom: 30px;
  }
}

.vue-image-crop-upload .vicp-wrap .vicp-close {
  display: none;
}

.vue-image-crop-upload .vicp-wrap {
  border-radius: 10px;
  width: 450px;
}
.vue-image-crop-upload .vicp-wrap .vicp-operate a {
  color: $color-base-blue;
}

.vue-image-crop-upload
  .vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type="range"]::-webkit-slider-runnable-track {
  // box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
  width: 100%;
  height: 6px;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  background-color: rgba(68, 107, 170, 0.3);
}
.vue-image-crop-upload
  .vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type="range"]::-webkit-slider-thumb {
 // box-shadow: 0 2px 6px 0 rgb(0 0 0 / 18%);
  -webkit-appearance: none;
  appearance: none;
  margin-top: -3px;
  width: 12px;
  height: 12px;
  background-color: #4189db;
  border-radius: 100%;
  border: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
</style>
