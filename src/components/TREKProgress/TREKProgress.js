import { Progress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import TREKProgressSVG from "./TREKProgressSVG";

function TREKProgress(props) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    //TODO:  Change function, so that correct percentage is calculated for prograss bar from seconds.
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ margin: "30px auto", width: "356px" }}>
      <TREKProgressSVG />
      <Progress
        value={seconds}
        height="20px"
        colorScheme="pink"
        style={{ width: "310px", marginRight: "auto", marginLeft: "auto" }}
        backgroundColor="transparent"
        isAnimated
      />
      <TREKProgressSVG rotate={true} />
    </div>
  );
}

export default TREKProgress;
