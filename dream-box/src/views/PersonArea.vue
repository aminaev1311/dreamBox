<template>
  <FullScreenPage>
    <PersonArea />
  </FullScreenPage>
</template>

<script>
import FullScreenPage from "@c/layouts/full-screan-page";
import PersonArea from "@c/auth/person-area";
export default {
  components: { FullScreenPage, PersonArea },
};
</script>