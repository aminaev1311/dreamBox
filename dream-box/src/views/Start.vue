<template>
  <div class="container">
    <LeftSideBar />
    <div class="start-pages">
      <AppHeader />
      <router-view></router-view>
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

<style lang ="scss">
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