import { Button } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import useSound from "use-sound";
// @ts-ignore
import voyagerWarpCore from "../assets/voyager-warp-core.mp3";
import TREKBox from "./TREKBox";

const TREKWhiteNoise: FunctionComponent = () => {
  const [soundIsOn, setSoundIsOn] = useState(false);
  const [play, { stop }] = useSound(voyagerWarpCore, {
    volume: 0.5,
    loop: true,
  });

  useEffect(() => {
    soundIsOn && play();
    return () => {
      stop();
    };
  });

  return (
    <Button
      onClick={() => {
        if (soundIsOn) {
          setSoundIsOn(false);
          stop();
          return;
        } else {
          setSoundIsOn(true);
          play();
          return;
        }
      }}
    >
      <TREKBox
        text={soundIsOn ? "Stop Noise" : "Start Noise"}
        tint="lightOrange"
      />
    </Button>
  );
};

export default TREKWhiteNoise;
