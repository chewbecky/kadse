import { Box, Flex, Heading } from "@chakra-ui/react";
import { FunctionComponent, useEffect, useState } from "react";
import TREKProgress from "../TREKProgress/TREKProgress";

interface TREKCountdownProps {
  timer: number;
  progressStart: number;
}

const TREKCountdown: FunctionComponent<TREKCountdownProps> = (props) => {
  const [timer, setTimer] = useState(props.timer);
  const [progressStart, setProgressStart] = useState(props.progressStart);

  useEffect(() => {
    setTimer(props.timer);
    setProgressStart(props.progressStart);
  }, [props.timer, props.progressStart]);

  return (
    <Flex direction="column" justifyContent="flex-end">
      <Heading
        fontWeight="light"
        fontSize="128px"
        color="orange"
        textAlign="right"
        lineHeight="128px"
      >
        <Box display="inline-block" width="44px">{`${
          timer ? Math.floor(timer / 60 / 10) : "0"
        }`}</Box>
        <Box display="inline-block" width="44px">{`${
          timer ? Math.floor(timer / 60) % 10 : "0"
        }`}</Box>
        :
        <Box display="inline-block" width="44px">{`${
          timer ? Math.floor((timer % 60) / 10) : "0"
        }`}</Box>
        <Box display="inline-block" width="44px">{`${
          timer ? (timer % 60) % 10 : "0"
        }`}</Box>
      </Heading>
      <TREKProgress
        seconds={
          timer && progressStart ? Math.floor((timer / progressStart) * 100) : 0
        }
      />
    </Flex>
  );
};

export default TREKCountdown;
