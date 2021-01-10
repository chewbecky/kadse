import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import TREKBox from "./components/TREKBox";
import TREKTimer from "./components/TREKTimer/TREKTimer";
import React, { useState } from "react";
import TREKVideo from "./components/TREKVideo";
import TREKTemplate from "./components/TREKTemplate";

function App() {
  const [timer, setTimer] = useState(0);
  const [toggleActive, setToggleActive] = useState(false);
  const [reset, setReset] = useState(false);

  const setOrResetTimer = function (value) {
    if (timer === value) {
      setReset(!reset);
    } else {
      setTimer(value);
    }
  };

  const timerSettings = {
    pomodoro: 1500,
    shortBreak: 10,
    longBreak: 900,
  };

  let d = new Date();

  d =
    d.getFullYear() +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + d.getDate()).slice(-2) +
    " " +
    ("0" + d.getHours()).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2) +
    ":" +
    ("0" + d.getSeconds()).slice(-2);

  return (
    <Box bg="black">
      <TREKTemplate
        title={`Stardate ${d}`}
        header={
          <>
            <Heading fontSize="sm" color="orange">
              {Math.random() * 1000}
            </Heading>
            <Heading fontSize="sm" color="orange">
              {Math.random() * 1000}
            </Heading>
            <Heading fontSize="sm" color="orange">
              {Math.random() * 1000}
            </Heading>
            <Heading fontSize="sm" color="orange">
              {Math.random() * 1000}
            </Heading>
            <Heading fontSize="sm" color="orange">
              {Math.random() * 1000}
            </Heading>
            <Heading fontSize="sm" color="orange">
              {Math.random() * 1000}
            </Heading>
            <Heading fontSize="sm" color="orange">
              {Math.random() * 1000}
            </Heading>
          </>
        }
        controls={
          <SimpleGrid
            gridTemplateColumns={["192px", "192px 192px"]}
            gridTemplateRows="auto"
            gap="8px"
          >
            <TREKButton
              label="pomodoro"
              color="darkCoral"
              onclick={() => {
                setOrResetTimer(timerSettings.pomodoro);
              }}
            />
            <TREKButton
              label="long break"
              color="orange"
              onclick={() => {
                setOrResetTimer(timerSettings.longBreak);
              }}
            />
            <TREKButton
              label="short break"
              color="orange"
              onclick={() => {
                setOrResetTimer(timerSettings.shortBreak);
              }}
            />
            <TREKButton
              label="start/stop"
              color="lightGreen"
              onclick={() => {
                setToggleActive(!toggleActive);
              }}
            />
          </SimpleGrid>
        }
        content={<TREKVideo maxW="50vh" justifySelf="center"></TREKVideo>}
        contentfix={
          <TREKTimer
            value={timer}
            toggleActive={toggleActive}
            reset={reset}
          ></TREKTimer>
        }
      ></TREKTemplate>
    </Box>
  );
}

export default App;
