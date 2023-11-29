import { NavBox, NavItem } from "./Nav.style";
import { useDispatch } from "react-redux";
import { openModal } from "@/components/memo/WriteMemo/WriteMemoSlice";
import { CLIENT_PATH } from "@/constants/path";

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <NavBox>
      <nav>
        <NavItem to={CLIENT_PATH.HOME}>독서 메모</NavItem>
        <NavItem to={CLIENT_PATH.TIMER}>기록하기</NavItem>
      </nav>
      <button onClick={() => dispatch(openModal())}>글 쓰기</button>
    </NavBox>
  );
};

export default Nav;
