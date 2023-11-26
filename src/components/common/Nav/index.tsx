import { NavBox, NavItem } from "./Nav.style";

const Nav = () => {
  return (
    <NavBox>
      <nav>
        <NavItem to={"/"}>모임</NavItem>
        <NavItem to={"/"}>독서 메모</NavItem>
      </nav>
      <button>글 쓰기</button>
    </NavBox>
  );
};

export default Nav;
