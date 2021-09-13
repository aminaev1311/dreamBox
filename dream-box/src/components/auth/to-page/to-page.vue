<template>
  <p class="rout">
    {{ message }}
    <router-link :to="rout">
      {{ nameLink }}
    </router-link>
  </p>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
    },
    rout: {
      type: Object,
      required: true,
    },
    nameLink: {
      type: String,
      default: "to",
    },
  },
};
</script>

<style lang="scss" scoped>
.rout {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.1px;
  color: $color-font-dark;
  text-align: left;
  & > a {
    color: $color-link;
  }
  & > a:hover {
    color: darken($color-link, 30%);
  }
}
</style>
