import { Progress, Box } from "@chakra-ui/react";
import React from "react";
import TREKProgressSVG from "./TREKProgressSVG";

function TREKProgress(props) {
  return (
    <Box {...props}>
      <TREKProgressSVG />
      <Progress
        value={props.seconds}
        height="20px"
        colorScheme="pink"
        px="5%"
        width="100%"
        backgroundColor="transparent"
        isAnimated
      />
      <TREKProgressSVG rotate />
    </Box>
  );
}

export default TREKProgress;
