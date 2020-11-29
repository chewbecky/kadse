import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { ButtonGroup, Heading } from "@chakra-ui/react";
import TREKProgress from "./components/TREKProgress/TREKProgress";
import TREKBox from "./components/TREKBox";
import React, { useState, useEffect } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timerStart, setTimerStart] = useState(0);

  function toggle() {
    setIsActive(!isActive);
  }

  function setTimerAndStart(value) {
    setTimer(value);
    setTimerStart(value);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
      if (timer === 0) {
        clearInterval(interval);
        setIsActive(!isActive);
      }
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  return (
    <div className="App">
      <div className="actions">
        <Heading as="h1" fontWeight="400" size="4xl" color="brand.orange">
          pomodoro timer
        </Heading>
        <Heading as="h3" fontWeight="400" size="4xl" color="brand.orange">
          {timer}
        </Heading>
        <ButtonGroup>
          <TREKButton
            label="pomodoro"
            color="darkCoral"
            onclick={() => {
              setTimerAndStart(1500);
            }}
          />
          <TREKButton
            label="long break"
            color="orange"
            onclick={() => {
              setTimerAndStart(900);
            }}
          />
          <TREKButton
            label="short break"
            color="orange"
            onclick={() => {
              setTimerAndStart(300);
            }}
          />
          <TREKButton
            label="start/stop"
            color="lightGreen"
            onclick={() => toggle()}
          />
        </ButtonGroup>
        <TREKProgress seconds={(timer / timerStart) * 100} />
        <TREKBox title="test" tint="darkCoral" mirror="true" form="curve" />
        <TREKBox
          title="asdfasdfas"
          marginTop="2rem"
          tint="darkCoral"
          form="curve"
        />
        <TREKBox
          title="Ich teste weiter"
          marginTop="2rem"
          tint="orange"
          form="block"
          mirror
        />
      </div>
    </div>
  );
}

export default App;
