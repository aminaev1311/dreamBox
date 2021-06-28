<template>
  <div :class="$style.content">
    <div :class="$style.right">
      <p :class="$style['h-small']">
Sign UP
</p>
      <h1 :class="$style['h1']">
new ACCOUNT
</h1>
      <RegForm />
    </div>
  </div>
</template>

<script>
import RegForm from "@c/auth/sing-up/lib/form";

export default {
  components: {
    RegForm,
  },
};
</script>
<style lang="scss" module>
.content {
  width: 100%;
  max-width: $max-width;
  padding: 49px 139px 48px 217px;
  background: url("~@/assets/images/auth/background-sing-up.png") no-repeat;
  background-color: $color-background;
  background-position-x: 160px;
  background-position-y: center;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  border-radius: 10px;
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
