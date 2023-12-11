import { Navigate, Outlet } from "react-router-dom";
import { CLIENT_PATH } from "./constants/path";
import { getUserInfo } from "@/api/userAPI";
import { useEffect, useState } from "react";

const AuthRoute = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      const loginResponse = await getUserInfo();

      if (token && loginResponse?.ok) setAuth(true);
    })();
  }, []);

  if (auth) return <Outlet />;
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
