<template>
  <div class="tick-card">
    <div class="tick-card-top">41</div>
    <div class="tick-card-bottom">
      <div class="tick-card-bottom-back" />
    </div>
    {{ label }}
  </div>
</template>

<script>
export default {
  name: "TickCard",
  props: {
    caption: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tick-card {
  position: relative;

  font-size: 6em;

  height: 150px;
  width: 150px;

  border-radius: 8px;
  background-color: $color-dark-desaturated-blue;
  margin: 0 1rem;

  perspective: 300px;

  &::before {
    content: "42";
    box-sizing: border-box;
    position: absolute;
    left: 0;

    height: 100%;
    width: 100%;

    font-size: 6rem;
    padding-top: 4px;
  }

  .tick-card-top {
    width: 100%;
    height: 50%;
    background-color: $color-dark-desaturated-blue;
    padding-top: 4px;

    border-radius: 8px 8px 0px 0px;

    transition-duration: 200ms;

    transform: rotate(0deg);
    transform-origin: bottom;
  }
  .tick-card-bottom {
    position: relative;

    width: 100%;
    height: 50%;

    border-top: 1px solid $color-deep-dark-blue;
    background-color: $color-dark-desaturated-blue;

    border-radius: 0px 0px 8px 8px;

    perspective: 300px;

    &::after {
      content: "42";
      position: absolute;
      top: 0;

      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 19px;
      box-sizing: border-box;

      height: 100%;
      width: 100%;
      overflow: hidden;

      transform: rotateX(83deg);
      transform-origin: top;
      background-color: $color-dark-desaturated-blue;

      border-radius: 0px 0px 8px 8px;
    }

    .tick-card-bottom-back {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      overflow: hidden;

      &::before {
        content: "41";
        display: block;
        position: absolute;
        width: 100%;
        top: calc(-100% + 2px);
      }
    }
  }

  &:hover {
    .tick-card-top {
      animation: flip-top 200ms cubic-bezier(0.37, 0.01, 0.94, 0.35);
      animation-fill-mode: forwards;
    }
    .tick-card-bottom::after {
      animation: flip-bottom 100ms cubic-bezier(0.15, 0.45, 0.28, 1);
      animation-fill-mode: forwards;
      animation-delay: 200ms;
    }
  }
}

@keyframes flip-top {
  0% {
    transform: rotate(0deg);
  }
  0%,
  99% {
    opacity: 0.99;
  }
  100% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}
@keyframes flip-bottom {
  0% {
    transform: rotateX(83deg);
  }
  // 0%,
  // 99% {
  //   opacity: 0.99;
  // }
  100% {
    transform: rotateX(0deg);
  }
}
</style>
