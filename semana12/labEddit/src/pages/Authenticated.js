import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/authContext";
import { goToFeed, goToLogin } from "../router/routes";

const Authenticated = (props) => {
  const history = useHistory();
  const { states } = useContext(AuthContext);

  useEffect(() => {
    if (states.token) {
      goToFeed(history);
    }
    if (!states.token) {
      goToLogin(history);
    }
  }, [states.token, history]);

  return <>{props.children}</>;
};

export default Authenticated;
