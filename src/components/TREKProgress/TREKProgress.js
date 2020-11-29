import { Progress } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import TREKProgressSVG from "./TREKProgressSVG";

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
function TREKProgress(props) {
=======
function TREKProgress() {
>>>>>>> 💄 svg refactoring
=======
function TREKProgress(props) {
>>>>>>> 💄 fix progress svg
=======
function TREKProgress(props) {
>>>>>>> 955ff13a9ed713deb4d5ac505d28c1d98b1dea89
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    //TODO:  Change function, so that correct percentage is calculated for prograss bar from seconds.
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div style={{ margin: "30px auto", width: "356px" }}>
      <TREKProgressSVG />
=======
    <div style={{ marginRight: "auto", marginLeft: "auto", width: "356px" }}>
      <TREKProgressSVG style={{ marginBottom: "-6px" }} />
>>>>>>> 💄 svg refactoring
=======
    <div style={{ margin: "30px auto", width: "356px" }}>
      <TREKProgressSVG />
>>>>>>> 💄 fix progress svg
=======
    <div style={{ margin: "30px auto", width: "356px" }}>
      <TREKProgressSVG />
>>>>>>> 955ff13a9ed713deb4d5ac505d28c1d98b1dea89
      <Progress
        value={seconds}
        height="20px"
        colorScheme="pink"
        style={{ width: "310px", marginRight: "auto", marginLeft: "auto" }}
        backgroundColor="transparent"
        isAnimated
      />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <TREKProgressSVG rotate={true} />
=======
      <TREKProgressSVG
        style={{ transform: "rotate(-180deg)", marginTop: "-6px" }}
      />
>>>>>>> 💄 svg refactoring
=======
      <TREKProgressSVG rotate={true} />
>>>>>>> 💄 fix progress svg
=======
      <TREKProgressSVG rotate={true} />
>>>>>>> 955ff13a9ed713deb4d5ac505d28c1d98b1dea89
    </div>
  );
}

export default TREKProgress;
