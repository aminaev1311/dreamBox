<template>
  <FullScreenPage>
    <RestorePasswod />
  </FullScreenPage>
</template>

<script>
import FullScreenPage from "@c/layouts/full-screan-page";
import RestorePasswod from "@c/auth/restore-password";
export default {
  components: { RestorePasswod, FullScreenPage },
};
</script>
