import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBox = styled.div`
  margin: 50px 0 30px;
  padding: 10px 40px;

  nav {
    display: flex;
    gap: 15px;
    border-bottom: 1px solid var(--color-gray-3);
  }
`;
export const NavItem = styled(Link)`
  color: black;
  font-size: 21px;
  font-weight: var(--weight-semi-bold);
  padding: 7px;
  text-decoration: none;
  border-bottom: 3px solid var(--color-gray-3);
`;
