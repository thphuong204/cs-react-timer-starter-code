import React, { useRef, useState } from "react";
import { formatTime } from "./formatTime";
import useTimer from "./useTimer";

function App() {
  const { time, startTimer, stopTimer, resetTimer } = useTimer(0);
  const [activeStatus, setActiveStatus] = useState(false);

  let btnRef = useRef();

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)} </p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={() => {
            stopTimer(btnRef);
            setActiveStatus(false);
          }}>
            Stop
          </button>
          <button
            className="button"
            ref={btnRef}
            disabled={activeStatus}
            onClick={() => {
              startTimer(btnRef);
              setActiveStatus(true);
            }}
          >
            Start
          </button>
          <button className="button" onClick={() => {
            resetTimer(btnRef);
            setActiveStatus(false);
          }}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
