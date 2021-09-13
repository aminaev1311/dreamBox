<template>
  <div class="menu-wrapper">
    <button class="menu" :disabled="isDisabled" @click="showMenu"></button>
    <div v-if="menuList.length && show" class="goal-menu">
      <i class="fa fa-times-circle" aria-hidden="true" @click="showMenu"></i>
      <p class="goal-menu-field" v-for="field in menuList" :key="field.title" @click="field.cb">
        <span>{{ field.title }}</span>
        <i class="fa-li fa fa-spinner fa-spin"></i>
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
  flex-direction: column;
  position: absolute;
  display: flex;
  width: 200px;
  border: 1px solid #c8e2ff9b;
  z-index: 300;
  right: 23px;
  top: 24px;
  padding: 10px 0 0;
  background-color: white;
  & > i {
    color: $color-base-blue;
    font-size: 1.5rem;
    margin: 0 10px 10px auto;
    cursor: pointer;
  }
  & > i:hover {
    color: darken($color-base-blue,20);
  }
  & > p {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    cursor: pointer;
    padding: 0 10px;
    box-sizing: border-box;
  }
  & > p:hover {
    background-color: lighten($color-base-error, 30);
  }
}
</style>
