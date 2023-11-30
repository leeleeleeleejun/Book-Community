import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import type { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { Container, LeftAside, RightAside, Logo, Main } from "./Layout.style";
import Profile from "@/components/LeftSidebar/Profile";
import SidebarNav from "@/components/LeftSidebar/SidebarNav";
import Carousel from "@/components/RightSidebar/SidebarCarousel";
import ReadingTime from "@/components/LeftSidebar/ReadingTime";
import Footer from "@/components/RightSidebar/Footer";
import LoginButton from "@/components/LeftSidebar/login/LoginButton";
import LoginModal from "@/components/LeftSidebar/login/LoginModal";
import WriteMemo from "@/components/memo/WriteMemo";
import EditUser from "@/components/User";
import { CLIENT_PATH } from "@/constants/path";
import { getUserInfo } from "@/api/userAPI";
import { setUser } from "@/components/User/UserSlice";

const Layout = () => {
  const write = useSelector((state: RootState) => state.WriteMemoSlice.open);
  const edit = useSelector((state: RootState) => state.UserSlice.open);
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);
  const dispatch = useDispatch();

  const [loginModal, setLoginModalOpen] = useState<boolean>(false);

  const openLoginModalFunc = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModalFunc = () => {
    setLoginModalOpen(false);
  };

  useEffect(() => {
    (async () => {
      if (localStorage.getItem("token")) {
        const response = await getUserInfo();
        const result = await response.json();
        dispatch(setUser(result.user));
      }
    })();
  }, []);

  return (
    <>
      {loginModal ? (
        <LoginModal closeLoginModalFunc={closeLoginModalFunc} />
      ) : null}
      {write ? <WriteMemo /> : null}
      {edit ? <EditUser /> : null}
      <Container $loginModalOpen={loginModal}>
        <LeftAside>
          <Logo to={CLIENT_PATH.HOME}>
            <img alt="logo" src="logo.jpg" />
          </Logo>
          {user ? (
            <>
              <Profile />
              <ReadingTime />
            </>
          ) : (
            <LoginButton openLoginModalFunc={openLoginModalFunc} />
          )}
          <SidebarNav />
          {localStorage.getItem("token") && (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
            >
              로그아웃
            </button>
          )}
        </LeftAside>
        <Main>
          <Outlet />
        </Main>
        <RightAside>
          <Carousel signUp={false} />
          <Footer signUp={false} />
        </RightAside>
      </Container>
    </>
  );
};

export default Layout;
