<template>
  <nav class="menu-up">
    <ul class="menu-up__list">
      <li class="menu-up__item"><a href="" class="menu-up__item">week 1</a></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 2</a></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 3</a></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 4</a></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 5</a></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 6</a></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 7</a></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 8</a></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 9</a></li>
      <li class="menu-up__item">
        <a href="" class="menu-up__item">week 10</a>
      </li>
      <li class="menu-up__item">
        <a href="" class="menu-up__item">week 11</a>
      </li>
      <li class="menu-up__item">
        <a href="" class="menu-up__item">week 12</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu-up {
  background-color: $color-base-gray;
  border-radius: 10px;
  &__list {
    display: flex;
  }
  &__item {
    width: 88px;
    height: 80px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: $color-font-dark;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: #c8e2ff;
    }
  }
}
</style>