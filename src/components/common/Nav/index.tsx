import { NavBox, NavItem } from "./Nav.style";
import { useDispatch } from "react-redux";
import { openModal } from "@/components/memo/WriteMemo/WriteMemoSlice";

const Nav = () => {
  const dispatch = useDispatch();

  return (
    <NavBox>
      <nav>
        <NavItem to={"/"}>모임</NavItem>
        <NavItem to={"/"}>독서 메모</NavItem>
        <NavItem to={"/timer"}>기록하기</NavItem>
      </nav>
      <button onClick={() => dispatch(openModal())}>글 쓰기</button>
    </NavBox>
  );
};

export default Nav;
