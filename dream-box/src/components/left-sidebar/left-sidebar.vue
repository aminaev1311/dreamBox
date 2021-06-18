<template>
  <div class="left-sidebar">
    <div class="user-info">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>
      <div class="description">
        <router-link to="/person-area" class="name"
          >{{ userName }}
        </router-link>
        <span class="role">{{ user && user.role ? user.role : "me" }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import config from "@config";

export default {
  computed: {
    ...mapGetters({
      user: ["auth/user"],
    }),
    userName() {
      const { user } = this;
      return user && user.name ? user.name.split(" ")[0] : "Guest";
    },
    userRole() {
      const { user } = this;
      return user && user.role ? user.role : "me";
    },
    logo() {
      const img = config.linkToImg(this.user?.logo).trim()
      return img;
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.left-sidebar {
  width: 100%;
  max-width: 237px;
  height: 100vh;
  box-sizing: border-box;
  background-color: $color-base-gray;
}
.user-info {
  background: $color-base-blue;
  padding: 12px 24px;
  display: flex;
  align-items: center;
}
.logo {
  width: 56px;
  height: 56px;
  border: 3px solid #c8e2ff;
  border-radius: 50%;
  & > img {
    border-radius: 50%;
    width: 56px;
    height: 56px;
  }
}
.description {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & > .name {
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: $color-font-light;
  }
  & > .role {
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: $color-font-light;
  }
}
</style>