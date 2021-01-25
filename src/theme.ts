import { extendTheme } from "@chakra-ui/react";

export const styles = {
  global: () => ({
    html: {
      overflowX: "hidden",
      margin: 0,
      fontFamily: "LCARSGTJ3",
      backgroundColor: "black",
    },
    h1: {
      fontWeight: "normal",
    },
  }),
};

const theme = extendTheme({
  components: {
    FormLabel: {
      baseStyle: {
        color: "darkOrange",
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: "darkOrange",
          },
        },
      },
    },
  },
  colors: {
    darkCoral: "#DB5F63",
    lightGreen: "#D5DABA",
    lavender: "#D695CF",
    purple: "#9B96FF",
    lightOrange: "#FFAA7A",
    orange: "#FF9400",
  },
  fonts: {
    heading: `LCARSGTJ3`,
    body: `LCARSGTJ3`,
  },
  colorScheme: {
    darkCoral: "#DB5F63",
  },
  styles,
});

export default theme;
