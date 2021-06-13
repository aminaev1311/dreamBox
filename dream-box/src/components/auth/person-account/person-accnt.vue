<template>
  <div class="frame_lk">

    <div class="photo_frame_lk">
      <h3 class="h_frame_lk">Your Profile</h3>
      <img src="@i/auth/Photo_lk.jpg" alt="" class="round">
    </div>
    <div class="contact_frame_lk">
      <inputs-labels></inputs-labels>
      <inputs-labels></inputs-labels>
      <inputs-labels></inputs-labels>
      <radios-lk></radios-lk>
      <button-dream></button-dream>
    </div>
  </div>
</template>

<script>
import ButtonDream from "@ca/buttons/button-dream";
import InputsLabels from "@c/auth/person-account/inputs-labels";
import RadiosLk from "@c/auth/person-account/radios_lk";
export default {
  components: { ButtonDream, InputsLabels, RadiosLk }
}
</script>

<style  lang="scss">
.frame_lk {
  min-height: 100%;
  height: 432px;
  max-width: 618px;
  width: 618px;
  border-radius: 8px;
  padding: 20px;
  margin-left: 20px;
  background: #F0F3FC;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .photo_frame_lk {
    display: flex;
    flex-direction: column;
    justify-content: start;
    border: none;
    border-radius: 8px;

    .h_frame_lk {
      margin-bottom: 15px;
      font-family: $base-ff;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #000000;
    }
    .round {
      border-radius: 100px;
      width: 191, 97px;
      height: 183, 58px;
    }
  }

  .contact_frame_lk {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 20%;
    padding-bottom: 30px;

  }
}

</style>
