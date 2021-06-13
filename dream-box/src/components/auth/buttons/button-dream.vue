<template>
  <button class="button_dream-box">Сохранить</button>
</template>

<script>
export default {
}
</script>

<style  lang="scss" >
.button_dream-box{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 15px 19px;
  border: none;
  border-radius: 8px;
  position: static;
  width: 134px;
  height: 39px;
  left: 0px;
  top: 280px;
  background: $color-buttons ;
  /*background: $color-buttons-lk; -- disabled*/

  font-family: $base-ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.1px;
  color: $color-font-light;
}
.button_dream-box:hover{
  background: #87C8F3;
}
.button_dream-box:visited{
  background: #1880DB;
}
</style>
