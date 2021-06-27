<template>
  <div class="wrapper-add-more">
    <button class="add" @click.prevent="show">
      <img v-if="!showInput" src="@i/goals/plus.svg" alt="icon-plus" />
      <span>{{ buttonTitle }}</span>
    </button>
    <div v-if="showInput" class="add-tactic">
      <input type="text" v-model="value" :class="{ error: isError }" />
      <button @click="addTactic">Save</button>
    </div>
    <small v-if="showInput && isError" class="error-message"
      >This field can't be empty!</small
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInput: false,
      value: "",
      isError: false,
    };
  },
  props: {
    startAdding: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    show() {
      this.showInput = !this.showInput;
    },
    addTactic() {
      this.isError = this.error;
      if (this.isError) return;
      this.$emit("add-tactic", this.value);
      this.value = "";
    },
  },
  watch: {
    value() {
      if (this.value !== "") this.isError = false;
    },
  },
  computed: {
    buttonTitle() {
      return this.showInput ? "Close" : !this.startAdding ? "add" : "add-more";
    },
    error() {
      return this.value === "";
    },
  },
};
</script>

<style lang="scss">
.wrapper-add-more {
  @include fc-s-c-b;
  align-items: flex-start !important;
}
.add {
  @include fr-c-c-b;
  @include o-b-none;
  width: 98px;
  height: 20px;
  background: #c8e2ff;
  border-radius: 16px;
  & > span {
    margin-left: 6px;
    font-family: $base-ff;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: #ffffff;
  }
}
.add:hover {
  background-color: darken(#c8e2ff, 20%);
}
.add:active {
  background-color: darken(#c8e2ff, 30%);
}

.add-tactic {
  display: flex;
  margin: 10px 0;
  & > input {
    @include o-b-none;
    border: 1px solid #c8e2ff !important;
    border-right: none !important;
    border-radius: 16px 0 0 16px;
    padding: 0 10px;
    height: 30px;
    box-sizing: border-box;
  }
  & > input.error {
    @include o-b-none;
    border-color: red !important;
    background-color: rgba(255, 0, 0, 0.37);
  }
  & > button {
    @include fr-c-c-b;
    @include o-b-none;
    width: 98px;
    height: 30px;
    background: #c8e2ff;
    border-radius: 0 16px 16px 0;
    font-family: $base-ff;
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.1px;
    color: $color-font-dark;
  }
  & > button:hover {
    background-color: darken(#c8e2ff, 20%);
  }
  & > button:active {
    background-color: darken(#c8e2ff, 30%);
  }
}
.error-message {
  font-family: $base-ff;
  color: red;
  font-size: 14px;
  padding: 0 10px;
}
</style>