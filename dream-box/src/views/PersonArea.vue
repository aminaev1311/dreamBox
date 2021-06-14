<template>
  <div>
    <PersonAreaHeader />
    <div class="lk">
      <person-account />
      <passw-lk />
    </div>
    <buddy-lk />
  </div>
</template>

<script>
import PersonAreaHeader from "@ca/person-account/header-lk";
import PersonAccount from "@ca/person-account/person-accnt";
import BuddyLk from "@ca/person-account/buddy-lk";
import PasswLk from "@ca/person-account/passw-lk";

export default {
  components: { PersonAccount, BuddyLk, PasswLk, PersonAreaHeader },
};
</script>