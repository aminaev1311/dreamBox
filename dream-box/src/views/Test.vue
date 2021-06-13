<template>
  <div class="lk">
    <person-account></person-account>
    <passw-lk></passw-lk>
  </div>
  <buddy-lk></buddy-lk>
</template>

<script>
import PersonAccount from "@ca/person-account/person-accnt";
import BuddyLk from "@ca/person-account/buddy-lk";
import PasswLk from "@ca/person-account/passw-lk";

export default {
  components: { PersonAccount, BuddyLk, PasswLk }
};
</script>

<style lang="scss">
.lk{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
