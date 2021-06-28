<template>
  <transition enter-active-class="alert-enter" leave-active-class="alert-leave">
    <div v-if="alert" class="alert" :class="[alert.status, { active: alert }]">
      <div class="alert-container">
        <p class="message">
          {{ alert.message }}
        </p>
        <button
          class="alert-button"
          v-if="alert.buttonTitle"
          @click="closeAlert"
        >
          {{ alert.buttonTitle }}
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      closeAlert: "alert/close",
    }),
  },
  computed: {
    ...mapGetters({ alert: ["alert/alert"] }),
  },
};
</script>

<style lang="scss">
@keyframes leave {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

@keyframes enter {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.alert-enter {
  animation: enter 0.3s linear forwards;
}
.alert-leave {
  animation: leave 0.3s linear forwards;
}

.alert {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  min-height: 30px;
  transform: translateY(-100%);
  transition: transform 0.3s;
  justify-content: center;
  z-index: 1000;
  align-items: center;
}
.alert.active {
  transform: translateY(0);
}

.alert-container {
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: $max-width;
  align-items: center;
}

.success {
  background-color: rgb(56, 165, 238);
  border-bottom: 1px solid rgb(0, 98, 255);
}

.error {
  background-color: rgb(235, 127, 127);
  border-bottom: 1px solid rgb(255, 0, 0);
}
.info {
  background-color: rgb(70, 172, 78);
  border-bottom: 1px solid rgb(11, 216, 3);
}

.alert-button {
  border: 1px solid white;
  border-radius: 4px;
  padding: 5px 20px;
  color: $color-font-light;
  background-color: transparent;
  outline: none;
}

.message {
  width: 70%;
  color: $color-font-light;
  font-size: 1.3rem;
  text-align: left;
}
</style>
