import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React, { FunctionComponent } from "react";
import TREKBackground from "./TREKBackground";

interface TREKTemplateProps {
  title: ReactJSXElement | string;
  header: ReactJSXElement;
  content: ReactJSXElement;
  contentfix: ReactJSXElement;
  controls: ReactJSXElement;
}

const TREKTemplate: FunctionComponent<TREKTemplateProps> = (props) => {
  const templateAreasLg =
    "'. title title title' '. header header controls' '. . . .' '. content content contentfix'";
  const columnTracksLg = "196px 1fr 1fr 392px";
  const rowTracksLg = "96px 128px 88px 1fr";

  const templateAreasMd =
    "'. title' '. controls' '. .' '. content' '. contentfix'";
  const columnTracksMd = "180px 1fr";
  const rowTracksMd = "96px 128px 88px  1fr 1fr";

  const templateAreasBase = "'title' 'controls' 'contentfix' 'content'";
  const columnTracksBase = "1fr";
  const rowTracksBase = "96px 128px 1fr 1fr";

  return (
    <Box>
      <TREKBackground></TREKBackground>
      <Grid
        templateAreas={[templateAreasBase, templateAreasMd, templateAreasLg]}
        templateColumns={[columnTracksBase, columnTracksMd, columnTracksLg]}
        templateRows={[rowTracksBase, rowTracksMd, rowTracksLg]}
        height={["unset", "100vh"]}
        maxHeight={["unset", "100vh"]}
        p="6"
        justifyItems="end"
        alignItems="end"
        overflow="hidden"
      >
        <GridItem
          gridArea="header"
          display={["none", "none", "none", "block"]}
          width="full"
        >
          {props.header}
        </GridItem>
        <GridItem gridArea="title">
          <Heading
            fontWeight="400"
            textAlign="right"
            fontSize={["15vw", "9vw", "96px"]}
            color="orange"
            alignSelf="end"
            lineHeight="96px"
          >
            {props.title}
          </Heading>
        </GridItem>
        <GridItem gridArea="controls" w="full" textAlign="right">
          {props.controls}
        </GridItem>
        <GridItem gridArea="content" w="full" height="full">
          {props.content}
        </GridItem>
        <GridItem gridArea="contentfix" w="full">
          {props.contentfix}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TREKTemplate;
