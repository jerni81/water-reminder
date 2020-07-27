import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ cups, setCups }) => {
  const { seconds, minutes, restart } = useTimer({
    onExpire: () => alert("DRINK WATER!"),
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
        <div style={{ fontSize: "25px" }}>Stay Thirsty My Friend!</div>
      )}
    </div>
  );
};

export default Timer;
