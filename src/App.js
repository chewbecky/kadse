import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import TREKBox from "./components/TREKBox";
import TREKTimer from "./components/TREKTimer/TREKTimer";
import React, { useState } from "react";
import galaxy from "./assets/galaxy.png";
import voyager from "./assets/voyager-status.mp4";

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

  return (
    <Flex
      direction="column"
      backgroundColor="black"
      height="100vh"
      p={[1, 2, 4]}
    >
      <Box
        as="video"
        position="absolute"
        top={["400px", "320px"]}
        left={["10%", "32%"]}
        w={["80%", "50%"]}
        m="0 auto"
        autoPlay
        muted
        loop
      >
        <source src={voyager} type="video/mp4" />
      </Box>
      <Flex justifyContent="space-between" width="100%" zIndex="9999">
        <Flex
          direction="column"
          justifyContent="flex-end"
          alignItems="left"
          visibility={["hidden", "visible"]}
        >
          <TREKBox text="LCARS" tint="lavender" mirror={true} form="block" />
          <TREKBox
            width={window.innerWidth / 3}
            text="NCC-74656"
            tint="purple"
            mirror={true}
            form="curve"
          />
        </Flex>
        <Flex
          direction="column"
          justifyContent="flex-end"
          flex="1"
          visibility={["hidden", "visible"]}
        >
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
              gridTemplateColumns={["192px", "192px 192px"]}
              gridTemplateRows="auto"
              gridGap="8px"
              float="right"
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
          </Box>
          <Box
            width="100%"
            height="24px"
            backgroundColor="lavender"
            marginY="4px"
            visibility={["hidden", "visible"]}
          ></Box>
        </Flex>
      </Flex>
      <Flex
        zIndex="9999"
        justifyContent="space-between"
        width="100%"
        flex="1"
        /* backgroundImage={`url(${galaxy})`}
        backgroundSize="contain"
        backgroundPosition="center"
        backgroundRepeat="no-repeat" */
      >
        <Flex direction="column" visibility={["hidden", "visible"]}>
          <TREKBox
            width={window.innerWidth / 3}
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
          visibility={["hidden", "visible"]}
        >
          <Box
            width="100%"
            height="24px"
            backgroundColor="lavender"
            margin="4px 8px 4px 0px"
            visibility={["hidden", "visible"]}
          ></Box>
        </Flex>
        <Flex
          marginLeft="8px"
          direction="column"
          justifyContent="space-between"
          flex="5"
        >
          <Box
            height="24px"
            backgroundColor="lavender"
            marginY="4px"
            visibility={["hidden", "visible"]}
          ></Box>
          <Box position="absolute" bottom="16px" right="16px">
            <TREKTimer
              value={timer}
              toggleActive={toggleActive}
              reset={reset}
            ></TREKTimer>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
