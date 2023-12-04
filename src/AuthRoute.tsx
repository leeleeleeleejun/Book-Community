import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { CLIENT_PATH } from "./constants/path";

const AuthRoute = () => {
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);

  if (user) return <Outlet />;
  else {
    return (
      <>
        {alert("로그인을 해주세요!")}
        <Navigate to={CLIENT_PATH.HOME} />
      </>
    );
  }
};

export default AuthRoute;
