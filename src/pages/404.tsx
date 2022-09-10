import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import useSound from "use-sound";
// @ts-ignore
import voyagerWarpCore from "../assets/voyager-warp-core.mp3";
import TREKNumberGrid from "../components/TREKNumberGrid";
import TREKTemplate from "../components/TREKTemplate";
import "../theme";

function NoPage() {
  const [play] = useSound(voyagerWarpCore, {
    volume: 0.1,
  });

  useEffect(() => {
    play();
  });

  return (
    <Box bg="black">
      <TREKTemplate
        title={"404 - Page not found"}
        header={<></>}
        controls={<></>}
        content={
          <>
            <Heading color="lightOrange">404 Page not found</Heading>
          </>
        }
        contentfix={<></>}
      ></TREKTemplate>
    </Box>
  );
}

export default NoPage;
