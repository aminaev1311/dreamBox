<template>
  <nav :class="$style.nav">
    <router-link v-if="user" :to="{ name: 'start' }"> To App </router-link>
    <router-link :to="{ name: 'auth' }"> Sing In </router-link>
    <router-link :to="{ name: 'registration' }"> Sin Up </router-link>
    <router-link v-if="user" :to="{ name: 'person-area' }">
      Person area
    </router-link>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: ["auth/user"],
    }),
  },
};
</script>

<style lang = "scss" module>
.nav {
  position: fixed;
  display: flex;
  width: 100%;
  max-width: $max-width;
  margin: 0 auto;
  justify-content: center;
  padding: 20px;
  right: 0;
  & > a {
    margin: 0 20px;
    color: $color-base-blue;
    font-weight: 500;
    font-size: 1.3rem;
  }
}
</style>