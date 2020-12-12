import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import TREKProgress from "./components/TREKProgress/TREKProgress";
import TREKBox from "./components/TREKBox";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
// @ts-ignore
import completeSound from "./assets/regeneration_cycle_complete.mp3";
import galaxy from "./assets/galaxy.png";

const setTimerInPageTitle = (timer) => {
  document.title = `${Math.floor(timer / 60)
    .toString()
    .padStart(2, 0)}:${(timer % 60).toString().padStart(2, 0)}`;
};

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [progressStart, setProgressStart] = useState(0);
  const [play] = useSound(completeSound, {
    volume: 0.25,
  });

  function toggle(callback) {
    setIsActive(!isActive);
    setTimerStart(Math.floor(Date.now() / 1000) + timer);
    if (callback) {
      callback();
    }
  }

  function initTimer(value) {
    if (!isActive) {
      setTimer(value);
      setTimerStart(value);
      setProgressStart(value);
      setTimerInPageTitle(value);
    } else {
      toggle(() => {
        setTimer(value);
        setTimerStart(value);
        setProgressStart(value);
        setTimerInPageTitle(value);
      });
    }
  }

  useEffect(() => {
    let interval = null;
    let now = null;
    if (isActive) {
      interval = setInterval(() => {
        now = Math.floor(new Date().getTime() / 1000);
        setTimer(() => timerStart - now);
        setTimerInPageTitle(timer - 1);
      }, 1000);
      if (timer === 0) {
        setTimerInPageTitle(timer);
        clearInterval(interval);
        setIsActive(!isActive);
        play();
      }
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, play, timer]);

  return (
    <Flex
      direction="column"
      backgroundColor="black"
      height="100vh"
      p={[1, 2, 4]}
    >
      <Flex justifyContent="space-between" width="100%">
        <Flex direction="column" justifyContent="flex-end" alignItems="left">
          <TREKBox text="LCARS" tint="lavender" mirror={true} form="block" />
          <TREKBox
            width={window.screen.availWidth / 3}
            text="NCC-74656"
            tint="purple"
            mirror={true}
            form="curve"
          />
        </Flex>
        <Flex direction="column" justifyContent="flex-end" flex="1">
          <Box
            width="100%"
            height="24px"
            backgroundColor="lavender"
            margin="4px 8px 4px 0px"
          ></Box>
        </Flex>
        <Flex
          direction="column"
          justifyContent="flex-end"
          flex="5"
          marginLeft="8px"
        >
          <Box position="absolute" top="20px" right="16px">
            <Heading
              as="h1"
              fontWeight="400"
              textAlign="right"
              size="4xl"
              color="orange"
            >
              pomodoro timer
            </Heading>
            <SimpleGrid
              gridTemplateColumns="192px 192px"
              gridTemplateRows="auto"
              gridGap="8px"
            >
              <TREKButton
                label="pomodoro"
                color="darkCoral"
                onclick={() => {
                  initTimer(1500);
                }}
              />
              <TREKButton
                label="long break"
                color="orange"
                onclick={() => {
                  initTimer(900);
                }}
              />
              <TREKButton
                label="short break"
                color="orange"
                onclick={() => {
                  initTimer(300);
                }}
              />
              <TREKButton
                label="start/stop"
                color="lightGreen"
                onclick={() => toggle()}
              />
            </SimpleGrid>
          </Box>
          <Box
            width="100%"
            height="24px"
            backgroundColor="lavender"
            marginY="4px"
          ></Box>
        </Flex>
      </Flex>
      <Flex
        justifyContent="space-between"
        width="100%"
        flex="1"
        backgroundImage={`url(${galaxy})`}
        backgroundSize="contain"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Flex direction="column">
          <TREKBox
            width={window.screen.availWidth / 3}
            text="Captain"
            tint="darkCoral"
            form="curve"
          />
          <TREKBox text="Janeway" tint="darkCoral" form="block" mirror />
          <TREKBox
            text="Engage"
            tint="orange"
            form="block"
            height={150}
            mirror
          />
          <Box
            backgroundColor="lightOrange"
            flex="1 1 auto"
            width="156px"
            mx="8px"
            my="4px"
          ></Box>
        </Flex>
        <Flex
          direction="column"
          justifyContent="flex-start"
          flex="1"
          flexBasis="200px"
        >
          <Box
            width="100%"
            height="24px"
            backgroundColor="lavender"
            margin="4px 8px 4px 0px"
          ></Box>
        </Flex>
        <Flex
          marginLeft="8px"
          direction="column"
          justifyContent="space-between"
          flex="5"
        >
          <Box height="24px" backgroundColor="lavender" marginY="4px"></Box>
          <Box position="absolute" bottom="16px" right="16px">
            <Flex direction="column" justifyContent="flex-end">
              <Heading
                fontWeight="400"
                size="4xl"
                color="orange"
                textAlign="right"
                sx={{ "font-variant-numeric": "tabular-nums" }}
              >
                <Box display="inline-block" width="24px">{`${
                  timer ? Math.floor(timer / 60 / 10) : "0"
                }`}</Box>
                <Box display="inline-block" width="24px">{`${
                  timer ? Math.floor(timer / 60) % 10 : "0"
                }`}</Box>
                :
                <Box display="inline-block" width="24px">{`${
                  timer ? Math.floor((timer % 60) / 10) : "0"
                }`}</Box>
                <Box display="inline-block" width="24px">{`${
                  timer ? (timer % 60) % 10 : "0"
                }`}</Box>
              </Heading>
              <TREKProgress
                seconds={
                  timer && progressStart
                    ? Math.floor((timer / progressStart) * 100)
                    : 0
                }
                width="300px"
                alignSelf="flex-end"
              />
              <Heading
                as="h3"
                fontWeight="400"
                size="2xl"
                color="orange"
                textAlign="right"
                py="16px"
              >
                Efficiency Mode
              </Heading>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
