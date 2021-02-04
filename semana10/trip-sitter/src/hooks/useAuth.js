import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useAuth = (token) => {
  const history = useHistory();

  useEffect(() => {
    // !token && history.push("/signIn");
    if (!token) {
      history.push("/signIn");
    }
    if (token) {
      history.push("/dashboard/trips");
    }
  }, [history]);
};
