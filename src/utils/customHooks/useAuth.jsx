import { registerUser, loginUser } from "../Api/userApi";
import { useLocation, useNavigate } from "react-router-dom";
import { snackActions } from "./useSnackBarUtils";
import { setNewData, setLogin, logOut } from "../../store/userStore";

const useAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const login = async (values) => {
    const res = await loginUser(values);
    if (res.status === 200) {
      setNewData(res.data);
      setLogin(true);
      navigate(fromPage, { replace: true });
      snackActions.success("You successfully Logged In");
      return true;
    } else {
      snackActions.error("Wrong login or password");
      return false;
    }
  };

  const fromPage = location.state?.from?.pathname || "/admin";

  const register = async (values) => {
    const res = await registerUser(values);
    const { username, password } = values;
    if (res.status === 200) {
      const loginRes = await login({ username, password });
      snackActions.success("You successfully registered");
      return loginRes;
    }
    snackActions.error("Troubles with register");
    return false;
  };

  const logOut = async () => {
    setNewData("");
    setLogin(false);
    logOut();
    snackActions.success("You successfully Log out");
    return true;
  };
  return { logOut, login, register };
};

export default useAuth;
