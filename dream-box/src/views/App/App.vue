<template>
  <div class="container">
    <LeftSideBar />
    <div class="start-pages">
      <AppHeader />
      <router-view v-slot="{ Component }" class="margin-top">
        <transition enter-active-class="enter-page" leave-active-class="leave-page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import LeftSideBar from "@c/left-sidebar";
import AppHeader from "@c/header";
export default {
  components: {
    LeftSideBar,
    AppHeader,
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
.margin-top {
  margin-top: 24px;
}
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: flex-start;
}
.start-pages {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}
</style>
