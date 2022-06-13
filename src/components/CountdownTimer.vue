<template>
  <div class="countdown-timer text-spaced text-uppercase text-weight-500">
    <tick-card caption="Days" />
    <tick-card caption="Hours" />
    <tick-card caption="Minutes" />
    <tick-card caption="Seconds" />
  </div>
</template>

<script>
import TickCard from "./TickCard.vue";
export default {
  name: "CountdownTimer",
  components: { TickCard },
};
</script>

<style lang="scss" scoped>
.countdown-timer {
  display: flex;
  justify-content: center;
}
</style>
