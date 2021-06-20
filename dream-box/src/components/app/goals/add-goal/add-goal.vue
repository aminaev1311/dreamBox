<template>
  <form class="add-goal" @submit.prevent="() => {}">
    <div class="goal-name">
      <ChooseTheme />
      <input
        type="text"
        name="goal-name"
        class="input-goal-name"
        placeholder="Name of the goal"
      />
      <button class="menu"></button>
      <button class="close"></button>
    </div>
  </form>
</template>

<script>
import ChooseTheme from "@c/app/goals/add-goal/choose-theme";
export default {
  components: {
    ChooseTheme,
  },
};
</script>

<style lang="scss" scoped>
.add-goal {
  @include fc-c-c-b;
  background-color: $color-base-gray;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 18px;
}
.goal-name {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-goal-name {
  margin: 0 20px;
  display: flex;
  flex-grow: 1;
  width: auto;
  height: 28px;
  border-radius: 8px;
  background-color: $color-base-light;
  @include o-b-none;
  padding: 4px 20px;
  box-sizing: border-box;
  @include placeholder {
    font-family: $base-ff;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: #a9acbf;
  }
}
.menu,
.close {
  display: block;
  background-color: #e6e9f8;
  width: 100%;
  width: 24px !important;
  height: 24px !important;
  border-radius: 50%;
  margin-left: 10px;
  @include o-b-none;
  box-sizing: border-box;
}
.menu {
  background-image: url("~@/assets/images/goals/three-dots.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.close {
  background-image: url("~@/assets/images/goals/arrow-top-gray.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.menu:hover,
.close:hover {
  background-color: lighten(#e6e9f8, 20%);
}
.menu:active,
.close:active {
  background-color: lighten($color-base-blue, 40%);
}
</style>