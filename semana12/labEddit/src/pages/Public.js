import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/authContext";
import { goHome } from "../router/routes";

const Public = (props) => {
  const history = useHistory();
  const { states } = useContext(AuthContext);

  useEffect(() => {
    if (!states.token) {
      goHome(history);
    }
  }, [states.token, history]);

  return <>{props.children}</>;
};

export default Public;
