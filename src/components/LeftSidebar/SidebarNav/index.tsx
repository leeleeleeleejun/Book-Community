import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Nav, NavItem } from "./SidebarNav.style";
import { CLIENT_PATH } from "@/constants/path";
import HomeIcon from "@/assets/HomeIcon.svg?react";
import BlogIcon from "@/assets/BlogIcon.svg?react";
import BookIcon from "@/assets/BookIcon.svg?react";
// import MessageIcon from "@/assets/MessageIcon";

const SidebarNav = ({ handleMenuClose }: { handleMenuClose: () => void }) => {
  const location = useLocation().pathname;
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);

  const generateUserUrl = (path: string) =>
    user?._id ? path.replace(":userId", user._id) : "/";

  const userMemoUrl = generateUserUrl(CLIENT_PATH.USER_MEMO);
  const userLibraryUrl = generateUserUrl(CLIENT_PATH.LIBRARY);

  const isActive = (path: string) => location === path;

  const userMemoActive = user !== null && isActive(userMemoUrl);
  const userLibraryActive = user !== null && isActive(userLibraryUrl);

  const handleNavItemClick = () => {
    handleMenuClose();
    if (!user) {
      alert("로그인이 필요합니다.");
    }
  };

  return (
    <Nav>
      <NavItem
        onClick={handleMenuClose}
        to={CLIENT_PATH.HOME}
        $active={isActive(CLIENT_PATH.HOME)}
      >
        <HomeIcon />홈
      </NavItem>
      <NavItem
        onClick={handleNavItemClick}
        to={userMemoUrl}
        $active={userMemoActive}
      >
        <BlogIcon />내 메모
      </NavItem>
      <NavItem
        onClick={handleNavItemClick}
        to={userLibraryUrl}
        $active={userLibraryActive}
      >
        <BookIcon />내 서재
      </NavItem>
    </Nav>
  );
};

export default SidebarNav;
