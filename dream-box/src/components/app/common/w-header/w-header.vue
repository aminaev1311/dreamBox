<template>
  <div class="week-header">
    <p class="title">{{ "January, 12" }}</p>
    <p class="events-amount">{{ 5 }} events for today</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.week-header {
  max-width: 554px;
  min-height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: $color-base-gray;
}
.title {
  font-family: $base-ff;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: $color-font-dark;
}
.events-amount {
  font-family: $base-ff;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: $color-font-blue;
}
</style>