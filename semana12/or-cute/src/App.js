import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Router from "./router/Router";
import Button from "./styles/Button";
import Input from "./styles/Input";

const redditTheme = extendTheme({
  components: {
    Button,
    Input,
  },
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      input: {
        color: "green.800",
        border: "1px solid",
        borderColor: "green.500",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={redditTheme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
