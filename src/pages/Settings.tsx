import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
// @ts-ignore
import TREKButton from "../components/TREKButton";
import TREKNumberGrid from "../components/TREKNumberGrid";
import TREKSettings from "../components/TREKSettings";
import TREKSpaceConsole from "../components/TREKSpaceConsole";
import TREKTemplate from "../components/TREKTemplate";
import TREKTimer from "../components/TREKTimer/TREKTimer";
import "../theme";

const timerSettings = {
  work: { title: "Work Cycle - 25", duration: 25 },
  longBreak: { title: "Regeneration - 15", duration: 15 },
  shortBreak: { title: "Regeneration - 5", duration: 10 },
};

function Pomodoro() {
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
            <TREKButton label="Pomodoro" color="darkCoral" onClick={() => {}}>
              Pomodoro
            </TREKButton>
            <TREKButton label="long break" color="orange" onClick={() => {}} />
            <TREKButton label="short break" color="orange" onClick={() => {}} />
            <TREKButton
              label="pause/resume"
              color="lightGreen"
              onClick={() => {}}
            />
          </SimpleGrid>
        }
        content={
          <>
            <TREKSpaceConsole></TREKSpaceConsole>
          </>
        }
        contentfix={<TREKSettings />}
      ></TREKTemplate>
    </Box>
  );
}

export default Pomodoro;
