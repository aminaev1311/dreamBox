<template>
  <div class="radios_lk">
    <label for="woman">
      <div class="circle" :class="{ active: user === 'female' }"></div>
      <input type="radio" id="woman" value="female" v-model="user" />
      Female</label
    >
    <label for="man">
      <div class="circle" :class="{ active: user === 'male' }"></div>
      <input type="radio" id="man" @click="$event.value = 'mail'" value="male" v-model="user" />
      Male</label
    >
  </div>
</template>

<script>
const validGender = (value) => {
  const string = value?.toString().toLowerCase();
  return value === null || string === "female" || string === "male";
};

export default {
  name: "RadiosLk",
  data() {
    return {
      user: "",
    };
  },
  mounted() {
    this.user = this.gender;
  },
  props: {
    gender: {
      type: String,
      default: null,
      validator: (value) => validGender(value),
    },
  },
  emits: {
    "chenge-gender": (value) => validGender(value),
  },
  watch: {
    gender() {
      this.user = this.gender;
    },
    user() {
      this.$emit("chenge-gender", this.user);
    },
  },

  methods: {
    checkedFemail($event) {},
  },
};
</script>

<style lang="scss">
.radios_lk {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  & > label {
    position: relative;
    display: flex;
    cursor: pointer;
    line-height: 2.5;
    font-size: 14px;
    margin: 5px;
    align-items: center;
    & > input {
      top: 10px;
      left: 2px;
      width: 15px;
      height: 15px;
      opacity: 0;
      margin-right: 5px;
      cursor: pointer;
    }
    & > .circle {
      cursor: pointer;
      top: 9px;
      left: 2px;
      position: absolute;
      display: flex;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 3px solid $color-base-dark;
    }

    & > .circle.active {
      border: 3px solid $color-base-blue;
    }
  }
}
</style>
