import { useState, useRef } from "react";

let intervalId;

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const active = {
    current: {
      disabled: false
    }
  };

  const startTimer = () => {
    intervalId = setInterval(() => {
      setTime((prevtime) => prevtime + 1)
    }, 1000);
    console.log('refInterval after startTimer', intervalId);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    console.log('refInterval at stopTimer', intervalId)
    if (intervalId) {
      clearInterval(intervalId)
    }
  };
  const resetTimer = () => {
    console.log('refInterval before resetTimer', intervalId)
    setTime(0);
    stopTimer();
    intervalId = null;

    active.current.disabled = false;
  };

  return { time, startTimer, stopTimer, resetTimer, active };
};
export default useTimer;
