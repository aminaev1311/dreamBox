<template>
  <li class="menu-up__item">
    <a href="" class="menu-up__item">week {{ item }}</a>
    <div class="box_week" :class="className"></div>
  </li>
</template>

<script>
export default {
name: "menu-up-li",
  props:{
      {item: integer},
      {className: String},
  },
}
</script>

<style scoped>

</style>
