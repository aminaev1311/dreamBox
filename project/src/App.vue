<template>
  <div id="app">
    <app-alert />
    <router-view />
  </div>
</template>

<script>
import AppAlert from "@c/alerts";
export default {
  components: {
    AppAlert,
  },
};
</script>


<style lang="scss">
#app {
  font-family: $base-ff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
