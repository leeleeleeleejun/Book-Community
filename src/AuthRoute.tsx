import { Navigate, Outlet } from "react-router-dom";
import { CLIENT_PATH } from "./constants/path";
import { useSelector } from "react-redux";
import { RootState } from "./store";

const AuthRoute = () => {
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);
  const token = localStorage.getItem("token");

  if (token && user) {
    return <Outlet />;
  } else {
    return (
      <>
        {alert("로그인을 해주세요!")}
        <Navigate to={CLIENT_PATH.HOME} />
      </>
    );
  }
};

export default AuthRoute;
