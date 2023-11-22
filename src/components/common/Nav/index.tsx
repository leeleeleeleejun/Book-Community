import { NavBox, NavItem } from "@/components/common/Nav/NavStyle";

const Nav = () => {
  return (
    <NavBox>
      <nav>
        <NavItem to={"/"}>모임</NavItem>
        <NavItem to={"/"}>독서 메모</NavItem>
      </nav>
    </NavBox>
  );
};

export default Nav;
