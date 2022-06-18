import { ref, computed } from "vue";

function useTimer({ days = 14, hours = 0, minutes = 0, seconds = 0 } = {}) {
  const rdays = ref(days);
  const rhours = ref(hours);
  const rminutes = ref(minutes);
  const rseconds = ref(seconds);
  const finished = computed(() => {
    return rdays.value + rhours.value + rminutes.value + rseconds.value === 0;
  });

  const decreaseTime = (
    ref,
    resetValue,
    resetDependencies = [],
    callback = () => {}
  ) => {
    if (
      resetDependencies.reduce((acc, current) => {
        acc += current.value;
        return acc;
      }, 0) + ref.value
    ) {
      if (ref.value === 0) {
        ref.value = resetValue;
        callback();
      } else {
        ref.value = ref.value - 1;
      }
    }
  };

  const decreaseDays = decreaseTime.bind(undefined, rdays, 0);

  const decreaserHours = decreaseTime.bind(
    undefined,
    rhours,
    23,
    [rdays],
    decreaseDays
  );

  const decreaserMinutes = decreaseTime.bind(
    undefined,
    rminutes,
    59,
    [rdays, rhours],
    decreaserHours
  );

  const decreaserSeconds = decreaseTime.bind(
    undefined,
    rseconds,
    59,
    [rdays, rhours, rminutes],
    decreaserMinutes
  );

  const interval = setInterval(() => {
    decreaserSeconds();
    if (finished.value) {
      clearInterval(interval);
    }
  }, 1000);

  return {
    minutes: rminutes,
    seconds: rseconds,
    hours: rhours,
    days: rdays,
  };
}

export default useTimer;
