<template>
<<<<<<< HEAD
  <div class="goal_icon_cg" :style="{ backgroundColor: item.color }">
    <small class="goal_text_cg" :style="{'$bg-image': bg_image}"> Goal {{ item.id }}</small>
=======
  <div class="goal_icon_cg" :style="{ backgroundColor: colors }">
    <small class="goal_text_cg" :style="{ '--bg-image': backgrImg() }"> Goal{{ numbers }} </small>
>>>>>>> 11a784bc600ebc186f6e427a6586b4957f078f82
  </div>
</template>

<script>
export default {
  props: {
<<<<<<< HEAD
    item: {
      type: Object,
      required: true,
      validator : value =>{
        return (typeof value === "object" && !Array.isArray(value) && value !== null)
    }}
=======
    numbers: Number,
    colors: String,
    comp: String,
>>>>>>> 11a784bc600ebc186f6e427a6586b4957f078f82
  },
  data() {
    return {
<<<<<<< HEAD
      bg_image: 'url("~@/assets/images/auth/' + this.item.goal_icon + '")'
    }
  }
}
=======
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
>>>>>>> 11a784bc600ebc186f6e427a6586b4957f078f82
</script>

<style lang="scss" scoped>
//:root { --bg-image: url("~@/assets/images/auth/pc.png");}
$bg-image: url("~@/assets/images/auth/pc.png");
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

<<<<<<< HEAD
  ::v-deep(:before) {
      content: " ";
      display: inline-block;
      width: 12px;
      height: 11px;
      margin-right: 7px;
      background-image: $bg-image;
        //var(--bg-image);
    }
=======
  .goal_text_cg::before {
    content: " ";
    display: inline-block;
    width: 12px;
    height: 11px;
    margin-right: 7px;
    background-image: url("~@/assets/images/auth/Vector.png");
    //background-image: url('../../../../../assets/images/auth/Vector_3.png');
  }
>>>>>>> 11a784bc600ebc186f6e427a6586b4957f078f82
}
</style>
