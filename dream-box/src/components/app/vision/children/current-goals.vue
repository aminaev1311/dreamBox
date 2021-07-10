<template>
  <h3>Currents goals</h3>
  <div class="currents-goals">
<<<<<<< HEAD
    <Goal v-for="item in goals"
          :key="item.id"
          :item="item">
<!--      :color="item.color"-->
<!--      :goal_icon="item.goal_icon"-->
<!--      :title="item.title"-->
    </Goal>
    </div>
=======
    <RecordEc :numbers="numbers[0]" :colors="colors[0]" :comp="comp" :title="title[0]"></RecordEc>
    <SecondIg :numbers="numbers[1]" :colors="colors[1]" :comp="comp" :title="title[1]"></SecondIg>
    <WarAndPeace
      :numbers="numbers[2]"
      :colors="colors[2]"
      :comp="comp[1]"
      :title="title[2]"
    ></WarAndPeace>
  </div>
>>>>>>> 11a784bc600ebc186f6e427a6586b4957f078f82
</template>

<script>
import Goal from "@c/app/vision/children/children-cg/goal";
export default {
  name: "Currents-Goals",
  components: { Goal },
  data () {
    return {
      goals:[
        { id: 1, title: 'Record personal efficiency video course', color: '#62A1FF', goal_icon: 'pc.png' },
        { id: 2, title: 'Second important goal', color: '#900093', goal_icon: 'pc.png' },
        { id: 3, title: 'War and Peace reading', color: '#F9AA34', goal_icon: 'athletics.png' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-bottom: 15px;
  margin-top: 20px;
  text-align: left;
  font-family: $base-ff;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 46px;
  letter-spacing: 0.2px;
  color: $color-font-dark;
}
.currents-goals {
  display: flex;
  justify-content: flex-start;
}
</style>
