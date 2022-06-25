<template>
  <footer>
    <fb-icon />
    <pin-icon />
    <inst-icon />
  </footer>
</template>

<script>
import FbIcon from "./icons/FbIcon.vue";
import InstIcon from "./icons/InstIcon.vue";
import PinIcon from "./icons/PinIcon.vue";
export default {
  name: "TheFooter",
  components: {
    FbIcon,
    InstIcon,
    PinIcon,
  },
};
</script>

<style lang="scss">
footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
  background-image: url("../assets/pattern-hills.svg");
  background-repeat: no-repeat;
  background-position-x: right;
  background-size: cover;
  height: 197px;
  justify-content: center;
  align-items: center;
  display: flex;
}

@media (max-width: 730px) {
  footer {
    height: 130px;
  }
}
</style>
