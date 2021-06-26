<template>
    <div>
      <HeaderSv/>
      <SVReview/>

    </div>
</template>

<script>
import HeaderSv from '@ca/short-vision/children/header-sv'
import SVReview from "@c/auth/short-vision/children/SV-review";
export default {
  components: {SVReview, HeaderSv },
  name: "short-vision"
}
</script>

<style lang="scss" scoped>

</style>
