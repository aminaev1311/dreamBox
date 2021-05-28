<template>
  <div class="container">
    <LeftSideBar />
  </div>
</template>

<script>
import LeftSideBar from "@c/left-sidebar";
export default {
  components: {
    LeftSideBar,
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
</style>