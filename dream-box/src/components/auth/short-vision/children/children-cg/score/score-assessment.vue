<template>
<div>
  <slot></slot>
</div>
</template>

<script>
export default {
name: "score-assessment"
}
</script>

<style scoped>
h3{
  text-align: left;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #2D3446;
}
h4{
  text-align: left;
  font-family: $base-ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-yellow;
}
</style>
