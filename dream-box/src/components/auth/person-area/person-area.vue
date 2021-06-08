<template>
  <div v-if="user" :class="$style['container']">
    <h1>Hello {{ user.name }}!!!</h1>
    <img :src="logo" alt="avatar" width="200" height="200" />
    <p :class="$style.field"><strong>Birthday:</strong> {{ user.birthday }}</p>
    <p :class="$style.field"><strong>Email:</strong> {{ user.email }}</p>
    <div :class="$style.buttons">
      <BaseButton :class="$style.btn" @click="logOut">Log Out</BaseButton>
      <BaseButton
        :class="$style.btn"
        :isLoad="isLoad"
        color="danger"
        @click="$store.dispatch('auth/removeAccount')"
        >Remove account</BaseButton
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseButton from "@c/common/base-button";
import AppNav from "@c/common/nav";
export default {
  components: {
    BaseButton,
    AppNav,
  },
  methods: {
    ...mapActions({
      logOut: "auth/logOut",
    }),
  },
  computed: {
    ...mapGetters({
      user: ["auth/user"],
      isLoad: ["auth/isLoad"],
    }),
    logo() {
      return require("@i/auth/" + this.user?.logo);
    },
  },
};
</script>

<style  lang="scss" module>
.container {
  width: 100%;
  padding: 50px 20px;
  max-width: $max-width;
  background-color: $color-base-gray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.field {
  margin: 20px;
  font-size: 1.5rem;
}

.buttons {
  margin: 20px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn {
  margin: 10px;
}
</style>