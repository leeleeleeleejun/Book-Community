import HomeIcon from "@/assets/HomeIcon";
// import MessageIcon from "@/assets/MessageIcon";
import BookIcon from "@/assets/BookIcon";
import BlogIcon from "@/assets/BlogIcon";
import { CLIENT_PATH } from "@/constants/path";
import { Nav, NavItem } from "./SidebarNav.style";

const SidebarNav = () => {
  return (
    <Nav>
      <NavItem to={CLIENT_PATH.HOME}>
        <HomeIcon />홈
      </NavItem>
      <NavItem to={CLIENT_PATH.MYMEMO}>
        <BlogIcon />내 메모
      </NavItem>
      <NavItem to={CLIENT_PATH.MYLIBRARY}>
        <BookIcon />내 서재
      </NavItem>
    </Nav>
  );
};

export default SidebarNav;
