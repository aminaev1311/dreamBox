<template>
  <div>
    <a-progress stroke-linecap="square" :percent="75" />
    <a-progress stroke-linecap="square" :percent="75" type="circle" />
    <a-progress stroke-linecap="square" :percent="75" type="dashboard" />
  </div>
</template>

<script>
export default {
name: "doughnut-chart",

}
</script>

<style scoped>

</style>
