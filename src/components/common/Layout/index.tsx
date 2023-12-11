import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import type { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { CLIENT_PATH } from "@/constants/path";
import { getUserInfo } from "@/api/userAPI";
import { Container, LeftAside, RightAside, Logo, Main } from "./Layout.style";
import LoginButton from "@/components/LeftSidebar/login/LoginButton";
import LoginModal from "@/components/LeftSidebar/login/LoginModal";
import Profile from "@/components/LeftSidebar/Profile";
import SidebarNav from "@/components/LeftSidebar/SidebarNav";
import Carousel from "@/components/RightSidebar/SidebarCarousel";
import ReadingTime from "@/components/LeftSidebar/ReadingTime";
import Footer from "@/components/RightSidebar/Footer";
import WriteMemo from "@/components/memo/WriteMemo";
import EditUser from "@/components/User";
import SearchBook from "@/components/SearchBook";
import { setUser } from "@/components/User/UserSlice";

const Layout = () => {
  const search = useSelector(
    (state: RootState) => state.SearchBookSlice.searchBookModal
  );
  const write = useSelector(
    (state: RootState) => state.WriteMemoSlice.writeMemoModal
  );
  const edit = useSelector((state: RootState) => state.UserSlice.editUserModal);
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
        if (response) {
          const result = await response.json();
          dispatch(setUser(result.user));
        }
      }
    })();
  }, []);

  return (
    <>
      {search && <SearchBook />}
      {loginModal && <LoginModal closeLoginModalFunc={closeLoginModalFunc} />}
      {write && <WriteMemo />}
      {edit && <EditUser />}
      <Container $loginModalOpen={loginModal}>
        <LeftAside>
          <Logo to={CLIENT_PATH.HOME}>
            <img alt="logo" src="logo.jpg" />
          </Logo>
          {user ? (
            <>
              <Profile />
              <ReadingTime activityGraph={user.activity_graph} />
            </>
          ) : (
            <LoginButton openLoginModalFunc={openLoginModalFunc} />
          )}
          <SidebarNav />
          {user && (
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
