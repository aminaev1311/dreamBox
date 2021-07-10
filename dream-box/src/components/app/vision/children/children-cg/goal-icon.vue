<template>
  <div class="goal_icon_cg" :style="{ backgroundColor: colors }">
    <small class="goal_text_cg" :style="{ '--bg-image': backgrImg() }"> Goal{{ numbers }} </small>
  </div>
</template>

<script>
export default {
  props: {
    numbers: Number,
    colors: String,
    comp: String,
  },
  data() {
    return {
      image: 'url("../../../../../assets/images/auth/Vector.png")',
      filterImg: 'url("../../../../../assets/images/auth/Vector_3.png")',
    };
  },
  methods: {
    backgrImg() {
      console.log(this.comp);
      if (this.comp === "Vector3") {
        console.log(this.filterImg);
        return this.filterImg;
      } else {
        return this.image;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.goal_icon_cg {
  margin: 0 0 28px;
  position: absolute;
  display: flex;
  width: 89px;
  height: 28px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  .goal_text_cg {
    font-family: $base-ff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #ffffff;
  }

  .goal_text_cg::before {
    content: " ";
    display: inline-block;
    width: 12px;
    height: 11px;
    margin-right: 7px;
    background-image: url("~@/assets/images/auth/Vector.png");
    //background-image: url('../../../../../assets/images/auth/Vector_3.png');
  }
}
</style>
