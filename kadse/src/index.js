import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import theme from "./theme";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
reportWebVitals();
