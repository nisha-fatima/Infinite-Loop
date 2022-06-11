import React, { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("06/14/2022").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div className="container mx-auto rounded-lg mt-2 timer">
      <h2 className="subtitle">Days Until Launchpad</h2>
      <div className="countdown-wrapper">
        <div className="time-section">
          <div className="time">
            {state.days} <small className="time-text">Days</small>
          </div>
        </div>
        <div className="time-section">
        </div>
        <div className="time-section">
          <div className="time">{state.hours}</div>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.minutes}</div>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.seconds}</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
