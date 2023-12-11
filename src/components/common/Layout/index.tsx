import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import type { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { CLIENT_PATH } from "@/constants/path";
import { getUserInfo } from "@/api/userAPI";
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
import CloseButton from "@/assets/CloseButton";
import MenuIcon from "@/assets/MenuIcon";
import {
  Container,
  LeftAside,
  RightAside,
  Logo,
  Main,
  Header,
  FooterWrap,
} from "./Layout.style";

const Layout = () => {
  const search = useSelector(
    (state: RootState) => state.SearchBookSlice.searchBookModal
  );
  const write = useSelector(
    (state: RootState) => state.WriteMemoSlice.writeMemoModal
  );
  const edit = useSelector((state: RootState) => state.UserSlice.editUserModal);
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);
  const location = useLocation();
  const dispatch = useDispatch();
  const [loginModal, setLoginModalOpen] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState(false);

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

  const showMenuFunc = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  return (
    <>
      {search && <SearchBook />}
      {loginModal && <LoginModal closeLoginModalFunc={closeLoginModalFunc} />}
      {write && <WriteMemo />}
      {edit && <EditUser />}
      <Container $loginModalOpen={loginModal}>
        <LeftAside $showMenu={showMenu}>
          <button className="close" onClick={showMenuFunc}>
            <CloseButton />
          </button>
          <Logo to={CLIENT_PATH.HOME}>
            <img alt="logo" src="/logo.jpg" />
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
          <Header>
            <button
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
            >
              <MenuIcon />
            </button>
            <Logo to={CLIENT_PATH.HOME}>
              <img alt="logo" src="/logo_2.jpg" />
            </Logo>
          </Header>
          <Outlet />
          <FooterWrap>
            <Footer signUp={false} />
          </FooterWrap>
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
