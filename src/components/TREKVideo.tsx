import { AspectRatio, Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import TREKProgressSVG from "./TREKProgress/TREKProgressSVG";
import video from "../assets/galaxy-rotating.mp4";

interface TREKVideoProps {
  src: string;
}

const TREKVideo: FunctionComponent<TREKVideoProps> = (props) => {
  return (
    <SimpleGrid
      templateColumns="1fr 18fr 1fr"
      padding="32px"
      alignItems="center"
      {...props}
    >
      <TREKProgressSVG rotate={2} tint="lightOrange" />

      <Box as="video" autoPlay muted loop>
        <source src={props.src} type="video/mp4" />
      </Box>

      <TREKProgressSVG rotate={3} tint="lightOrange" />
    </SimpleGrid>
  );
};

TREKVideo.defaultProps = {
  src: video,
};

export default TREKVideo;
