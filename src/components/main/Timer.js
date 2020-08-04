import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ cups, setCups, showNotification }) => {

  const { seconds, minutes, restart } = useTimer({
    onExpire: () => showNotification("Its been 30 minutes since your last drink", "Drink Up")
  });
  return (
    <div className="card">
      {cups < 8 ? (
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "25px" }}>
            <span>{minutes}</span>:<span>{seconds}</span>
          </div>
          <button
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 1800);
              restart(time);
              setCups(cups + 1);
            }}
          >
            Drink
          </button>
        </div>
      ) : (
          <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "25px" }}>Stay Thirsty My Friend!</div>
        <button
            onClick={() => {
              const time = new Date();
              time.setSeconds(time.getSeconds() + 1800);
              restart(time);
              setCups(0);
            }}
          >
            Reset
          </button>
</div>
      )}
    </div>
  );
};

export default Timer;
