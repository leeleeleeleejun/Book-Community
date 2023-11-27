import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 40px 25px;
  border-bottom: 1px solid var(--color-gray-3);
  padding-bottom: 3px;

  button {
    padding: 4px 12px;
    background: none;
    border: 1px solid var(--color-gray);
    border-radius: 8px;
    font-size: 14px;
  }
`;

export const NavItem = styled(Link)`
  color: black;
  font-size: 21px;
  font-weight: var(--weight-semi-bold);
  padding: 8px;
  text-decoration: none;
  border-bottom: 3px solid var(--color-gray-3);
  margin-right: 10px;
`;
