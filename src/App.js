import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { Box, SimpleGrid, Button, Input } from "@chakra-ui/react";
import TREKTimer from "./components/TREKTimer/TREKTimer";
import React, { useEffect, useState } from "react";
import TREKVideo from "./components/TREKVideo";
import TREKTemplate from "./components/TREKTemplate";
import TREKNumberGrid from "./components/TREKNumberGrid";
import TREKSpaceConsole from "./components/TREKSpaceConsole";
import useSound from "use-sound";
// @ts-ignore
import voyagerWarpCore from "./assets/voyager-warp-core.mp3";

function App() {
  const [timer, setTimer] = useState(0);
  const [toggleActive, setToggleActive] = useState(false);
  const [reset, setReset] = useState(false);
  const [play] = useSound(voyagerWarpCore, {
    volume: 0.1,
    loop: true,
  });

  useEffect(() => {
    play();
  });

  const setOrResetTimer = function (value) {
    if (timer === value) {
      setReset(!reset);
    } else {
      setTimer(value);
    }
  };

  const timerSettings = {
    pomodoro: 1500,
    shortBreak: 300,
    longBreak: 900,
  };

  return (
    <Box bg="black">
      <TREKTemplate
        title={"Pomodoro Timer"}
        header={<TREKNumberGrid></TREKNumberGrid>}
        controls={
          <SimpleGrid
            gridTemplateColumns={["1fr 1fr", "1fr 1fr", "192px 192px"]}
            gridTemplateRows="auto"
            gap="8px"
            maxW="392px"
          >
            <TREKButton
              label="Pomodoro"
              color="darkCoral"
              onclick={() => {
                setOrResetTimer(timerSettings.pomodoro);
              }}
            >
              Pomodoro
            </TREKButton>
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
              label="engage/stop"
              color="lightGreen"
              onclick={() => {
                setToggleActive(!toggleActive);
              }}
            />
          </SimpleGrid>
        }
        content={
          <>
            <TREKSpaceConsole></TREKSpaceConsole>
            {/*           <TREKVideo></TREKVideo> */}
          </>
        }
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
