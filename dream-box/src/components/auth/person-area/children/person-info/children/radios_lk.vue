<template>
  <div class="radios_lk">
    <label for="woman">
    <input type="radio" class="" value="woman" v-model="user">
    <span class=""></span>
    Женщина</label>
    <label for="man">
    <input type="radio" class="" value="man" v-model="user">
    <span class=""></span>
    Мужчина</label>
  </div>
</template>

<script>
export default {
name: "radios_lk",
data(){
  return{
    user:'',
  }
},

}
</script>

<style lang="scss">
.radios_lk {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  label {
    display: block;
    cursor: pointer;
    line-height: 2.5;
    font-size: 14px;
    margin: 5px;
  }
  /*input[type=radio] {
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
    position: absolute;
  }
  span{
    display: inline-block;
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    user-select: none;
    background-color: dimgrey;
    vertical-align: text-bottom; /* Выравнивание кнопки по центру*/
   /* margin-right: 5px; /* Отступ между кнопкой и меткой*/
  }
 /* [type="radio"] + span {
    display: block;
  }
  input[type=radio]+span::before{
    content: "";
    display: inline-block;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    width: 8px;
    height: 8px;
    left:18%;
    top:24%;
   transform: translateY(-8%);
    z-index: 1;
  }
  input[type=radio]:checked + span::before {
    background-color: #1E92FA;
  }

}*/
</style>
