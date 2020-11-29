import { Progress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import TREKProgressSVG from "./TREKProgressSVG";

function TREKProgress(props) {
  return (
    <div style={{ margin: "30px auto", width: "356px" }}>
      <TREKProgressSVG />
      <Progress
        value={props.seconds}
        height="20px"
        colorScheme="pink"
        style={{
          width: "310px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        backgroundColor="transparent"
        isAnimated
      />
      <TREKProgressSVG rotate={true} />
    </div>
  );
}

export default TREKProgress;
