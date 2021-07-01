<template>
  <div class="wrapper-choose-theme">
    <button :class="{ active: isOpen }" @click.prevent="toggleOnOff">
      {{ currentValue }}
      <div class="wrapper-themes" :class="{ active: isOpen }">
        <div class="themes" @click.prevent.stop>
          <span
            class="theme"
            v-for="theme in themes"
            :key="theme"
            @click.prevent.stop="chooseTheme(theme)"
            >{{ theme }}</span
          >
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  DEFAULT_TEXT: "Choose theme",
  MAX_LENGTH: 12,
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    "sent-current-value": (payload) => typeof payload === "string",
  },
  data() {
    return {
      isOpen: false,
      selectedTheme: null,
      themes: [
        "family&friends",
        "cereer",
        "self-development",
        "spiritual",
        "finance",
        "sports",
        "health",
        "relax",
      ],
    };
  },
  computed: {
    currentValue() {
      return this.selectedTheme ? this.selectedTheme : this.$options.DEFAULT_TEXT;
    },
  },
  methods: {
    toggleOnOff() {
      this.isOpen = !this.isOpen;
    },
    chooseTheme(theme) {
      this.selectedTheme =
        theme.length > this.$options.MAX_LENGTH
          ? theme.slice(0, this.$options.MAX_LENGTH) + "..."
          : theme;
      this.toggleOnOff();
      this.$emit("sent-current-value", theme);
    },
  },
};
</script>

<style lang="scss" scoped>
$anim-time: 0.3s;
$radius: 13px;

button {
  @include fr-s-c-b;
  @include o-b-none;
  padding: 0 12px;
  width: 136px;
  height: 28px;
  background: $color-base-blue;
  border: 1px solid $color-base-blue;
  box-sizing: border-box;
  border-radius: $radius;
  font-family: $base-ff;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: $color-font-light;
  position: relative;
  transition: border-radius $anim-time;
  z-index: 150;
}
button.active {
  border-radius: $radius $radius 0 0;
}
button:after {
  content: "";
  width: $radius;
  height: 10px;
  position: absolute;
  background: url("~@/assets/images/goals/arrow-bot.png") no-repeat;
  background-size: 80%;
  background-position-x: 50%;
  background-position-y: 50%;
  right: 8px;
  transition: transform $anim-time;
}
button.active:after {
  transform: rotate(180deg);
}
.wrapper-themes {
  width: 136px;
  @include fc-c-c-b;
  padding-top: 15px;
  position: absolute;
  left: 0;
  top: calc(100% - 15px);
  border-radius: 0 0 $radius $radius;
  border: 2px solid $color-base-blue;
  border-top: none;
  transform-origin: 50% 0;
  opacity: 0;
  transition: transform $anim-time, opacity 0.1s;
  transform: scaleY(0);
}

.themes {
  padding-top: 5px;
  border-radius: 0 0 $radius $radius;
  cursor: auto;
  @include fc-c-c-b;
  background-color: $color-base-light;
  width: 100%;
  z-index: 120;
  & > span {
    cursor: pointer;
    font-family: $base-ff;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: $color-font-dark;
    margin: 5px 0;
    width: 100%;
    padding: 5px;
  }
  & > span:hover {
    color: $color-base-blue;
  }
}
.wrapper-themes.active {
  transform: scaleY(1);
  opacity: 1;
}
</style>
