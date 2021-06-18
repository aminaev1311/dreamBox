<template>
  <my-upload
    ref = "upload"
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
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import MyUpload from "vue-image-crop-upload";
import { addToken } from "@api/auth";
export default {
  data() {
    return {
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
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    MyUpload,
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
        this.$emit('hide')
        this.$refs.upload.off()
      }
      if (jsonData?.token) {
        localStorage.setItem("TOKEN", jsonData.token);
      }
 
    },
    cropUploadFail(status, field) {},
  },
};
</script>

<style lang="scss" >
.vue-image-crop-upload .vicp-wrap .vicp-close {
  display: none !important;
}

.vue-image-crop-upload .vicp-wrap {
  border-radius: 10px !important;
  width: 450px !important;
}
.vue-image-crop-upload .vicp-wrap .vicp-operate a {
  color: $color-base-blue !important;
}

.vue-image-crop-upload
  .vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type="range"]::-webkit-slider-runnable-track {
  // box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%);
  width: 100% !important;
  height: 6px !important;
  cursor: pointer !important;
  border-radius: 2px !important;
  border: none !important;
  background-color: rgba(68, 107, 170, 0.3) !important;
}
.vue-image-crop-upload
  .vicp-wrap
  .vicp-step2
  .vicp-crop
  .vicp-crop-left
  .vicp-range
  input[type="range"]::-webkit-slider-thumb {
  // box-shadow: 0 2px 6px 0 rgb(0 0 0 / 18%);
  -webkit-appearance: none !important;
  appearance: none !important;
  margin-top: -3px !important;
  width: 12px !important;
  height: 12px !important;
  background-color: #4189db !important;
  border-radius: 100% !important;
  border: none !important;
  -webkit-transition: 0.2s !important;
  transition: 0.2s !important;
}
</style>