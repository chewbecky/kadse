import React, { FunctionComponent } from "react";
import { Box, propNames } from "@chakra-ui/react";
import { getColor } from "@chakra-ui/theme-tools";
import theme from "../../theme";
import { EnumType } from "typescript";

enum Rotation {
  top,
  bottom,
  left,
  right,
}

interface TREKProgressSVGProps {
  rotate: Rotation;
  tint: string;
  width?: number;
  height?: number;
}

const createSVG = (
  rotate: Rotation,
  tint: string
): React.SVGProps<SVGSVGElement> => {
  switch (rotate) {
    case Rotation.top: {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 32">
          <path
            fill={getColor(theme, tint)}
            fillRule="evenodd"
            d="M640,-1.95943488e-14 L624,-1.95943488e-14 C624,4 621,8 616,8 L24,8 C19,8 16,4 16,-1.95943488e-14 L0,-1.95943488e-14 L0,8 C0,21 11,32 24,32 L616,32 C628,32 640,20 640,8 L640,-1.95943488e-14 Z"
            transform="matrix(1 0 0 -1 0 32)"
          />
        </svg>
      );
    }
    case Rotation.bottom: {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 32">
          <path
            fill={getColor(theme, tint)}
            fillRule="evenodd"
            d="M640,-1.95943488e-14 L624,-1.95943488e-14 C624,4 621,8 616,8 L24,8 C19,8 16,4 16,-1.95943488e-14 L0,-1.95943488e-14 L0,8 C0,21 11,32 24,32 L616,32 C628,32 640,20 640,8 L640,-1.95943488e-14 Z"
          />
        </svg>
      );
    }
    case Rotation.left: {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 640"
          height="100%"
          width="auto"
        >
          <path
            fill={getColor(theme, tint)}
            fillRule="evenodd"
            d="M32,0 L32,16 C28,16 24,19 24,24 L24,616 C24,621 28,624 32,624 L32,640 L24,640 C11,640 0,629 0,616 L0,24 C0,12 12,0 24,0 L32,0 Z"
          />
        </svg>
      );
    }
    case Rotation.right: {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 640">
          <path
            fill={getColor(theme, tint)}
            fillRule="evenodd"
            d="M0,0 L0,16 C4,16 8,19 8,24 L8,616 C8,621 4,624 0,624 L0,640 L8,640 C21,640 32,629 32,616 L32,24 C32,12 20,0 8,0 L0,0 Z"
          />
        </svg>
      );
    }
  }
};

const TREKProgressSVG: FunctionComponent<TREKProgressSVGProps> = (props) => {
  return <Box>{createSVG(props.rotate, props.tint)}</Box>;
};

TREKProgressSVG.defaultProps = {
  rotate: 0,
  tint: "orange",
};

export default TREKProgressSVG;
