<template>
  <div>
    <div class="diagram progress" :class="[percent >= 50 ? action : '' ]" :style="{transform: 'rotate('+deg+'deg)'}">
      <div class="piece left"></div>
      <div class="piece right"></div>
      <div class="text">
        <div>
          <b>{{ percent }}%</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    percent: Number
  },
  data () {
    return {
      action: 'over_50'
    }
  },
  methods: {
    deg () {
      return (360 * this.percent / 100) + 180
    }
  }
}
</script>

<style scoped>
.diagram {
  width: 92px;
  height:92px;
  border-radius: 50%;
  background: #C8E2FF;
  position: relative;
  overflow: hidden;
}
.diagram::before {
  content: '';
  display: block;
  position: absolute;
  top:16px;
  left:16px;
  right:16px;
  bottom:16px;
  border-radius: 50%;
  background: #fff;
  z-index: 3;
  opacity: 1;
}
.diagram .piece {
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
  position: absolute;
}
.diagram .piece::before {
  content: '';
  display: block;
  position: absolute;
  width: 50%;
  height: 100%;
}
.diagram .piece.left {
  transform: rotate(0deg);
  z-index: 2;
  border-radius: 50%; /* only FireFox < 75.0v (fix bug)*/
}
.diagram.over_50 .piece.left {
  transform: rotate(180deg);
}
.diagram .piece.right {
  transform: rotate(180deg);
  z-index: 1;
  border-radius: 50%; /* only FireFox < 75.0v (fix bug)*/
}
.diagram.over_50 .piece.right {
  transform: rotate(360deg);
}
.diagram .left::before {
  background: #C8E2FF;

}
.diagram.over_50 .left::before {
  background: #F9AA34;
}
.diagram .right::before {
  background: #C8E2FF;

}
.diagram .text {
  position: absolute;
  z-index: 3;
  top: 0;
  bottom: 0;
  left:0;
  right:0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.diagram .text b {
  font-size: 1.5em;
}
</style>
