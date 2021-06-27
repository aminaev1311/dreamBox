<template>
  <div class="buddy_lk">
    <div class="text_buddy_lk">
      <h3 class="h_frame_lk">Your Buddy</h3>
      <p class="p_frame_lk">You don’t have personal buddy yet</p>
    </div>
    <div class="contact_frame_lk">
      <InputsLabels value="" title="Email" />
      <div class="position">
        <button-dream></button-dream>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonDream from "@ca/buttons/button-dream";
import InputsLabels from "@ca/person-area/children/inputs-labels";
export default {
  name: "buddy-lk",
  components: { InputsLabels, ButtonDream },
};
</script>

<style lang="scss" scoped>
.buddy_lk {
  margin-top: 25px;
  min-height: 206px;
  height: 206px;
  max-width: 618px;
  width: 618px;
  border-radius: 8px;
  padding: 20px;
  background: #f0f3fc;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
}
.contact_frame_lk {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 29%;
  padding-bottom: 30px;
  .position {
    margin-bottom: 19px;
    margin-top: -19px;
  }
}
.text_buddy_lk {
  width: 136px;
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
  .p_frame_lk {
    width: 136px;
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: $color-link;
    text-align: start;
  }
}
</style>
