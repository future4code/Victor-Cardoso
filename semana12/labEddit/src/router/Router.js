import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feed from "../pages/Feed";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Register from "../pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/feed/:postId">
          <Post />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
