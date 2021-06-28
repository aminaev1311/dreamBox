<template>
  <div class="header-lk">
    <h1 class="title">
Личный кабинет
</h1>
    <AppPersonAreaMenu />
  </div>
</template>

<script>
import AppPersonAreaMenu from "@ca/person-area/children/menu";

export default {
  components: {
    AppPersonAreaMenu,
  },
};
</script>

<style lang="scss" scoped>
.header-lk {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > .title {
    font-family: $base-ff;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 46px;
    letter-spacing: 0.2px;
    color: #000000;
  }
  & > .show-menu-lk {
    cursor: pointer;
    width: 20px;
    height: 20px;
    outline: none;
    border: none;
    background: url("~@/assets/images/auth/menu-lk.png") no-repeat;
  }
}
</style>
