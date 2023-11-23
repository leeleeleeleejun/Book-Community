import { Outlet } from "react-router-dom";
import Profile from "@/components/LeftSidebar/Profile";
import SidebarNav from "@/components/LeftSidebar/SidebarNav";
import Carousel from "@/components/RightSidebar/SidebarCarousel";
import ReadingTime from "@/components/LeftSidebar/ReadingTime";
import { Container, LeftAside, RightAside, Logo, Main } from "./LayoutStyle";
import Footer from "@/components/RightSidebar/Footer";

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
        <Footer />
      </RightAside>
    </Container>
  );
};

export default Layout;
