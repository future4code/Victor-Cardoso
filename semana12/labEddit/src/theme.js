import { extendTheme } from "@chakra-ui/react";
import Button from "./styles/Button";

const redditTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  components: {
    Button,
  },
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflowX: "hidden",
      },
      h5: {
        marginBottom: 4,
      },
      input: {
        marginY: 4,
      },
      textarea: {
        marginBottom: 4,
      },
    },
  },
});

export default redditTheme;
