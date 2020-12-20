import "./index.css";
import "./App.css";
import "./theme";
import TREKButton from "./components/TREKButton";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import TREKBox from "./components/TREKBox";
import TREKTimer from "./components/TREKTimer/TREKTimer";
import React, { useState } from "react";
import galaxy from "./assets/galaxy.png";

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
                  setTimer(1500);
                }}
              />
              <TREKButton
                label="long break"
                color="orange"
                onclick={() => {
                  setTimer(900);
                }}
              />
              <TREKButton
                label="short break"
                color="orange"
                onclick={() => {
                  setTimer(10);
                }}
              />
              <TREKButton
                label="start/stop"
                color="lightGreen"
                onclick={() => {
                  setIsActive(!isActive);
                }}
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
            <TREKTimer value={timer} isActive={isActive}></TREKTimer>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
