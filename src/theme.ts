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
  textStyles: {
    content: {
      // you can also use responsive styles
      fontSize: ["16px", "22px"],
      textAlign: "right",
      lineHeight: "110%",
      color: "orange",
    },
  },
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
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: "none",
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          boxShadow: "none",
        },
        _hover: {
          backgroundColor: "lightLavender",
          _disabled: {
            bg: "initial",
          },
        },
        _active: {
          backgroundColor: "lavender",
        },
      },
      variants: {
        default: {
          display: "inline",
          height: "3.5rem",
          maxWidth: "12rem",
          backgroundColor: "darkOrange",
          color: "black",
          fontSize: "1.75rem",
          letterSpacing: "-0.05px",
          textAlign: "right",
          fontWeight: "400",
          borderRadius: "full",
          pt: "6",
          pr: "6",
        },
        box: {
          display: "block",
          verticalAlign: "top",
          minHeight: "12",
          width: "9.75rem",
          backgroundColor: "darkOrange",
          color: "black",
          fontSize: "1.75rem",
          letterSpacing: "-0.05px",
          textAlign: "right",
          fontWeight: "400",
          borderRadius: "none",
          pr: "4",
        },
      },
      sizes: {
        md: "14",
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
    lightLavender: "#E2E8F0",
  },
  fonts: {
    heading: `LCARSGTJ3`,
    body: `LCARSGTJ3`,
  },
  colorScheme: {
    darkCoral: "#DB5F63",
  },
  shadows: {
    outline: "0 0 0 4px #FF9400",
  },
  styles,
});

export default theme;
