<template>
  <div class="lk">
    <person-area></person-area>
    <passw-lk></passw-lk>
  </div>
  <buddy-lk></buddy-lk>
</template>

<script>
import PersonAccount from "@ca/person-area/children/person-info";
import BuddyLk from "@ca/person-area/children/buddy-lk";
import PasswLk from "@ca/person-area/children/passw-lk";

export default {
  components: { PersonAccount, BuddyLk, PasswLk },
};
</script>

<style lang="scss">
.lk {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
