import React, { useRef } from "react";
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer } = useTimer(0);

  let btnRef = useRef();

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)} </p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={() => stopTimer(btnRef)}>
            Stop
          </button>
          <button
            className="button"
            ref={btnRef}
            onClick={() => startTimer(btnRef)}
          >
            Start
          </button>
          <button className="button" onClick={() => resetTimer(btnRef)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
