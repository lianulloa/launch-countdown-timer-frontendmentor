<template>
  <div class="countdown-timer text-uppercase text-weight-700">
    <tick-card caption="Days" :count="days" />
    <tick-card caption="Hours" :count="hours" />
    <tick-card caption="Minutes" :count="minutes" />
    <tick-card caption="Seconds" :count="seconds" />
  </div>
</template>

<script>
import TickCard from "./TickCard.vue";
import useTimer from "./countdownTimer.hook";
export default {
  name: "CountdownTimer",
  components: { TickCard },
  setup() {
    const { minutes, seconds, hours, days } = useTimer();

    return {
      minutes,
      seconds,
      hours,
      days,
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
