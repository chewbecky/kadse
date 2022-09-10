import { Grid, GridItem } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import TREKBox from "./TREKBox";
import TREKNavigation from "./TREKNavigation";
import TREKWhiteNoise from "./TREKWhiteNoise";

interface TREKBackgroundProps {}

const TREKBackground: FunctionComponent<TREKBackgroundProps> = (props) => {
  const columnTemplateLG = `${window.innerWidth / 2.5}px 24px 8fr 22fr 1fr`;
  const columnTemplateMD = `1fr`;

  const templateAreasMD = "'fix1' 'fix2' 'fix3' 'fix4' 'fix5' 'fix6'";
  const templateAreasLG =
    "'fix1 . . . . .' 'fix2 md11 md12 md13 md14 md15' 'fix3 md21 md22 md23 md24 md25' 'fix4 . . . . .' 'fix5 . . . . .' 'fix6 . . . . .'";

  return (
    <Grid
      visibility={["hidden", "visible"]}
      templateRows="120px 136px 112px 150px auto 1fr"
      templateAreas={{ base: templateAreasMD, md: templateAreasLG }}
      templateColumns={{ base: columnTemplateMD, md: columnTemplateLG }}
      position="absolute"
      width="100vw"
      height="100vh"
      overflow="hidden"
      gap="8px"
      p="6"
      bg="unset"
      {...props}
    >
      <GridItem gridArea="fix1">
        <TREKBox
          text="LCARS"
          tint="lavender"
          height={120}
          mirror={true}
          form="block"
        />
      </GridItem>
      <GridItem gridArea="fix2">
        <TREKBox
          width={
            window.innerWidth >= 786
              ? window.innerWidth / 2.5
              : window.innerWidth - 64
          }
          height={136}
          text="NCC-74656"
          tint="purple"
          mirror={true}
          form="curve"
        />
      </GridItem>
      <GridItem
        gridArea="md11"
        display={{ base: "none", md: "block" }}
        width="100%"
        height="24px"
        backgroundColor="orange"
        alignSelf="end"
      ></GridItem>
      <GridItem
        gridArea="md12"
        display={{ base: "none", md: "block" }}
        width="100%"
        height="24px"
        backgroundColor="lavender"
        alignSelf="end"
      ></GridItem>
      <GridItem
        gridArea="md13"
        display={{ base: "none", md: "block" }}
        width="100%"
        height="24px"
        backgroundColor="lavender"
        alignSelf="end"
      ></GridItem>
      <GridItem
        gridArea="md14"
        display={{ base: "none", md: "block" }}
        width="100%"
        height="24px"
        backgroundColor="lavender"
        alignSelf="end"
      ></GridItem>
      <GridItem gridArea="fix3">
        <TREKBox
          width={
            window.innerWidth >= 786
              ? window.innerWidth / 2.5
              : window.innerWidth - 64
          }
          text=""
          height={112}
          tint="darkCoral"
          form="curve"
        />
      </GridItem>
      <GridItem
        gridArea="md21"
        display={{ base: "none", md: "block" }}
        width="100%"
        height="24px"
        backgroundColor="darkCoral"
      ></GridItem>
      <GridItem
        gridArea="md22"
        display={{ base: "none", md: "block" }}
        width="100%"
        height="12px"
        backgroundColor="lightOrange"
      ></GridItem>
      <GridItem
        gridArea="md23"
        display={{ base: "none", md: "block" }}
        width="100%"
        height="24px"
        backgroundColor="lavender"
      ></GridItem>
      <GridItem
        gridArea="md24"
        display={{ base: "none", md: "block" }}
        width="100%"
        height="24px"
        backgroundColor="lavender"
      ></GridItem>
      <GridItem gridArea="fix4">
        <TREKBox text="" height={150} tint="darkCoral" form="block" mirror />
      </GridItem>
      <GridItem gridArea="fix5">
        <TREKNavigation />
      </GridItem>
      <GridItem
        gridArea="fix6"
        width="156px"
        height="100%"
        backgroundColor="lightOrange"
      >
        <TREKWhiteNoise />
      </GridItem>
    </Grid>
  );
};

export default TREKBackground;
