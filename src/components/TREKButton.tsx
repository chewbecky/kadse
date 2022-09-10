import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";
import useSound from "use-sound";
// @ts-ignore
import buttonbeep from "../assets/buttonbeep.mp3";

type TREKButtonProps = ButtonProps & {
  label: string;
};

function TREKButton(props: TREKButtonProps) {
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
      maxWidth="192px"
      borderRadius="100px"
      backgroundColor={props.color}
      color="black"
      fontSize={["22px", "22px", "28px"]}
      letterSpacing="-0.05px"
      textAlign="right"
      display="block"
      lineHeight="14px"
      paddingTop="20px"
      fontWeight="400"
      onClick={props.onClick}
      onMouseDown={handleClick}
    >
      {props.label}
    </Button>
  );
}

export default TREKButton;
