<template>
  <div :class="$style.buttons">
    <button
      type="submit"
      :class="$style['batton-create']"
      :disabled="isDisabled"
    >
      <span v-if="isLoad">{{ titleMainButton }}</span>
      <div
        v-else
        class="spin primary"
        style="width: 1.5rem; height: 1.5rem"
      ></div>
    </button>
    <span :class="$style.or">or</span>
    <div :class="$style['sosial-networks']">
      <button
        :class="$style['button-network']"
        @click.prevent="$emit('event-google', $event)"
      >
        <img src="@i/auth/google.png" alt="icon" />
      </button>
      <button
        :class="$style['button-network']"
        @click.prevent="$emit('event-vk', $event)"
      >
        <img src="@i/auth/vk.png" alt="icon" />
      </button>
      <button
        :class="$style['button-network']"
        @click.prevent="$emit('event-fb', $event)"
      >
        <img src="@i/auth/fb.png" alt="icon" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isLoad: {
      type: Boolean,
      default: false,
    },
    titleMainButton: {
      type: String,
      default: "Create",
    },
  },
};
</script>

<style lang="scss" module>
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.batton-create {
  cursor: pointer;
  outline: none;
  border: none;
  width: 132px;
  min-height: 43px;
  background-color: $color-buttons;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  color: $color-font-light;
}
.batton-create:hover {
  background-color: darken($color-buttons, 20%);
}
.batton-create:active {
  transform: scale(0.99);
}

.batton-create:disabled {
  cursor: not-allowed;
  background-color: $color-buttons-disabled;
  color: $color-font-disabled;
}

.or {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  color: #a9acbf;
}

.sosial-networks {
  display: flex;
  align-items: center;
}

.button-network {
  background-color: transparent;
  width: 43px;
  height: 43px;
  border: 1px solid #a9acbf;
  outline: none;
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button-network:hover {
  border-color: #5464bb;
}
.button-network:active {
  border-color: #8a91b9;
  transform: scale(0.95);
}
</style>