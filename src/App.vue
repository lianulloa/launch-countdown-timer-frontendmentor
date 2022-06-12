<template>
  <div class="content">
    <h1 class="text-uppercase text-spaced">We're launching soon</h1>
    <countdown-timer />
    <the-footer />
  </div>
</template>

<script>
import CountdownTimer from "./components/CountdownTimer.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: {
    CountdownTimer,
    TheFooter,
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Red Hat Text", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content {
  height: 70vh;
  display: grid;
  grid-template-rows: 0.6fr 2fr;
}
</style>
