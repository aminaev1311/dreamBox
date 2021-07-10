<template>
  <FullScreenPage>
    <SingIn />
  </FullScreenPage>
</template>

<script>
import FullScreenPage from "@c/layouts/full-screan-page";
import SingIn from "@c/auth/sing-in";
export default {
  components: { FullScreenPage, SingIn },
};
</script>
