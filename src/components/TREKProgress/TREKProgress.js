import { Progress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import TREKProgressSVG from "./TREKProgressSVG";

function TREKProgress() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    //TODO:  Change function, so that correct percentage is calculated for prograss bar from seconds.
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ marginRight: "auto", marginLeft: "auto", width: "356px" }}>
      <TREKProgressSVG style={{ marginBottom: "-6px" }} />
      <Progress
        value={seconds}
        height="20px"
        colorScheme="pink"
        style={{ width: "310px", marginRight: "auto", marginLeft: "auto" }}
        backgroundColor="transparent"
        isAnimated
      />
      <TREKProgressSVG
        style={{ transform: "rotate(-180deg)", marginTop: "-6px" }}
      />
    </div>
  );
}

export default TREKProgress;
