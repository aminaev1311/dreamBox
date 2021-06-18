<template>
  <div>
    <PersonAreaHeader />
    <div class="wrapper-info-password">
      <PersonAccount />
      <PasswLk />
    </div>
    <BuddyLk />
  </div>
</template>

<script>
import PersonAreaHeader from "@ca/person-area/children/header-lk";
import PersonAccount from "@ca/person-area/children/person-info";
import BuddyLk from "@ca/person-area/children/buddy-lk";
import PasswLk from "@ca/person-area/children/passw-lk";

export default {
  components: { PersonAccount, BuddyLk, PasswLk, PersonAreaHeader },
};
</script>
<style lang="scss" scoped>
.wrapper-info-password {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
</style>