import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import redditTheme from "./theme";

import { ColorModeScript } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={redditTheme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
