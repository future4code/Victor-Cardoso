import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Flex } from "@chakra-ui/react";

import Home from "../pages/home";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";
import TripApply from "../pages/tripApply";
import Error from "../pages/404";
import Dashboard from "../pages/dashboard";
import TripDetails from "../pages/tripDetails";

import Header from "../components/header";
import Footer from "../components/footer";
import CreateTrip from "../pages/createTrip";
import Applies from "../pages/applies";
import Trips from "../pages/trips";

const Routes = () => {
  return (
    <BrowserRouter>
      <Flex
        as="main"
        h="100vh"
        w="100vw"
        direction="column"
        justifyContent="center"
      >
        <Header />

        <Switch>
          {/* Public Routes */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/tripApply">
            <TripApply />
          </Route>
          {/* Private Routes */}
          <Route path="/dashboard/:name">
            <Dashboard />
          </Route>
          <Route path="/createTrip">
            <CreateTrip />
          </Route>
          <Route path="/applies">
            <Applies />
          </Route>
          <Route path="/trips">
            <Trips />
          </Route>
          <Route path="/trips/:tripId/details">
            <TripDetails />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>

        <Footer />
      </Flex>
    </BrowserRouter>
  );
};

export default Routes;
