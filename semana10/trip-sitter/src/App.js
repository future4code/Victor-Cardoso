import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import Router from "./routes/Routes";

const App = () => {
  const tripTheme = extendTheme({
    styles: {
      global: {
        body: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: "Baumans, cursive",
          color: "whiteTrip.900",
          // bgGradient: "linear-gradient(223.88deg, #1E1E1F, #1E1E1E)",
          bgGradient: "linear-gradient(115deg, #1d1b2b, #1b1b1f)",
          // fontFamily: "Hammersmith One, sans-serif",
          // fontFamily: "Overpass, sans-serif",
          // fontFamily: "Poppins, sans-serif",
        },
        button: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
    colors: {
      purpleTrip: {
        50: "#0F0C29",
        200: "#251877",
        400: "#6857DB",
      },
      yellowTrip: {
        700: "#FFE66D",
        500: "#FFDA1F",
      },
      whiteTrip: {
        900: "#F7FFF7",
      },
      blackTrip: {
        100: "#1E1E1E",
        200: "#1B1B1F",
      },
    },
  });
  return (
    <ChakraProvider theme={tripTheme}>
      <Router />
    </ChakraProvider>
  );
};

export default App;
