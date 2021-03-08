import { useHistory } from "react-router-dom";
import { goToFeed, goToLogin } from "../router/routes";

const useAuth = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");
  if (!token) {
    goToLogin(history);
  } else {
    goToFeed(history);
  }
};

export default useAuth;
