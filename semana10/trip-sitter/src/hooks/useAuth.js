import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  const history = useHistory();

  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = () => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  useEffect(() => {
    getToken();
    !token && history.push("/signIn");
    if (token) {
      history.push("/dashboard/trips");
    }
  }, [history]);

  return {
    setToken: saveToken,
    token,
  };
};
