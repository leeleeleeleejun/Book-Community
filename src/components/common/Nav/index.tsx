import { NavBox, NavItem } from "./Nav.style";
import { useDispatch } from "react-redux";
import { openModal } from "@/components/memo/WriteMemo/WriteMemoSlice";
import { CLIENT_PATH } from "@/constants/path";
import { getUserInfo } from "@/api/userAPI";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const openWriteModalFunc = async () => {
    const token = localStorage.getItem("token");
    const loginResponse = await getUserInfo();
    if (token && loginResponse?.ok) {
      dispatch(openModal());
    } else {
      alert("로그인이 필요합니다!");
    }
  };

  const activeHome = location === CLIENT_PATH.HOME;
  const activeTimer = location === CLIENT_PATH.TIMER;
  const activeBookClub = location === CLIENT_PATH.BOOK_CLUB;

  return (
    <NavBox>
      <nav>
        <NavItem to={CLIENT_PATH.HOME} $active={activeHome}>
          독서 메모
        </NavItem>
        <NavItem to={CLIENT_PATH.BOOK_CLUB} $active={activeBookClub}>
          독서 모임
        </NavItem>
        <NavItem to={CLIENT_PATH.TIMER} $active={activeTimer}>
          기록하기
        </NavItem>
      </nav>
      {activeHome && <button onClick={openWriteModalFunc}>글 쓰기</button>}
      {activeBookClub && <button>모집하기</button>}
    </NavBox>
  );
};

export default Nav;
