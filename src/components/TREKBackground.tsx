import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import TREKBox from "./TREKBox";

interface TREKBackgroundProps {}

const TREKBackground: FunctionComponent<TREKBackgroundProps> = (props) => {
  const widthOfFirstColumn = window.innerWidth / 2.5;
  const widthOfTREKBox = widthOfFirstColumn;
  console.log(widthOfFirstColumn);

  return (
    <Grid
      templateRows="120px 136px 112px 150px 48px 1fr"
      templateColumns={`${widthOfFirstColumn}px 24px 8fr 23fr`}
      position="absolute"
      width="100vw"
      height="100vh"
      gap="8px"
      p="24px"
      {...props}
    >
      <GridItem>
        <TREKBox
          text="LCARS"
          tint="lavender"
          height={120}
          mirror={true}
          form="block"
        />
      </GridItem>
      <GridItem rowStart={2}>
        <TREKBox
          width={widthOfTREKBox}
          height={136}
          text="NCC-74656"
          tint="purple"
          mirror={true}
          form="curve"
        />
      </GridItem>
      <GridItem
        rowStart={2}
        width="100%"
        height="24px"
        backgroundColor="orange"
        alignSelf="end"
      ></GridItem>
      <GridItem
        rowStart={2}
        width="100%"
        height="24px"
        backgroundColor="lavender"
        alignSelf="end"
      ></GridItem>
      <GridItem
        rowStart={2}
        width="100%"
        height="24px"
        backgroundColor="lavender"
        alignSelf="end"
      ></GridItem>
      <GridItem rowStart={3}>
        <TREKBox
          width={widthOfTREKBox}
          text="Captain"
          height={112}
          tint="darkCoral"
          form="curve"
        />
      </GridItem>
      <GridItem
        rowStart={3}
        width="100%"
        height="24px"
        backgroundColor="darkCoral"
      ></GridItem>
      <GridItem
        rowStart={3}
        width="100%"
        height="12px"
        backgroundColor="lightOrange"
      ></GridItem>
      <GridItem
        rowStart={3}
        width="100%"
        height="24px"
        backgroundColor="lavender"
      ></GridItem>

      <GridItem rowStart={4}>
        <TREKBox
          text="Janeway"
          height={150}
          tint="darkCoral"
          form="block"
          mirror
        />
      </GridItem>
      <GridItem rowStart={5}>
        <TREKBox text="Engage" tint="orange" form="block" height={48} mirror />
      </GridItem>
      <GridItem
        rowStart={6}
        width="156px"
        height="100%"
        backgroundColor="lightOrange"
      ></GridItem>
    </Grid>
  );
};

export default TREKBackground;
