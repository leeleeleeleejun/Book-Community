import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const NavItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 8px 15px;
  font-weight: var(--weight-light);
  text-decoration: none;
  color: var(--color-light-black);
  border-radius: 40px;
  height: 25px;
  line-height: 25px;

  &:hover {
    background-color: var(--color-gray);
  }
`;
