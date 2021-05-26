<template>
  <div class="container">
    <h1 class="h1 mt-5">Sign in</h1>
    <form class="form-singn-in">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <router-link :to="{ name: 'registration' }"
        >If you aren't registrated yet, click this link, pleas...</router-link
      >
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  async mounted() {
    const getParams = this.$router.currentRoute.fullPath.split("/?")[1];
    if (getParams) {
      await this.activate({
        id: getParams.split("=")[1].trim(),
      });
    }
  },
};
</script>


<style lang="scss" scoped>
.form-singn-in {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
}
.form-check {
  display: flex;
  justify-content: center;
  & > .form-check-label {
    margin-left: 10px;
  }
}
</style>
