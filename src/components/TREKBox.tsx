import { Box } from "@chakra-ui/react";
import { getColor } from "@chakra-ui/theme-tools";
import React, { FunctionComponent } from "react";
import theme from "../theme";

interface TREKBoxProps {
  form: string;
  width: number;
  height: number;
  tint: string;
  text: string;
  mirror: boolean;
}

const createPath = (form: string, w: number, h: number): string => {
  let path = "";

  switch (form) {
    case "curve": {
      path = `M${w},-7.10542736e-15 L${w},24 L200,24 C175.505067,24 156.395619,39.599346 156,64 L156,${h} L0,${h} L0,89.6 C0,40.1152864 40.1152864,-7.10542736e-15 89.6,-7.10542736e-15 L${w},-7.10542736e-15 Z`;
      break;
    }
    case "block": {
      path = `M0 0 h 156 v ${h} h-156 Z`;
      break;
    }
    case "default": {
      path = `M0 0 h 156 v 112 h-156 Z`;
      break;
    }
  }

  return path;
};

const TREKBox: FunctionComponent<TREKBoxProps> = (props) => {
  const color = props.tint ? getColor(theme, props.tint) : "orange";
  const path = createPath(props.form, props.width, props.height);
  const viewport = `0 0 ${props.width} ${props.height}`;

  return (
    <Box
      margin="4px 8px"
      {...props}
      transform={props.mirror ? "rotateX(180deg)" : "none"}
    >
      <svg
        width={props.width}
        viewBox={viewport}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Navigation/Edge-Down-Copy">
          <path d={path} id="Path" fill={color}></path>
          <text
            id="Settings"
            fontFamily="LCARSGTJ3"
            fontSize="28"
            fontStyle="condensed"
            fontWeight="normal"
            letterSpacing="-0.0466666639"
            fill="#000000"
            textAnchor="end"
          >
            <tspan x="140" y={props.mirror ? "-80" : "103.6"}>
              {props.text}
            </tspan>
          </text>
        </g>
      </svg>
    </Box>
  );
};

TREKBox.defaultProps = {
  form: "block",
  width: 156,
  height: 112,
  tint: "orange",
  text: "Engange",
  mirror: false,
};

export default TREKBox;
