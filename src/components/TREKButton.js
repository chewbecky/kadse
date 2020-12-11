import { Button } from "@chakra-ui/react";
import React from "react";
import useSound from "use-sound";
import buttonbeep from "../assets/buttonbeep.mp3";

function TREKButton(props) {
  const [play] = useSound(buttonbeep, {
    volume: 0.25,
  });

  const handleClick = () => {
    play();
  };

  return (
    <Button
      size="lg"
      height="56px"
      width="192px"
      borderRadius="100px"
      backgroundColor={props.color}
      color="black"
      fontSize="28px"
      letterSpacing="-0.05px"
      textAlign="right"
      display="block"
      lineHeight="14px"
      paddingTop="20px"
      fontWeight="400"
      onClick={props.onclick}
      onMouseDown={handleClick}
    >
      {props.label}
    </Button>
  );
}

export default TREKButton;
