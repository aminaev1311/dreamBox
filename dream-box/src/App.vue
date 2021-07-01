<template>
  <div>
    <app-alert />
    <router-view v-slot="{ Component }">
      <transition enter-active-class="enter-page" leave-active-class="leave-page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
@keyframes enter {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes leave {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
}

.enter-page {
  animation: enter 0.3s linear forwards;
}
.leave-page {
  animation: leave 0.3s linear forwards;
}

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
