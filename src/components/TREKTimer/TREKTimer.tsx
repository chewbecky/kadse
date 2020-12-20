import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import useSound from "use-sound";
// @ts-ignore
import completeSound from "../../assets/regeneration_cycle_complete.mp3";
import TREKCountdown from "./TREKCountdown";

interface TREKTimerProps {
  value: number;
  isActive: boolean;
  timerStart: number;
}

const setTimerInPageTitle = (timer: number) => {
  document.title = `${Math.floor(timer / 60)
    .toString()
    .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`;
};

const TREKTimer: FunctionComponent<TREKTimerProps> = (props) => {
  const [timer, setTimer] = useState(props.value);
  const [timerStart, setTimerStart] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isActiveProp, setIsActiveProps] = useState(props.isActive);
  const [progressStart, setProgressStart] = useState(props.value);
  const [progressMemory, setProgressMemory] = useState(0);
  const [play] = useSound(completeSound, {
    volume: 0.25,
  });
  let timeoutID = useRef(0);

  useEffect(() => {
    if (timeoutID.current > 0) {
      clearTimeout(timeoutID.current);
    }
    setIsActive(false);
    setTimerStart(0);
    setProgressStart(props.value);
    setProgressMemory(props.value);
    setTimer(props.value);
  }, [props.value]);

  useEffect(() => {
    if (props.isActive !== isActiveProp) {
      setIsActive(!isActive);
      setIsActiveProps(props.isActive);
      setTimerStart(Math.floor(new Date().getTime() / 1000) + progressMemory);
    }
  }, [props.isActive, isActiveProp, isActive, progressMemory]);

  useEffect(() => {
    setTimerInPageTitle(timer);
    if (isActive) {
      timeoutID.current = window.setTimeout(() => {
        setTimer(timerStart - Math.floor(new Date().getTime() / 1000));
      }, 1000);
      if (timer === 0) {
        play();
        setIsActive(false);
        clearTimeout(timeoutID.current);
      }
    } else {
      setProgressMemory(timer);
    }
  }, [timer, timerStart, play, isActive, setIsActive]);

  return (
    <TREKCountdown timer={timer} progressStart={progressStart}></TREKCountdown>
  );
};

TREKTimer.defaultProps = {};

export default TREKTimer;
