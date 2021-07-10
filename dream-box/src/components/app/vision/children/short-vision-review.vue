<template>
  <div class="sv-review">
    <PhotoReview />
    <TextRiview />
  </div>
</template>

<script>
import PhotoReview from "@c/app/vision/children/children-rw/photo-review";
import TextRiview from "@c/app/vision/children/children-rw/text-review";
export default {
<<<<<<< HEAD:dream-box/src/components/app/vision/children/short-vision-review.vue
  components: { TextRiview, PhotoReview }
}
=======
  name: "SV-review",
  components: { TextRiview, PhotoReview },
};
>>>>>>> 11a784bc600ebc186f6e427a6586b4957f078f82:dream-box/src/components/app/vision/children/SV-review.vue
</script>

<style lang="scss" scoped>
.sv-review {
  display: flex;
  justify-content: flex-start;
}
</style>
