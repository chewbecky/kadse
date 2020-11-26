import { Button } from "@chakra-ui/react";

function TREKButton(props) {
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
    >
      {props.label}
    </Button>
  );
}

export default TREKButton;
