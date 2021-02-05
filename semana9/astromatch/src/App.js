import {
  Center,
  TabList,
  Tab,
  ChakraProvider,
  extendTheme,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { HiAnnotation, HiUserCircle } from "react-icons/hi";
import { RiFireFill } from "react-icons/ri";

import Header from "./components/header";

import MainPage from "./pages/mainPage";
import MatchesPage from "./pages/matchesPage";
import ProfilePage from "./pages/profilePage";

const App = () => {
  // Global Styles
  const fourTwentyTheme = extendTheme({
    styles: {
      global: {
        "html, body": {
          backgroundColor: "#FFF7EB",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
    colors: {},
  });

  return (
    <ChakraProvider theme={fourTwentyTheme}>
      <Center
        as="main"
        h="100vh"
        w="100vw"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Header>
          <TabList h="10vh">
            <Tab
              _selected={{ color: "#1e1e1e", fontSize: "2.5rem" }}
              color="#727272"
              fontSize="2rem"
            >
              <RiFireFill />
            </Tab>
            <Tab
              _selected={{ color: "#1e1e1e", fontSize: "2.5rem" }}
              color="#727272"
              fontSize="2rem"
            >
              <HiAnnotation />
            </Tab>
            <Tab
              _selected={{ color: "#1e1e1e", fontSize: "2.5rem" }}
              color="#727272"
              fontSize="2rem"
            >
              <HiUserCircle />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel p="0" w="100%" h="100%">
              {<MainPage />}
            </TabPanel>
            <TabPanel p="0" w="100%" h="80vh">
              {<MatchesPage />}
            </TabPanel>
            <TabPanel p="0" w="100%" h="80vh">
              {<ProfilePage />}
            </TabPanel>
          </TabPanels>
        </Header>
      </Center>
    </ChakraProvider>
  );
};

export default App;
