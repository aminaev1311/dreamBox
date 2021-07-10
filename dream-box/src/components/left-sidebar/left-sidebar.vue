<template>
  <div class="left-sidebar">
    <router-link to="/person-area" class="user-info">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>
      <div class="description">
        <span class="name">{{ userName }} </span>
        <span class="role">{{ user && user.role ? user.role : "me" }}</span>
      </div>
      <button class="user-menu" @click.prevent="showLogOut = !showLogOut" />
    </router-link>
    <button v-if="showLogOut" class="user-logout" @click="logOut">
      <img src="@i/lsb/sing-out.svg" alt="icon-sing-out" />
      <span>Sing Out</span>
    </button>
    <LsbNav />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import config from "@config";
import LsbNav from "./children/nav";

export default {
  data() {
    return {
      showLogOut: false,
    };
  },
  components: { LsbNav },
  methods: {
    ...mapActions({
      logOut: "auth/logOut",
    }),
  },
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
      const img = config.linkToImg(this.user?.logo).trim();
      return img;
    },
  },
  mounted() {},
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
  text-decoration: none;
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
    text-decoration: none;
  }
  & > a:hover .role {
    color: darken($color-font-light, 20%);
  }
}
.user-menu {
  margin-left: auto;
  width: 20px;
  height: 20px;
  @include o-b-none;
  background-color: transparent;
  background-image: url("~@/assets/images/lsb/three-dots.svg");
  background-repeat: no-repeat;
  background-position-x: center;
}
.user-menu:hover {
  transform: scale(1.1);
}
.user-menu:active {
  transform: scale(0.9);
}
.user-logout {
  @include o-b-none;
  @include fr-c-c-b;
  background-color: $color-base-light;
  width: 100%;
  height: 80px;
  & > img {
    margin-right: 18px;
  }
}
.user-logout:hover {
  background-color: lighten($color-base-blue, 40);
}
</style>
