<template>
  <div class="tactics-header">
    <h4 class="title">Tactics</h4>
    <div class="numbers">
      <div class="number" v-for="number in 12" :key="number">{{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tactics-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > .title {
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #a9acbf;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0 0 13px;
  }
  & > .numbers {
    display: flex;
    max-width: 426px;
    width: 100%;
    & > .number {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: $base_ff;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.1px;
      text-transform: uppercase;
      color: #a9acbf;
      margin: 0 2px;
    }
  }
}
</style>
