import { Box } from "@chakra-ui/react";
import { getColor } from "@chakra-ui/theme-tools";

import theme from "../theme";

function TREKBox(props) {
  const color = getColor(theme, props.tint);

  console.log(theme);
  return (
    <Box {...props}>
      <svg
        width="560px"
        height="112px"
        viewBox="0 0 560 112"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        transform={props.mirror ? "scale(1,-1)" : "scale(1,1)"}
      >
        <g id="Navigation/Edge-Down-Copy">
          <path
            d="M560,-7.10542736e-15 L560,24 L200,24 C175.505067,24 156.395619,39.599346 156,64 L156,112 L0,112 L0,89.6 C0,40.1152864 40.1152864,-7.10542736e-15 89.6,-7.10542736e-15 L560,-7.10542736e-15 Z"
            id="Path"
            fill={color}
          ></path>
          <text
            id="Settings"
            fontFamily="LCARSGTJ3"
            fontSize="28"
            fontStyle="condensed"
            fontWeight="normal"
            letterSpacing="-0.0466666639"
            fill="#000000"
            textAnchor="end"
            transform={props.mirror ? "scale(1,-1)" : "scale(1,1)"}
          >
            <tspan x="140" y={props.mirror ? "-80" : "103.6"}>
              {props.title}
            </tspan>
          </text>
        </g>
      </svg>
    </Box>
  );
}

export default TREKBox;
