<template>
  <button class="menu" @click.self="show = !show">
    <div v-if="show" class="menu-nav">
      <ModelWin>Remove account</ModelWin>
      <button class="menu-links"
@click="logOut"
>
Log out
</button>
      <router-link class="menu-links"
to="/"
>
Back to App
</router-link>
      <button class="menu-links"
@click.self="show = !show"
>
Close
</button>
    </div>
  </button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ModelWin from "@ca/person-area/children/model-win";
export default {
  components: {
    ModelWin,
  },
  data() {
    return {
      show: false,
    };
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

<style lang="scss" scoped>
.menu {
  cursor: pointer;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  background: url("~@/assets/images/auth/menu-lk.png") no-repeat;
  position: relative;
  background-position-x: 50%;
}

.menu-nav {
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
  background-color: $color-base-gray;
  border: 1px solid darken($color-base-gray, 20%);
  position: absolute;
  left: -150px;
  z-index: 500;
  & > .menu-links {
    cursor: pointer;
    margin: 5px 0;
    outline: none;
    border: none;
    background-color: transparent;
    text-decoration: none;
    color: $color-font-dark;
  }
  & > .menu-links:hover {
    color: $color-link;
  }
  & > .menu-links:active,
  & > a:active {
    color: darken($color-link, 20%);
  }
}
</style>
