<template>
  <div class="text-review">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum sed amet, placerat nulla
      phasellus et interdum leo. Tincidunt turpis duis massa senectus eget. Commodo rutrum tortor
      fusce venenatis. Ipsum habitant vitae pretium amet sollicitudin. Aliquet consequat eget
      interdum suspendisse amet ut pretium, sed libero. Et metus, quis rhoncus dictum sit mauris
      rhoncus egestas vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> <p>Tincidunt
      turpis duis massa senectus eget. Commodo rutrum tortor fusce venenatis. Ipsum habitant vitae
      pretium amet sollicitudin. Aliquet consequat eget interdum suspendisse amet ut pretium, sed
      libero. Et metus, quis rhoncus dictum sit mauris rhoncus egestas vitae. Commodo rutrum tortor
      fusce venenatis. Ipsum habitant vitae pretium amet sollicitudin. Aliquet consequat eget
      interdum suspendisse amet ut pretium, sed libero.
    </p>
  </div>
</template>

<script>
export default {
  name: "text-riview",
};
</script>

<style lang="scss" scoped>
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
    color: #2D3446;
    margin-bottom: 0.5rem;
  }
}
</style>
