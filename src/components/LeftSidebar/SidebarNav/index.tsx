import HomeIcon from "@/assets/HomeIcon";
// import MessageIcon from "@/assets/MessageIcon";
import BookIcon from "@/assets/BookIcon";
import BlogIcon from "@/assets/BlogIcon";
import { CLIENT_PATH } from "@/constants/path";
import { Nav, NavItem } from "./SidebarNav.style";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const SidebarNav = () => {
  const location = useLocation().pathname;
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);

  const activeHome =
    location === CLIENT_PATH.HOME || location === CLIENT_PATH.TIMER;
  const activeMyMemo = location === CLIENT_PATH.USER_MEMO;
  const activeLibrary = location === CLIENT_PATH.LIBRARY;

  return (
    <Nav>
      <NavItem to={CLIENT_PATH.HOME} $active={activeHome}>
        <HomeIcon />홈
      </NavItem>
      <NavItem
        to={
          user?._id ? CLIENT_PATH.USER_MEMO.replace(":userId", user._id) : "/"
        }
        $active={activeMyMemo}
      >
        <BlogIcon />내 메모
      </NavItem>
      <NavItem
        to={user?._id ? CLIENT_PATH.LIBRARY.replace(":userId", user._id) : "/"}
        $active={activeLibrary}
      >
        <BookIcon />내 서재
      </NavItem>
    </Nav>
  );
};

export default SidebarNav;
