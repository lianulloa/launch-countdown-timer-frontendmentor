<template>
  <div
    :class="['tick-card', { flip }]"
    :data-current-count="twoDigits(currentCount)"
  >
    <div class="tick-card-top">{{ twoDigits(previousCount) }}</div>
    <div class="tick-card-bottom" :data-current-count="twoDigits(currentCount)">
      <div
        class="tick-card-bottom-back"
        :data-previous-count="twoDigits(previousCount)"
      />
    </div>
    <small class="text-spaced" style="font-size: 1rem">
      {{ caption }}
    </small>
  </div>
</template>

<script>
import { ref, toRef, watch } from "vue";
export default {
  name: "TickCard",
  props: {
    caption: {
      type: String,
      required: true,
    },
    count: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props) {
    const previousCount = ref(props.count);
    const currentCount = ref(props.count);
    const flip = ref(false);

    const count = toRef(props, "count");

    const twoDigits = (v) => ("0" + v).slice(-2);

    watch(count, (newValue, oldValue) => {
      previousCount.value = oldValue;
      currentCount.value = newValue;
      flip.value = true;

      setTimeout(() => {
        previousCount.value = newValue;
        flip.value = false;
      }, 400);
    });

    return {
      flip,
      previousCount,
      currentCount,
      twoDigits,
    };
  },
};
</script>

<style lang="scss" scoped>
$flip-top-duration: 300ms;
$flip-bottom-duration: 200ms;
$b-radius: 12px;
$top-padding: 12px;

.tick-card {
  position: relative;

  font-size: 6em;

  height: 150px;
  width: 150px;

  border-radius: $b-radius;
  color: $color-soft-red;
  background-color: $color-dark-desaturated-blue;
  box-shadow: 0px 10px $color-deep-dark-blue;
  margin: 0 1rem;

  perspective: 300px;

  &::before {
    content: attr(data-current-count);
    box-sizing: border-box;
    position: absolute;
    left: 0;

    height: 100%;
    width: 100%;

    font-size: 6rem;
    padding-top: $top-padding;
  }

  .tick-card-top {
    width: 100%;
    height: 50%;
    background-color: $color-dark-desaturated-blue;
    padding-top: $top-padding;

    border-radius: $b-radius $b-radius 0px 0px;

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

    border-radius: 0px 0px $b-radius $b-radius;

    perspective: 300px;

    &::after {
      content: attr(data-current-count);
      position: absolute;
      top: 0;

      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-bottom: 11px;
      box-sizing: border-box;

      height: 100%;
      width: 100%;
      overflow: hidden;

      transform: rotateX(83deg);
      transform-origin: top;
      background-color: $color-dark-desaturated-blue;

      border-radius: 0px 0px $b-radius $b-radius;
    }

    .tick-card-bottom-back {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      overflow: hidden;

      &::before {
        content: attr(data-previous-count);
        display: block;
        position: absolute;
        width: 100%;
        top: calc(-100% + 10px);
      }
    }
  }

  &.flip {
    .tick-card-top {
      animation: flip-top $flip-top-duration
        cubic-bezier(0.37, 0.01, 0.94, 0.35);
      animation-fill-mode: forwards;
    }
    .tick-card-bottom::after {
      animation: flip-bottom $flip-bottom-duration
        cubic-bezier(0.15, 0.45, 0.28, 1);
      animation-fill-mode: forwards;
      animation-delay: $flip-top-duration;
    }
  }

  small {
    color: $color-grayish-blue;
    display: block;
    margin-top: 30px;
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
