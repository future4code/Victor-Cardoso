import React from "react";
import { AppContainer } from "./components/AppContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// futurecar chakra theme
const futureCarTheme = extendTheme({
  // Global styles
  styles: {
    global: {
      // styles for the `body`
      body: {
        bgGradient: "linear-gradient(-10deg, #272F3F, #465775)",
        color: "#F0FAF7",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflowX: "hidden",
      },
      button: {
        bgColor: "magentaPalette.600",
        margin: "0 1rem",
        _hover: {
          bgColor: "magentaPalette.500",
        },
      },
      option: {
        color: "#bluePalette.900",
      },
    },
  },

  // Tema da paleta de cores
  colors: {
    bluePalette: {
      300: "#8091B3",
      500: "#235B80",
      700: "#465775",
      900: "#272F3F",
    },
    magentaPalette: {
      400: "#EF6F6C",
      500: "#ED5C5A",
      600: "#EB4A47",
    },
    greyPalette: {
      100: "#F0FAF7",
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={futureCarTheme}>
      <AppContainer />
    </ChakraProvider>
  );
}

export default App;
