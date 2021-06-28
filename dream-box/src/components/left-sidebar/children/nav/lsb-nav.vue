<template>
  <div class="nav">
    <router-link to="/" exact exact-active-class="active">
      <div class="img weeks"></div>
      <span>Weeks</span>
    </router-link>
    <router-link to="/goals" exact exact-active-class="active">
      <div class="img goals"></div>
      <span>Goals</span>
    </router-link>
    <router-link to="/vision" exact exact-active-class="active">
      <div class="img vision"></div>
      <span>Vision</span>
    </router-link>
    <router-link to="/archive" exact exact-active-class="active">
      <div class="img archive"></div>
      <span>Archive</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  & > a {
    height: 40px;
    padding: 5px 25px;
    display: flex;
    justify-content: flex-start;
    text-decoration: none;
    align-items: center;
    & > .img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    & > .weeks {
      background: url("~@/assets/images/lsb/weeks-dark.svg");
    }
    & > .goals {
      background: url("~@/assets/images/lsb/goals-dark.svg");
    }
    & > .vision {
      background: url("~@/assets/images/lsb/vision-dark.svg");
    }
    & > .archive {
      background: url("~@/assets/images/lsb/archive-dark.svg");
    }
    & > span {
      font-family: $base-ff;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.1px;
      color: $color-base-dark;
    }
  }
  & > a:hover {
    background-color: lighten($color-base-blue, 30%);
  }
  & > a.active {
    border-right: 3px solid $color-base-blue;
    & > .weeks {
      background: url("~@/assets/images/lsb/weeks-blue.svg");
    }
    & > .goals {
      background: url("~@/assets/images/lsb/goals-blue.svg");
    }
    & > .vision {
      background: url("~@/assets/images/lsb/vision-blue.svg");
    }
    & > .archive {
      background: url("~@/assets/images/lsb/archive-blue.svg");
    }
    & > span {
      font-family: $base-ff;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.1px;
      color: $color-base-blue;
    }
  }
}
</style>
