import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Nav, NavItem } from "./SidebarNav.style";
import { CLIENT_PATH } from "@/constants/path";
import HomeIcon from "@/assets/HomeIcon";
import BlogIcon from "@/assets/BlogIcon";
import BookIcon from "@/assets/BookIcon";
// import MessageIcon from "@/assets/MessageIcon";

const SidebarNav = () => {
  const location = useLocation().pathname;
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);

  const userMemoUrl = user?._id
    ? CLIENT_PATH.USER_MEMO.replace(":userId", user._id)
    : "/";
  const userLibraryUrl = user?._id
    ? CLIENT_PATH.LIBRARY.replace(":userId", user._id)
    : "/";

  const isActive = (path: string) => location === path;

  return (
    <Nav>
      <NavItem to={CLIENT_PATH.HOME} $active={isActive(CLIENT_PATH.HOME)}>
        <HomeIcon />홈
      </NavItem>
      <NavItem
        to={userMemoUrl}
        $active={user !== null && isActive(userMemoUrl)}
      >
        <BlogIcon />내 메모
      </NavItem>
      <NavItem
        to={userLibraryUrl}
        $active={user !== null && isActive(userLibraryUrl)}
      >
        <BookIcon />내 서재
      </NavItem>
    </Nav>
  );
};

export default SidebarNav;
