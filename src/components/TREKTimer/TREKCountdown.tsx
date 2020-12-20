import { Box, Flex, Heading } from "@chakra-ui/react";
import TREKProgress from "../TREKProgress/TREKProgress";
import React, { useEffect, useState, FunctionComponent } from "react";

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
    <Flex direction="column" justifyContent="flex-end" {...props}>
      <Heading fontWeight="400" size="4xl" color="orange" textAlign="right">
        <Box display="inline-block" width="24px">{`${
          timer ? Math.floor(timer / 60 / 10) : "0"
        }`}</Box>
        <Box display="inline-block" width="24px">{`${
          timer ? Math.floor(timer / 60) % 10 : "0"
        }`}</Box>
        :
        <Box display="inline-block" width="24px">{`${
          timer ? Math.floor((timer % 60) / 10) : "0"
        }`}</Box>
        <Box display="inline-block" width="24px">{`${
          timer ? (timer % 60) % 10 : "0"
        }`}</Box>
      </Heading>
      <TREKProgress
        seconds={
          timer && progressStart ? Math.floor((timer / progressStart) * 100) : 0
        }
        width="300px"
        alignSelf="flex-end"
      />
      <Heading
        as="h3"
        fontWeight="400"
        size="2xl"
        color="orange"
        textAlign="right"
        py="16px"
      >
        Efficiency Mode
      </Heading>
    </Flex>
  );
};

export default TREKCountdown;
