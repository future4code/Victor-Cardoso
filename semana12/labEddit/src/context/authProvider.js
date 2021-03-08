import axios from "axios";
import React, { useEffect, useState } from "react";

import { base_url } from "../constants/url";
import AuthContext from "./authContext";

const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  const [post, setPost] = useState({});
  const [posts, setPosts] = useState([]);

  const login = async (user, clearInput) => {
    try {
      const response = await axios.post(`${base_url}/login`, user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      clearInput();
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const logout = () => {
    console.log("LOGGEDOUT");
    setToken(localStorage.removeItem("token"));
    setUser(localStorage.removeItem("user"));
  };

  const getPosts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${base_url}/posts`, {
        headers: {
          Authorization: token,
        },
      });
      setPosts(response.data.posts);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const createPost = async (post, clearInput) => {
    try {
      const response = axios.post(`${base_url}/posts`, post, {
        headers: {
          Authorization: token,
        },
      });
      setPost(response.data);
    } catch (err) {
      throw new Error(err.message);
    }
  };

  useEffect(() => {
    if (!token) {
      setToken(localStorage.getItem("token"));
    }
    if (!user) {
      localStorage.getItem("user");
    }
  }, [token, user]);

  const states = { user, token, posts, post };
  const requests = { login, getPosts, createPost };
  const setters = { setUser, logout, setPost };
  const data = { states, setters, requests };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};

export default AuthProvider;
