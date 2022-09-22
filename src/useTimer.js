import { useState } from "react";

let intervalId;

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);

  const startTimer = (btnRef) => {
    intervalId = setInterval(() => {
      setTime((prevtime) => prevtime + 1)
    }, 1000);
    console.log('refInterval after startTimer', intervalId);
    // btnRef.current.setAttribute("disabled", true);
  };
  const stopTimer = (btnRef) => {
    console.log('refInterval at stopTimer', intervalId)
    if (intervalId) {
      clearInterval(intervalId)
    }
    // btnRef.current.setAttribute("disabled", false);
  };
  const resetTimer = () => {
    console.log('refInterval before resetTimer', intervalId)
    setTime(0);
    stopTimer();
    intervalId = null;
  };

  return { time, startTimer, stopTimer, resetTimer };
};
export default useTimer;
