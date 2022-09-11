import { Box, SimpleGrid, Image } from "@chakra-ui/react";
import TREKBracketBox from "../components/TREKBracketBox";
// @ts-ignore
import TREKButton from "../components/TREKButton";
import TREKNumberGrid from "../components/TREKNumberGrid";
import TREKSettings from "../components/TREKSettings";
import TREKSpaceConsole from "../components/TREKSpaceConsole";
import TREKTemplate from "../components/TREKTemplate";
import "../theme";
import galaxy from "../assets/galaxy.gif";
import TREKConsoleWidget from "../components/TREKConsoleWidget";

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
        content={<TREKConsoleWidget />}
        contentfix={<TREKSettings />}
      ></TREKTemplate>
    </Box>
  );
}

export default Pomodoro;
