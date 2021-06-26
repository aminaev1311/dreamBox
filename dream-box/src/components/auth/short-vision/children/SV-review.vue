<template>
  <div class="sv-review">
    <PhotoReview/>
    <TextRiview/>
  </div>
</template>

<script>

import PhotoReview from "@c/auth/short-vision/children/children-rw/photo-review";
import TextRiview from "@c/auth/short-vision/children/children-rw/text-review";
export default {
  name: "SV-review",
  components: { TextRiview, PhotoReview }
}
</script>

<style lang="scss" scoped>
.sv-review{
  display: flex;
  justify-content: flex-start;
}
</style>
