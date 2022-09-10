import {
  Box,
  HStack,
  keyframes,
  Text,
  usePrefersReducedMotion,
  VStack,
} from "@chakra-ui/react";
import { getColor } from "@chakra-ui/theme-tools";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import milkyWay from "../assets/milky-way.jpeg";
import theme from "../theme";
import TREKBracketBox from "./TREKBracketBox";

interface TREKSpaceConsoleProps {
  numberOfLines: number;
}

interface StarProps {
  size: number;
  offsetX: number;
  offsetY: number;
  rotation: number;
  animation: string | undefined;
}

const Star: FunctionComponent<StarProps> = (props) => {
  return (
    <Box
      width={`${props.size}px`}
      height={`${props.size}px`}
      position="absolute"
      top="50%"
      left="50%"
      backgroundColor="white"
      animation={props.animation}
      opacity="0"
      borderRadius="lg"
    ></Box>
  );
};

const DistanceTimer: FunctionComponent = () => {
  const [distance, setDistance] = useState(70000.0);

  useEffect(() => {
    setTimeout(() => {
      setDistance(distance - 0.00000001);
    }, 200);
  }, [distance]);

  return (
    <Text lineHeight="4px" color={getColor(theme, "lightOrange")}>
      {distance.toFixed(8)}
    </Text>
  );
};

const TREKSpaceConsole: FunctionComponent<TREKSpaceConsoleProps> = (props) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const createSpace = (numOfStars: number): ReactNode => {
    let stars = [];

    for (let i = 0; i < numOfStars; i++) {
      const randomXTransform =
        i *
        Math.ceil(Math.random() * 200) *
        Math.pow(-1, Math.ceil(Math.random() * 10));
      const randomYTransform =
        i *
        Math.ceil(Math.random() * 200) *
        Math.pow(-1, Math.ceil(Math.random() * 10));

      const randomXOffset =
        Math.pow(-1, Math.ceil(Math.random() * 10)) *
        Math.ceil(Math.random() * 10);

      const randomYOffset =
        Math.pow(-1, Math.ceil(Math.random() * 10)) *
        Math.ceil(Math.random() * 10);

      const randomAnimationOffset =
        Math.pow(-1, Math.ceil(Math.random() * 10)) *
        Math.ceil(Math.random() * numOfStars);

      const hyperspace = keyframes`
        0% { transform: translate(0,0); opacity: 0%;  }
        5% {opacity: 100%}
        95% {opacity: 100%}
        100%   { transform: translate(${randomXTransform}px,${randomYTransform}px);  opacity: 0%;}
        `;

      const animation = prefersReducedMotion
        ? undefined
        : `${hyperspace} infinite ${
            Math.ceil(Math.random() * (numOfStars - 10)) + 10
          }s ease-in ${randomAnimationOffset}s`;

      stars.push(
        <Star
          size={(i % 2) + 2}
          offsetX={randomXOffset}
          offsetY={randomYOffset}
          rotation={i * 17}
          animation={animation}
        ></Star>
      );
    }

    return <>{stars}</>;
  };

  return (
    <TREKBracketBox w="full" h="full" padding="4">
      <Box
        width="100%"
        height="100%"
        maxHeight="100%"
        overflow="hidden"
        position="relative"
        backgroundImage={`url(${milkyWay})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <HStack
          position="relative"
          top="50%"
          left="50%"
          transform="translate(-12px, -12px)"
          alignItems="start"
        >
          <TREKBracketBox w="24px" h="24px" size="sm"></TREKBracketBox>
          <VStack alignItems="start">
            <Text textStyle="content" textAlign="left">
              Earth
            </Text>
            <DistanceTimer></DistanceTimer>
          </VStack>
        </HStack>
        {createSpace(200)}
      </Box>
    </TREKBracketBox>
  );
};

TREKSpaceConsole.defaultProps = {
  numberOfLines: 5,
};

Star.defaultProps = {
  size: 2,
  offsetX: 4,
  offsetY: 5,
  rotation: 10,
  animation: `none`,
};

export default TREKSpaceConsole;
