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
            <Image src="https://media2.giphy.com/media/D35fOVm9gSQ91icJeR/giphy.gif?cid=790b761139d388b9428e9f8b598ad41c7f938ea480acaeb8&rid=giphy.gif&ct=g"></Image>
          </>
        }
        contentfix={<TREKSettings />}
      ></TREKTemplate>
    </Box>
  );
}

export default Pomodoro;
