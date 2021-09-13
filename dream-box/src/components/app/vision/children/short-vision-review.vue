<template>
  <div class="sv-review">
    <div class="photo-review">
      <img :src="imageUrl" />
    </div>
    <div class="text-review">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "visions-defualt-avatar.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sed amet, placerat nulla\n" +
        "        phasellus et interdum leo. Tincidunt turpis duis massa senectus eget. Commodo rutrum tortor\n" +
        "        fusce venenatis. Ipsum habitant vitae pretium amet sollicitudin. Aliquet consequat eget\n" +
        "        interdum suspendisse amet ut pretium, sed libero. Et metus, quis rhoncus dictum sit mauris\n" +
        "        rhoncus egestas vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    };
  },
  computed: {
    imageUrl() {
      return require(`@i/app/common/${this.imgUrl}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.sv-review {
  display: flex;
  justify-content: flex-start;

  .photo-review {
    width: 176px;
    height: 208px;
    border-radius: 8px;
  }
  .text-review {
    height: 208px;
    max-width: 900px;
    width: 100%;
    padding: 30px 48px;
    text-align: left;
    box-sizing: border-box;
    & > p {
      font-family: $base-ff;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.1px;
      color: #2d3446;
      margin-bottom: 0.5rem;
    }
  }
}
</style>
