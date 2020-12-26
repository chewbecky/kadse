import React, { FunctionComponent, useEffect, useState, useRef } from "react";
import useSound from "use-sound";
// @ts-ignore
import completeSound from "../../assets/regeneration_cycle_complete.mp3";
import TREKCountdown from "./TREKCountdown";

interface TREKTimerProps {
  value: number;
  toggleActive: boolean;
  timerStart: number;
  reset: boolean;
}

const setTimerInPageTitle = (timer: number) => {
  document.title = `${Math.floor(timer / 60)
    .toString()
    .padStart(2, "0")}:${(timer % 60).toString().padStart(2, "0")}`;
};

const TREKTimer: FunctionComponent<TREKTimerProps> = (props) => {
  const [timer, setTimer] = useState(props.value);
  const [timerStart, setTimerStart] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [toggleActive, setToggleActive] = useState(false);
  const [progressStart, setProgressStart] = useState(props.value);
  const [play] = useSound(completeSound, {
    volume: 0.25,
  });
  let timeoutID = useRef(0);

  useEffect(() => {
    console.log("use effect init");
    setIsActive(false);
    if (timeoutID.current > 0) {
      clearTimeout(timeoutID.current);
    }
    setTimerStart(0);
    setProgressStart(props.value);

    setTimer(props.value);
  }, [props.value, props.reset]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log("use effect toggle");
    if (timer > 0) {
      setIsActive(!isActive);
      setTimerStart(Math.floor(new Date().getTime() / 1000) + timer);
    } else {
      setIsActive(false);
    }
  }, [props.toggleActive, toggleActive]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    console.log("use effect timer", timer, isActive, timerStart);

    setTimerInPageTitle(timer);
    if (isActive && timerStart > 0) {
      timeoutID.current = window.setTimeout(() => {
        setTimer(timerStart - Math.floor(new Date().getTime() / 1000));
      }, 1000);
      if (timer <= 0) {
        /* new Notification("🖖 Regeneration Cycle Complete!", {
          icon: "kadse/apple-touch-icon.png",
          body: "Pormodor yo!",
          image:
            "https://i.pinimg.com/originals/96/48/68/964868019877993647b63d028761a052.png",
        }); */
        setTimer(0);
        play();
        setToggleActive(false);
        clearTimeout(timeoutID.current);
      }
    }
  }, [timer, isActive]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <TREKCountdown timer={timer} progressStart={progressStart}></TREKCountdown>
  );
};

TREKTimer.defaultProps = {};

export default TREKTimer;
