<template>
  <div class="menu-wrapper">
    <button class="menu" :disabled="isDisabled" @click="showMenu"></button>
    <div v-if="menuList.length && show" class="goal-menu">
      <p class="goal-menu-field" v-for="field in menuList" :key="field.title" @click="field.cb">
        {{ field.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    menuList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showMenu() {
      this.show = !this.show;
      console.log(this.show);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-wrapper {
  display: flex;
  position: relative;
}
.menu {
  cursor: pointer;
  display: block;
  background-color: #e6e9f8;
  width: 100%;
  width: 24px !important;
  height: 24px !important;
  border-radius: 50%;
  margin-left: 10px;
  @include o-b-none;
  box-sizing: border-box;
}
.menu {
  background-image: url("~@/assets/images/goals/three-dots.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.menu:disabled {
  cursor: not-allowed;
  background-color: lighten(#e6e9f8, 30%);
}

.goal-menu {
  position: absolute;
  display: flex;
  width: 300px;
  border: 1px solid $color-buttons-lk;
  padding: 10px;
  z-index: 300;
  right: 50px;
  border-radius: 5px;
  & > p {
    cursor: pointer;
  }
}
</style>
