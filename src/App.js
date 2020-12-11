import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TREKProgress from "./components/TREKProgress/TREKProgress";
import TREKBox from "./components/TREKBox";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import completeSound from "./assets/regeneration_cycle_complete.mp3";
import galaxy from "./assets/galaxy.jpg";

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timerStart, setTimerStart] = useState(0);
  const [play] = useSound(completeSound, {
    volume: 0.25,
  });
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
      p="32px"
      backgroundImage={`url(${galaxy})`}
      backgroundSize="cover"
      backgroundRepeat="repeat"
    >
      <Flex justifyContent="space-between" width="100%">
        <Flex direction="column" justifyContent="flex-end" alignItems="left">
          <TREKBox title="test" tint="lavender" mirror="true" form="block" />
          <TREKBox title="test" tint="purple" mirror="true" form="curve" />
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
          justifyContent="space-between"
          marginRight="8px"
        >
          <Heading
            as="h1"
            fontWeight="400"
            textAlign="right"
            size="4xl"
            color="orange"
          >
            pomodoro timer
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns="192px 192px"
            gridTemplateRows="auto"
            gridGap="8px"
            alignSelf="flex-end"
          >
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
                setTimerAndStart(10);
              }}
            />
            <TREKButton
              label="start/stop"
              color="lightGreen"
              onclick={() => toggle()}
            />
          </Box>
          <Box
            width="542px"
            height="24px"
            backgroundColor="lavender"
            margin="4px 0px 4px 8px"
          ></Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" width="100%" flex="1">
        <Flex direction="column">
          <TREKBox title="asdfasdfas" tint="darkCoral" form="curve" />
          <TREKBox title="Ich teste weiter" tint="orange" form="block" mirror />
        </Flex>
        <Flex direction="column" justifyContent="flex-start" flex="1">
          <Box
            width="100%"
            height="24px"
            backgroundColor="lavender"
            margin="4px 8px 4px 0px"
          ></Box>
        </Flex>
        <Flex
          width="550px"
          marginRight="8px"
          direction="column"
          justifyContent="flex-end"
        >
          <Heading fontWeight="400" size="4xl" color="orange" textAlign="right">
            {`${Math.floor(timer / 60)}:${timer % 60}`}
          </Heading>
          <TREKProgress
            seconds={(timer / timerStart) * 100}
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
      </Flex>
    </Flex>
  );
}

export default App;
