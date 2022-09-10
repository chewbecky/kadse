import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import "./App.css";
// @ts-ignore
import voyagerWarpCore from "./assets/voyager-warp-core.mp3";
import TREKButton from "./components/TREKButton";
import TREKNumberGrid from "./components/TREKNumberGrid";
import TREKSpaceConsole from "./components/TREKSpaceConsole";
import TREKTemplate from "./components/TREKTemplate";
import TREKTimer from "./components/TREKTimer/TREKTimer";
import "./index.css";
import "./theme";

function App() {
  const [timer, setTimer] = useState(0);
  const [toggleActive, setToggleActive] = useState(false);
  const [reset, setReset] = useState(false);
  const [play] = useSound(voyagerWarpCore, {
    volume: 0.1,
  });

  useEffect(() => {
    play();
  });

  const setOrResetTimer = function (value: number) {
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
        header={<TREKNumberGrid numberOfLines={5}></TREKNumberGrid>}
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
              onClick={() => {
                setOrResetTimer(timerSettings.pomodoro);
              }}
            >
              Pomodoro
            </TREKButton>
            <TREKButton
              label="long break"
              color="orange"
              onClick={() => {
                setOrResetTimer(timerSettings.longBreak);
              }}
            />
            <TREKButton
              label="short break"
              color="orange"
              onClick={() => {
                setOrResetTimer(timerSettings.shortBreak);
              }}
            />
            <TREKButton
              label="engage/stop"
              color="lightGreen"
              onClick={() => {
                setToggleActive(!toggleActive);
              }}
            />
          </SimpleGrid>
        }
        content={
          <>
            <TREKSpaceConsole></TREKSpaceConsole>
          </>
        }
        contentfix={
          <TREKTimer
            timerStart={0}
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
