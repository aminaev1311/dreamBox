<template>
  <nav class="menu-up">
    <ul class="menu-up__list">
<!--      <menu-up-li
          v-for="(item,i) on items.weeks"
          :item="item"
          :className="className"
          ></menu-up-li> -->
      <li class="menu-up__item"><a href="" class="menu-up__item">week 1</a><div class="box_week success-wk"></div></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 2</a><div class="box_week failure-wk"></div></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 3</a><div class="box_week success-wk"></div></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 4</a><div class="box_week default-wk"></div></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 5</a><div class="box_week default-wk"></div></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 6</a><div class="box_week default-wk"></div></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 7</a><div class="box_week default-wk"></div></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 8</a><div class="box_week default-wk"></div></li>
      <li class="menu-up__item"><a href="" class="menu-up__item">week 9</a><div class="box_week default-wk"></div></li>
      <li class="menu-up__item">
        <a href="" class="menu-up__item">week 10</a><div class="box_week default-wk"></div>
      </li>
      <li class="menu-up__item">
        <a href="" class="menu-up__item">week 11</a><div class="box_week default-wk"></div>
      </li>
      <li class="menu-up__item">
        <a href="" class="menu-up__item">week 12</a><div class="box_week default-wk"></div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
data(){
  return{
    items:{
      weeks:[1,2,3,4,5,6,7,8,9,10,11,12],
      className:['success-wk', 'default-wk', 'failure-wk']
      },
  }
}

};
</script>

<style lang="scss" scoped>
.menu-up {
  margin:0;
  padding: 0;
  position: relative;
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
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      background: #c8e2ff;
    }
  }
  .box_week{
    display: flex;
    position: absolute;
    width: 88px;
    height: 8px;
    bottom: 0;
    box-sizing: border-box;

  }
  .success-wk{
    background-color: $color-week-sc;
  }
  .default-wk{
    background-color:$color-week-df;
  }
  .failure-wk{
    background-color:$color-week-fl;
  }
}
</style>
