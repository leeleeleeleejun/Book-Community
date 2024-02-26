//Hooks 및 컴포넌트 Import:
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
//RootState Import 및 상수 정의:
import type { RootState } from "@/store";
import { CLIENT_PATH } from "@/constants/path";
//API 호출 관련 Import:
import { getUserInfo } from "@/api/userAPI";
//Redux 액션 Import 및 사용자 정보 설정 액션 정의:
import { setUser } from "@/components/User/UserSlice";
import LoginButton from "@/components/LeftSidebar/login/LoginButton";
//컴포넌트 Import:
import LoginModal from "@/components/LeftSidebar/login/LoginModal";
import Profile from "@/components/LeftSidebar/Profile";
import SidebarNav from "@/components/LeftSidebar/SidebarNav";
import Carousel from "@/components/RightSidebar/SidebarCarousel";
import ReadingTime from "@/components/LeftSidebar/ReadingTime";
import Footer from "@/components/RightSidebar/Footer";
import WriteMemo from "@/components/memo/WriteMemo";
import SearchBook from "@/components/SearchBook";
import EditUser from "@/components/User";
//SVG 아이콘 Import:
import CloseButton from "@/assets/CloseButton.svg?react";
import MenuIcon from "@/assets/MenuIcon.svg?react";
//스타일 관련 Import:
import {
  Container,
  LeftAside,
  RightAside,
  Logo,
  Main,
  Header,
  FooterWrap,
} from "./Layout.style";
import WriteGather from "@/components/bookClub/WriteGather";

const Layout = () => {
  const search = useSelector(
    (state: RootState) => state.SearchBookSlice.searchBookModal
  );
  const write = useSelector(
    (state: RootState) => state.WriteMemoSlice.writeMemoModal
  );
  const gather = useSelector(
    (state: RootState) => state.WriteGatherSlice.writeGatherModal
  );
  const edit = useSelector((state: RootState) => state.UserSlice.editUserModal);
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);
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

  const handleMenuOpen = () => {
    setShowMenu(true);
  };

  const handleMenuClose = () => {
    setShowMenu(false);
  };

  return (
    <>
      {search && <SearchBook />}
      {loginModal && <LoginModal closeLoginModalFunc={closeLoginModalFunc} />}
      {write && <WriteMemo />}
      {gather && <WriteGather />}
      {edit && <EditUser />}
      <Container $loginModalOpen={loginModal}>
        <LeftAside $showMenu={showMenu}>
          <button className="close" onClick={handleMenuClose}>
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
          <SidebarNav handleMenuClose={handleMenuClose} />
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
            <button onClick={handleMenuOpen}>
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
