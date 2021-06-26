<template>
  <h3>Currents goals</h3>
  <div class="currents-goals">
      <RecordEc :numbers="numbers[0]"
      :colors="colors[0]"
      :comp="comp"
      :title="title[0]"></RecordEc>
      <SecondIg :numbers="numbers[1]"
        :colors="colors[1]"
        :comp="comp"
        :title="title[1]"></SecondIg>
      <WarAndPeace :numbers="numbers[2]"
        :colors="colors[2]"
        :comp="filtr"
        :title="title[2]"></WarAndPeace>
  </div>
</template>

<script>
import RecordEc from "@c/auth/short-vision/children/children-cg/record-ec";
import SecondIg from "@c/auth/short-vision/children/children-cg/second-ig";
import WarAndPeace from "@c/auth/short-vision/children/children-cg/war-and-peace";
export default {
  name: "Currents-Goals",
  components: {WarAndPeace, SecondIg, RecordEc},
  data(){
    return{
      colors:[ '#62A1FF', '#900093', '#F9AA34'],
      numbers:[1,2,3],
      comp: 'Vector',
      filtr:'Vector_3',
      title:['Record personal efficiency video course',
        'Second important goal',
        'War and Peace reading']
    }
  }
}
</script>

<style scoped>
h3 {
  text-align: left;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 46px;
  letter-spacing: 0.2px;
  color: $color-font-dark;
}
.currents-goals{
  display: flex;
  justify-content: flex-start;
}
</style>
