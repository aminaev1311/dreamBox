<template>
  <ModelWin :show="show" @closeWindow="show = !show" />
  <button class="menu">
    <div class="menu-nav">
      <span class="menu-links" @click.stop="show = !show">Delete account</span>
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
  },
};
</script>

<style lang= "scss" scoped>
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
  padding: 10px 20px;
  background-color: $color-base-light;
  position: absolute;
  left: -130px;
  z-index: 500;
  transform: scale(0);
  transition: transform 0.3s;
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
.menu:hover .menu-nav {
  transform: scale(1);
}
</style>