<template>
  <h3>Currents goals</h3>
  <div class="currents-goals">
    <Goal v-for="item in goals" :key="item.id" :item="item">
      <!--      :color="item.color"-->
      <!--      :goal_icon="item.goal_icon"-->
      <!--      :title="item.title"-->
    </Goal>
  </div>
</template>

<script>
import Goal from "@c/app/vision/children/children-cg/goal";
export default {
  name: "Currents-Goals",
  components: { Goal },
  data() {
    return {
      goals: [
        {
          id: 1,
          title: "Record personal efficiency video course",
          color: "#62A1FF",
          goal_icon: "pc.png",
        },
        { id: 2, title: "Second important goal", color: "#900093", goal_icon: "pc.png" },
        { id: 3, title: "War and Peace reading", color: "#F9AA34", goal_icon: "athletics.png" },
      ],
    };
  },
};
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
