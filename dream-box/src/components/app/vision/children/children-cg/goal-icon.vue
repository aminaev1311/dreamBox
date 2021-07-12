<template>
  <div class="goal_icon_cg" :style="{ backgroundColor: item.color }">
    <small class="goal_text_cg" :style="{'$bg-image': bg_image}"> Goal {{ item.id }}</small>

  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      validator: value =>{ return (typeof value === "object" && !Array.isArray(value) && value !== null) }
    }
  },
  data() {
    return { bg_image: 'url("~@/assets/images/auth/' + this.item.goal_icon + '")' }
  }
}
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
  ::v-deep(:before) {
    content: " ";
    display: inline-block;
    width: 12px;
    height: 11px;
    margin-right: 7px;
    background-image: $bg-image;
    //var(--bg-image);
  }
}
</style>
