import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TREKProgress from "./components/TREKProgress/TREKProgress";
import TREKBox from "./components/TREKBox";
import React, { useState, useEffect } from "react";
import useSound from "use-sound";
// @ts-ignore
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
      p={[1, 2, 4]}
      backgroundImage={`url(${galaxy})`}
      backgroundSize="cover"
      backgroundRepeat="repeat"
    >
      <Flex justifyContent="space-between" width="100%">
        <Flex direction="column" justifyContent="flex-end" alignItems="left">
          <TREKBox text="test" tint="lavender" mirror={true} form="block" />
          <TREKBox
            width={window.screen.availWidth / 3}
            text="test"
            tint="purple"
            mirror={true}
            form="curve"
          />
        </Flex>
        <Flex direction="column" justifyContent="flex-end" flex="0">
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
          flex="1"
          marginLeft="8px"
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
            width="100%"
            height="24px"
            backgroundColor="lavender"
            marginY="4px"
          ></Box>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" width="100%" flex="1">
        <Flex direction="column">
          <TREKBox
            width={window.screen.availWidth / 3}
            text="asdfasdfas"
            tint="darkCoral"
            form="curve"
          />
          <TREKBox text="Ich teste weiter" tint="orange" form="block" mirror />
          <TREKBox
            text="Ich teste weiter"
            tint="orange"
            form="block"
            height={50}
            mirror
          />
          <Box
            backgroundColor="orange"
            flex="1 1 auto"
            width="156px"
            mx="8px"
            my="4px"
          ></Box>
        </Flex>
        <Flex direction="column" justifyContent="flex-start" flex="0">
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
          flex="1"
        >
          <Box height="24px" backgroundColor="lavender" marginY="4px"></Box>
          <Flex direction="column" justifyContent="flex-end">
            <Heading
              fontWeight="400"
              size="4xl"
              color="orange"
              textAlign="right"
            >
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
    </Flex>
  );
}

export default App;
