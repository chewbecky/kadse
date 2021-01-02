import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import TREKBox from "./components/TREKBox";
import TREKTimer from "./components/TREKTimer/TREKTimer";
import React, { useState } from "react";
import TREKVideo from "./components/TREKVideo";
import TREKBackground from "./components/TREKBackground";

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
    <Box bg="black" w-full height="100vh">
      <TREKBackground
        visibility={["hidden", "hidden", "visible"]}
      ></TREKBackground>
      <SimpleGrid
        templateRows="216px 1fr"
        gap="104px"
        pl="196px"
        height="100vh"
        py="24px"
        pr="24px"
      >
        <SimpleGrid templateColumns="1fr 440px" gap="24px">
          <Heading
            fontWeight="400"
            textAlign="right"
            size="xl"
            color="orange"
            alignSelf="end"
          >
            Stardate {d}
          </Heading>
          <Flex
            direction="column"
            justifyContent="space-between"
            alignItems="flex-end"
            alignSelf="end"
            h-full
          >
            <Heading
              fontWeight="400"
              textAlign="right"
              fontSize="96px"
              color="orange"
              height="96px"
              lineHeight="96px"
            >
              pomodoro timer
            </Heading>
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
          </Flex>
        </SimpleGrid>
        <SimpleGrid templateColumns="2fr 1fr" gap="24px">
          <TREKVideo maxW="56vh" justifySelf="center"></TREKVideo>
          <TREKTimer
            value={timer}
            toggleActive={toggleActive}
            reset={reset}
          ></TREKTimer>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}

export default App;
