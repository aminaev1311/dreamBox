<template>
  <div class="left-sidebar">
    <div class="user-info">
      <div class="logo">
        <img src="@i/auth/daefault-avatar.png" alt="logo" />
      </div>
      <div class="description">
        <span class="name">{{ user ? user.name : "Guest" }}</span>
        <span class="role">{{ user ? user.role : "me" }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: ["auth/user"],
    }),
  },
};
</script>

<style lang="scss" scoped>
.left-sidebar {
  width: 100%;
  max-width: 237px;
  height: 100vh;
  box-sizing: border-box;
  background-color: $color-base-grey;
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