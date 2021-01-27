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
import Footer from "./components/footer";

import MainPage from "./pages/mainPage";
import MatchPage from "./pages/matchPage";
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
      <Center as="main" h="100vh" w="100vw" flexDirection="column">
        <Header>
          <TabList h="10vh">
            <Tab
              _selected={{ color: "#1e1e1e", fontSize: "2.2rem" }}
              color="#727272"
              fontSize="2rem"
            >
              <RiFireFill />
            </Tab>
            <Tab
              _selected={{ color: "#1e1e1e", fontSize: "2.2rem" }}
              color="#727272"
              fontSize="2rem"
            >
              <HiAnnotation />
            </Tab>
            <Tab
              _selected={{ color: "#1e1e1e", fontSize: "2.2rem" }}
              color="#727272"
              fontSize="2rem"
            >
              <HiUserCircle />
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel w="100%" h="80vh">
              {<MainPage />}
            </TabPanel>
            <TabPanel w="100%" h="80vh">
              {<MatchPage />}
            </TabPanel>
            <TabPanel w="100%" h="80vh">
              {<ProfilePage />}
            </TabPanel>
          </TabPanels>
        </Header>
        <Footer />
      </Center>
    </ChakraProvider>
  );
};

export default App;
