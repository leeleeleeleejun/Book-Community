import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Nav, NavItem } from "./SidebarNav.style";
import { CLIENT_PATH } from "@/constants/path";
import HomeIcon from "@/assets/HomeIcon";
import BlogIcon from "@/assets/BlogIcon";
import BookIcon from "@/assets/BookIcon";
// import MessageIcon from "@/assets/MessageIcon";

const SidebarNav = ({ handleMenuClose }: { handleMenuClose: () => void }) => {
  const location = useLocation().pathname;
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);

  const userMemoUrl = user?._id
    ? CLIENT_PATH.USER_MEMO.replace(":userId", user._id)
    : "/";
  const userLibraryUrl = user?._id
    ? CLIENT_PATH.LIBRARY.replace(":userId", user._id)
    : "/";

  const isActive = (path: string) => location === path;

  const userMemoActive = user !== null && isActive(userMemoUrl);
  const userLibraryActive = user !== null && isActive(userLibraryUrl);
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
        onClick={() => {
          handleMenuClose();
          if (!userMemoActive) {
            alert("로그인이 필요합니다.");
          }
        }}
        to={userMemoUrl}
        $active={userMemoActive}
      >
        <BlogIcon />내 메모
      </NavItem>
      <NavItem
        onClick={() => {
          handleMenuClose();
          if (!userLibraryActive) {
            alert("로그인이 필요합니다.");
          }
        }}
        to={userLibraryUrl}
        $active={userLibraryActive}
      >
        <BookIcon />내 서재
      </NavItem>
    </Nav>
  );
};

export default SidebarNav;
