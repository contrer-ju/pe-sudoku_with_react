import { useState, useEffect } from "react";

const useDisplayTime = () => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [intevalCounter, setIntervalCounter] = useState(0);
  const [playPauseState, setPlayPauseState] = useState(false);

  const resetTimer = () => {
    setIntervalCounter(0);
    setSecond("00");
    setMinute("00");
  };
  const setFalsePlayPauseState = () => {
    setPlayPauseState(false);
  };
  const setTruePlayPauseState = () => {
    setPlayPauseState(true);
  };
  const togglePlayPauseState = () => {
    setPlayPauseState(!playPauseState)
  }

  useEffect(() => {
    let intervalId;
    if (playPauseState) {
      intervalId = setInterval(() => {
        const secondCounter = intevalCounter % 60;
        const minuteCounter = Math.floor(intevalCounter / 60);

        const computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        const computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setIntervalCounter((counter) => counter + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [
    playPauseState,
    intevalCounter,
    setSecond,
    setMinute,
    setIntervalCounter,
  ]);

  return {
    second,
    minute,
    resetTimer,
    playPauseState,
    setFalsePlayPauseState,
    setTruePlayPauseState,
    togglePlayPauseState,
  };
};

export default useDisplayTime;
