<template>
  <div class="passw_lk">
    <form >
    <h3 class="h_frame_lk">Изменение пароля</h3>
    <inputs-labels type="password"
    v-for="(input,i) of inputs"
    :key="i"
    :input="input"
    :title="input.name"
    :errorInp="errorInp"
    @remuve-input="checkInput"></inputs-labels>

      <small v-show="mess">Проверте павильность заполения формы</small>
    <button-dream :isDisabled="metodDis" @click="ChangeButton"></button-dream>
    </form>
  </div>
</template>

<script>
import ButtonDream from "@ca/buttons/button-dream";
import InputsLabels from "@ca/person-area/children/inputs-labels";
export default {
  name: "passw-lk",
  components: { InputsLabels, ButtonDream },
  data() {
    return {
      ChangeButton: false,
      metodDis: true,
      passwd: /D/,
      mess: false,
      errorInp: false,
      inputs:[
        {value:'', name:'old password', flag: false},
        {value:'', name:'new password', flag: false},
        {value:'', name:'repl_new password', flag: false}
        ],
    }
  },
  methods: {
    metodDis(){
        this.inputs.some(function(input) {
          return !(input.value != 0)
          })
    },
    ChangeButton(){
        this.inputs.every(function(input){
          return input.flag
        })
    },
    checkInput(inp){
      console.log(inp)
      this.inputs.forEach(input => {
        if(input.name == inp){
          input.flag = true
        }  else {
          this.errorInp = true
          this.mess = true
        }
      })

    }
  }
}
</script>

<style lang="scss" scoped>
.passw_lk {
  min-height: 100%;
  height: 432px;
  max-width: 618px;
  width: 363px;
  border-radius: 8px;
  padding: 20px;
  margin-left: 20px;
  background: #f0f3fc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .h_frame_lk {
    margin-bottom: 15px;
    font-family: $base-ff;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
  }
}
</style>
