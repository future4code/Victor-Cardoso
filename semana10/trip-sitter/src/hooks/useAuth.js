import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    !token && history.push("/signIn");
    // token && history.push("/dashboard/trips");
    // return token;
  }, [history]);
};
