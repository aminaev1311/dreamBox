<template>
  <div class="radios_lk">
    <input type="radio" class="radio_dream-box" name="woman">
    <span class="custom-radio-btn"></span>
    <label>Женщина</label>

    <input type="radio" class="radio_dream-box" name="man">
    <span class="custom-radio-btn"></span>
    <label>Мужчина</label>
  </div>
</template>

<script>
export default {
name: "radios_lk"
}
</script>

<style lang="scss">
.radios_lk {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  label{
    margin-right: 15px;
  }
  .radio_dream-box {
    width: 0;
    height: 0;
  }
  .custom-radio-btn {
    position: relative; /* Родительский элемент*/
    display: inline-block; /* Для применения рамок, размеров*/
    width: 12px;
    height: 12px;
    background-image: url("~@/assets/images/auth/Ellipse-lk.png");
    vertical-align: text-bottom; /* Выравнивание кнопки по центру*/
    margin-right: 5px; /* Отступ между кнопкой и меткой*/
  }
  .custom-radio-btn::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .radio_dream-box:checked +.custom-radio-btn::before  {
    background-image: url("~@/assets/images/auth/Ellipse-lk-ch.png");
    color: #f3f3f3;
    font-size: 30px;
    text-align: center;
    line-height: 18px;
  }
}
</style>
