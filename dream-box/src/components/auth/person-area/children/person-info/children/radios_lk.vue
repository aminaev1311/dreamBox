<template>
  <div class="radios_lk">
    <label for="woman">
      <div class="circle" :class="{ active: user === 'woman' }"></div>
      <input type="radio" id="woman" value="woman" v-model="user" checked />
      Женщина</label>
    <label for="man">
      <div class="circle" :class="{ active: user === 'man' }"></div>
      <input type="radio" class="" id="man" value="man" v-model="user" />
      Мужчина</label>
  </div>
</template>

<script>
export default {
  name: "RadiosLk",
  data() {
    return {
      user: "woman",
    };
  },
};
</script>

<style lang="scss">
.radios_lk {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  & > label {
    position: relative;
    display: flex;
    cursor: pointer;
    line-height: 2.5;
    font-size: 14px;
    margin: 5px;
    align-items: center;
    & > input {
      top: 10px;
      left: 2px;
      width: 15px;
      height: 15px;
      opacity: 0;
      margin-right: 5px;
      cursor: pointer;
    }
    & > .circle {
      cursor: pointer;
      top: 9px;
      left: 2px;
      position: absolute;
      display: flex;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 3px solid $color-base-dark;
    }

    & > .circle.active {
      border: 3px solid $color-base-blue;
    }
  }
}
</style>
