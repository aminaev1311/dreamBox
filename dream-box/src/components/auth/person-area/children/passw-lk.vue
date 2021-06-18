<template>
  <div class="passw_lk">
    <h3 class="h_frame_lk">Изменение пароля</h3>
    <inputs-labels type="password"></inputs-labels>
    <inputs-labels type="password"></inputs-labels>
    <inputs-labels type="password"></inputs-labels>
    <button-dream></button-dream>
  </div>
</template>

<script>
import ButtonDream from "@ca/buttons/button-dream";
import InputsLabels from "@ca/person-area/children/inputs-labels";
export default {
  name: "passw-lk",
  components: { InputsLabels, ButtonDream },
};
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
