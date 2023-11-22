import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import Profile from "@/components/LeftSidebar/Profile";
import SidebarNav from "@/components/LeftSidebar/SidebarNav";
import Carousel from "@/components/RightSidebar/SidebarCarousel";
import ReadingTime from "@/components/LeftSidebar/ReadingTime";

const Layout = () => {
  return (
    <Container>
      <LeftAside>
        <Logo alt="logo" src="logo.jpg" />
        <Profile />
        <ReadingTime />
        <SidebarNav />
      </LeftAside>
      <Main>
        <Outlet />
      </Main>
      <RightAside>
        <Carousel />
      </RightAside>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1504px;
  margin: auto;
`;

const Main = styled.main`
  padding: 10px;
  width: 100%;
  min-height: 780px;
`;

const Logo = styled.img`
  width: 100px;
  margin: 25px auto;
`;

const LeftAside = styled.aside`
  height: 100vh;
  box-sizing: border-box;
  padding: 26px 23px 36px;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--sidebar-color);
`;

const RightAside = styled.aside`
  height: 100vh;
  box-sizing: border-box;
  padding: 26px 23px 36px;
  position: sticky;
  background-color: var(--sidebar-color);
`;
