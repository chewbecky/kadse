import React from "react";
import { Box } from "@chakra-ui/react";

function TREKProgressSVG(props) {
  return (
    <Box transform={props.rotate ? "rotate(-180deg)" : "rotate(0)"}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299 20">
        <path
          fill="#FFAA7A"
          fill-rule="evenodd"
          d="M19,0 L19,8 L16,8 C13.8578046,8 12.1089211,9.68396847 12.0048953,11.8003597 L12,12 L12,286 C12,288.142195 13.6839685,289.891079 15.8003597,289.995105 L16,290 L19,290 L19,298 L12,298 C5.372583,298 0,292.627417 0,286 L0,12 C0,5.372583 5.372583,0 12,0 L19,0 Z"
          transform="rotate(90 149 149.5)"
        />
      </svg>
    </Box>
  );
}

export default TREKProgressSVG;
