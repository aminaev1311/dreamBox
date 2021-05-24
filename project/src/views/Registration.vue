<template>
  <div :class="$style['container-new-account']">
    <div :class="$style.content">
      <div :class="$style.left">
        <img
          src="@/assets/images/new-account/background.svg"
          alt=""
          width="295"
          height="451"
        />
      </div>
      <div :class="$style.right">
        <p :class="$style['h-small']">Sign UP</p>
        <h1 :class="$style['h1']">new ACCOUNT</h1>
        <RegForm />
      </div>
    </div>
  </div>
</template>

<script>
import RegForm from "@c/auth/reg";

export default {
  components: {
    RegForm,
  },
};
</script>
<style lang="scss" module>
.container-new-account {
  width: 100%;
  background-color: $color-background;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

.content {
  width: 100%;
  max-width: $max-width;
  padding: 49px 139px 48px 217px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
  & > img {
    margin: auto;
  }
}
.right {
  width: 100%;
  max-width: 407px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.h-small {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-dark;
  text-align: left;
  margin-bottom: 5px;
}
.h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-dark;
  margin: 0 0 36px 0;
}
</style>



