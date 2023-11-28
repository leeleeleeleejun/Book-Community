import { Outlet } from "react-router-dom";
import Profile from "@/components/LeftSidebar/Profile";
import SidebarNav from "@/components/LeftSidebar/SidebarNav";
import Carousel from "@/components/RightSidebar/SidebarCarousel";
import ReadingTime from "@/components/LeftSidebar/ReadingTime";
import { Container, LeftAside, RightAside, Logo, Main } from "./Layout.style";
import Footer from "@/components/RightSidebar/Footer";
import LoginButton from "@/components/LeftSidebar/login/LoginButton";
import { useState } from "react";
import LoginModal from "@/components/LeftSidebar/login/LoginModal";
import WriteMemo from "@/components/memo/WriteMemo";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const Layout = () => {
  const write = useSelector((state: RootState) => state.WriteMemoSlice.open);

  const [login, setLogin] = useState<boolean>(false);
  return (
    <>
      {login ? <LoginModal login={login} setLogin={setLogin} /> : null}
      {write ? <WriteMemo /> : null}
      <Container $login={login}>
        <LeftAside>
          <Logo alt="logo" src="logo.jpg" />
          {login ? (
            <LoginButton login={login} setLogin={setLogin} />
          ) : (
            <>
              <Profile />
              <ReadingTime />
            </>
          )}
          <SidebarNav />
          <button
            onClick={() => {
              setLogin(!login);
            }}
          >
            로그아웃
          </button>
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
