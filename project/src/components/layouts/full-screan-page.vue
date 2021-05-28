<template>
  <div :class="$style.container">
    <slot :class="$style.slot"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.slot {
  display: flex;
}
</style>