import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "./context/authProvider";
import Router from "./router/Router";
import redditTheme from "./theme";

function App() {
  return (
    <ChakraProvider theme={redditTheme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
