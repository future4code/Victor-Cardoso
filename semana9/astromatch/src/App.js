import { useState } from "react";
import {
  Button,
  Center,
  TabList,
  Tab,
  ChakraProvider,
  extendTheme,
  TabPanels,
  TabPanel,
  Icon,
} from "@chakra-ui/react";
import { HiAnnotation, HiUserCircle } from "react-icons/hi";
import { RiFireFill } from "react-icons/ri";

import Header from "./components/header";
import Footer from "./components/footer";

import MainPage from "./pages/mainPage";
import MatchPage from "./pages/matchPage";
import ProfilePage from "./pages/profilePage";

const App = () => {
  const [menuPage, setMenuPage] = useState("");

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

  // Functions to swith state
  const switchToMain = () => {
    setMenuPage("main");
  };
  const switchToMatches = () => {
    setMenuPage("matches");
  };
  const switchToProfile = () => {
    setMenuPage("profile");
  };

  // Switch case to change pages
  const switchMenuPage = () => {
    switch (menuPage) {
      case "main":
        return <MainPage />;
      case "matches":
        return <MatchPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <ChakraProvider theme={fourTwentyTheme}>
      <Center as="main" h="100vh" w="100vw" flexDirection="column">
        <Header>
          <TabList h="10vh">
            <Tab _selected={{ color: "#1e1e1e" }} color="#727272">
              <RiFireFill fontSize="1.8rem" />
            </Tab>
            <Tab _selected={{ color: "#1e1e1e" }} color="#727272">
              <HiAnnotation fontSize="1.8rem" />
            </Tab>
            <Tab _selected={{ color: "#1e1e1e" }} color="#727272">
              <HiUserCircle fontSize="1.8rem" />
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
