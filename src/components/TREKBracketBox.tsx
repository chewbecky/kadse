import { Box } from "@chakra-ui/react";
import { getColor } from "@chakra-ui/theme-tools";
import React, { FunctionComponent } from "react";
import theme from "../theme";

interface TREKBracketBoxProps {
  size?: string;
}

const TREKBracketBox: FunctionComponent<TREKBracketBoxProps | any> = (
  props
) => {
  return (
    <Box
      {...props}
      position="relative"
      borderTopWidth={props.size === "lg" ? "8px" : "2px"}
      borderBottomWidth={props.size === "lg" ? "8px" : "2px"}
      borderLeftWidth={props.size === "lg" ? "16px" : "4px"}
      borderRightWidth={props.size === "lg" ? "16px" : "4px"}
      borderColor={`${getColor(theme, "orange")}`}
      borderRadius={props.size === "lg" ? "24px" : "6px"}
      _before={{
        position: "absolute",
        top: props.size === "lg" ? "-8px" : "-2px",
        bottom: props.size === "lg" ? "-8px" : "-2px",
        left: props.size === "lg" ? "12px" : "4px",
        right: props.size === "lg" ? "12px" : "4px",
        content: "''",
        background: "black",
      }}
    ></Box>
  );
};

TREKBracketBox.defaultProps = {
  size: "lg",
};

export default TREKBracketBox;
