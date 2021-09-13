<template>
  <div class="model-window-wrapper" :class="{ active: show }" @click.self="closeWin">
    <div class="window">
      <p class="content">
        Are you sure you want to delete your account? This action is irreversible
      </p>
      <button class="btn-delete" @click="$store.dispatch('auth/removeAccount')">Yes, delete</button>
      <button @click.self="closeWin" class="btn-mistake">No, it’s a mistake</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    "close-window": null,
  },
  methods: {
    closeWin() {
      this.$emit("close-window");
    },
  },
};
</script>

<style lang="scss">
.show {
  outline: none;
  border: none;
  background-color: transparent;
  text-decoration: none;
}
.model-window-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2d3446c9;
  transform: scale(0);
  transition: transform 0.3s;
  z-index: 500;
}
.model-window-wrapper.active {
  transform: scale(1);
}
.menu-links {
  cursor: pointer;
  margin: 5px 0;
  outline: none;
  border: none;
  background-color: transparent;
  text-decoration: none;
  color: $color-font-dark;
}
.menu-links:hover {
  color: $color-link;
}
.menu-links:active,
a:active {
  color: darken($color-link, 20%);
}
.window {
  width: 400px;
  height: 250px;
  background: #f0f3fc;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 61px 33px 51px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  & > .content {
    max-width: 553px;
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #000000;
  }
  & > button {
    cursor: pointer;
    margin: 57px 15px 0;
    width: 134px;
    height: 39px;
    color: #ffffff;
    border: none;
    outline: none;
    border-radius: 8px;
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.1px;
  }
  & > .btn-delete {
    background: #c8e2ff;
  }
  & > .btn-delete:hover {
    background: red;
  }
  & > .btn-mistake {
    background: #1e92fa;
  }
  & > .btn-mistake:hover {
    background: darken(#1e92fa, 20%);
  }
}
</style>
