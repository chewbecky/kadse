import { Box, HStack, VStack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import TREKBracketBox from "./TREKBracketBox";
import Planet from "../assets/planet.webp";

type TREKConsoleWidgetProps = {
  imgUrl?: string;
  showAim?: boolean;
};

const TREKConsoleWidget: FunctionComponent<TREKConsoleWidgetProps> = ({
  imgUrl = Planet,
  showAim = false,
}) => {
  return (
    <TREKBracketBox w="full" h="full" padding="4">
      <Box
        width="100%"
        height="100%"
        maxHeight="100%"
        overflow="hidden"
        position="relative"
        backgroundImage={imgUrl}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      />
      {showAim && (
        <HStack position="relative" top="-50%" left="50%" alignItems="start">
          <TREKBracketBox w="24px" h="24px" size="sm"></TREKBracketBox>
          <VStack alignItems="start">
            <Text textStyle="content" textAlign="left">
              Earth
            </Text>
          </VStack>
        </HStack>
      )}
    </TREKBracketBox>
  );
};

export default TREKConsoleWidget;
