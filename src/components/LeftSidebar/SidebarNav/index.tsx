import HomeIcon from "@/assets/HomeIcon";
import MessageIcon from "@/assets/MessageIcon";
import BookIcon from "@/assets/BookIcon";
import BlogIcon from "@/assets/BlogIcon";
import { Nav, NavItem } from "./SidebarNav.style";

const SidebarNav = () => {
  return (
    <Nav>
      <NavItem to={"/"}>
        <HomeIcon />홈
      </NavItem>
      <NavItem to={"/"}>
        <MessageIcon />내 모임
      </NavItem>
      <NavItem to={"/"}>
        <BlogIcon />내 메모
      </NavItem>
      <NavItem to={"/"}>
        <BookIcon />내 서재
      </NavItem>
    </Nav>
  );
};

export default SidebarNav;
