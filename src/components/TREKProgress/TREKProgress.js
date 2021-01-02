import { Box, Flex, Progress, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import TREKProgressSVG from "./TREKProgressSVG";

function TREKProgress(props) {
  return (
    <Box>
      <TREKProgressSVG rotate={0} tint="lightOrange" />
      <Progress
        value={props.seconds}
        height="12px"
        colorScheme="pink"
        px="4%"
        width="100%"
        backgroundColor="transparent"
        isAnimated
      />
      <TREKProgressSVG rotate={1} tint="lightOrange" />
    </Box>
  );
}

export default TREKProgress;
