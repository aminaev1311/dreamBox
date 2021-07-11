<template>
  <FullScreenPage>
    <ForgotPasswod />
  </FullScreenPage>
</template>

<script>
import FullScreenPage from "@c/layouts/full-screan-page";
import ForgotPasswod from "@c/auth/forgot-password";
export default {
  components: { ForgotPasswod, FullScreenPage },
};
</script>
