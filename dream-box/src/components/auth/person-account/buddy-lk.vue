<template>
  <div class="buddy_lk">
    <div class="text_buddy_lk">
      <h3 class="h_frame_lk">Your Buddy</h3>
      <p class="p_frame_lk">You don’t have personal buddy yet</p>
    </div>
    <div class="contact_frame_lk">
      <inputs-labels></inputs-labels>
      <button-dream></button-dream>
    </div>
  </div>
</template>

<script>
import ButtonDream from "@ca/buttons/button-dream";
import InputsLabels from "@c/auth/person-account/inputs-labels";
export default {
  name: "buddy-lk",
  components: { InputsLabels, ButtonDream },
};
</script>

<style lang="scss">
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
}
.contact_frame_lk {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 19%;
  padding-bottom: 30px;
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
  }
}
</style>
