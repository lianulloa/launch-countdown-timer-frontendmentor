<template>
  <div class="countdown-timer text-uppercase text-weight-500">
    <tick-card caption="Days" count="00" />
    <tick-card caption="Hours" count="00" />
    <tick-card caption="Minutes" :count="minutes" />
    <tick-card caption="Seconds" :count="seconds" />
  </div>
</template>

<script>
import { ref } from "vue";
import TickCard from "./TickCard.vue";
export default {
  name: "CountdownTimer",
  components: { TickCard },
  setup() {
    const minutes = ref(15);
    const seconds = ref(12);

    const interval = setInterval(() => {
      if (seconds.value === 0) {
        clearInterval(interval);
        return;
      }
      seconds.value = seconds.value - 1;
    }, 1000);

    return {
      minutes,
      seconds,
    };
  },
};
</script>

<style lang="scss" scoped>
.countdown-timer {
  display: flex;
  justify-content: center;
}
</style>
