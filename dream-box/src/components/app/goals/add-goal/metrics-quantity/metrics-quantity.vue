<template>
  <div class="wrapper-metrics-quantity">
    <input
      type="text"
      name="metrics-quantity"
      class="input-metrics-quantity"
      placeholder="00"
      v-model="quantity"
    />
    <div class="buttons">
      <button class="inc" @click.prevent="inc"></button>
      <button class="dec" @click.prevent="dec"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: null,
    };
  },
  emits: {
    "send-metrics-quantity": (payload) => typeof payload === "number",
  },
  methods: {
    inc() {
      this.quantity++;
    },
    dec() {
      this.quantity = this.quantity > 0 ? --this.quantity : 0;
    },
  },
  watch: {
    quantity() {
      const newQuantity = [];
      this.quantity
        .toString()
        .split("")
        .forEach((letter) => {
          if (!/[0-9]/.test(letter)) return;
          newQuantity.push(letter);
        });
      const newQuantityTypeNumber = parseInt(newQuantity.slice(0, 2).join(""));
      this.quantity = newQuantityTypeNumber > 0 ? newQuantityTypeNumber : 0;
      this.$emit("send-metrics-quantity", this.quantity);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper-metrics-quantity {
  display: flex;
}

.input-metrics-quantity {
  @include o-b-none;
  width: 28px;
  height: 18px;
  padding: 2px 5px;
  border-radius: 3px 0 0 3px;
  box-sizing: border-box;
  font-family: $base-ff;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.1px;
  @include placeholder {
    font-family: $base-ff;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.1px;
    color: #a9acbf;
  }
}

.buttons {
  width: 14px;
  height: 18px;
  border-radius: 0 3px 3px 0;
  @include fc-c-c-b;
  & > .inc {
    @include o-b-none;
    width: 14px;
    height: 9px;
    border-radius: 0 3px 0 0;
    background-image: url("~@/assets/images/goals/arrow-top-small.svg");
    background-repeat: no-repeat;
    background-size: 95%;
    background-position: center;
    background-color: #c8e2ff;
  }
  & > .dec {
    @include o-b-none;
    width: 14px;
    height: 9px;
    border-radius: 0 0 3px 0;
    background-image: url("~@/assets/images/goals/arrow-bot-small.svg");
    background-repeat: no-repeat;
    background-size: 95%;
    background-position: center;
    background-color: #c8e2ff;
  }
  & > .inc:hover,
  & > .dec:hover {
    background-color: darken(#c8e2ff, 20%);
  }
  & > .inc:active,
  & > .dec:active {
    background-color: darken(#c8e2ff, 40%);
  }
}
</style>