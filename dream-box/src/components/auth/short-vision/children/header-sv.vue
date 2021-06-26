<template>
  <div class="header-sv">
    <h1 class="title">Short vision</h1>
  </div>
</template>

<script>
export default {
name: "header-sv"
}
</script>

<style lang = "scss" scoped>
.header-sv{
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
& > .title {
    text-align: left;
    font-family: $base-ff;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 46px;
    letter-spacing: 0.2px;
    color: #000000;
  }
}
</style>
