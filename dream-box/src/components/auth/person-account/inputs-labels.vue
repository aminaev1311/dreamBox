<template>
  <div class="inputs_labels">
    <input class=input_dream-box type="text"><label class="label_frame_lk">Имя</label>
  </div>
</template>

<script>
export default {
name: "inputs-labels"
}
</script>

<style lang="scss">
.inputs_labels {
  position: relative;
  display: flex;

  .input_dream-box {
    height: 60px;
    max-width: 319px;
    width: 100%;
    border: none;
    border-radius: 8px;
    margin-bottom: 20px;
    padding-left: 19px;
    padding-right: 19px;
    padding-top: 30px;
    padding-bottom: 10px;
    box-sizing: border-box;
    font-family: $base-ff;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: $color-gray-lk;
  }

  .label_frame_lk {
    position: absolute;
    font-family: $base-ff;
    font-style: normal;
    font-weight: 300;
    font-size: 9px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: $color-gray-lk;
    margin: 10px 0 0 19px;
  }
}

</style>
