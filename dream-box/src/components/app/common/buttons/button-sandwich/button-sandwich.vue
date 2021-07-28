<template>
  <button class="sandwich">
    <div class="circle"></div>
    <div class="circle right"></div>
    <div class="circle left"></div>
  </button>
</template>

<script>
export default {
  name: "button",
};
</script>

<style lang="scss" scoped>
.sandwich {
  background: #e6e9f8;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 310px;
  margin-right: 15px;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 50%;
  z-index: 50;
  .circle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #a9acbf;
    border-radius: 50%;
  }
  .right {
    margin-right: 9px;
  }
  .left {
    margin-left: 9px;
  }
  &:hover {
    background: #c8e2ff;
    cursor: pointer;
  }
  &:active {
    background: #cfcfff;
  }
}
</style>
