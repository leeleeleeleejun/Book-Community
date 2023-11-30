import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div<{ $loginModalOpen: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1600px;
  margin: auto;
  filter: ${({ $loginModalOpen }) => ($loginModalOpen ? "blur(5px)" : "")};
`;

export const Main = styled.main`
  padding: 50px 40px;
  width: 100%;
  min-height: 780px;
  position: relative;
`;

export const Logo = styled(Link)`
  margin: 25px auto;

  img {
    width: 230px;
  }
`;

export const LeftAside = styled.aside`
  height: 100vh;
  box-sizing: border-box;
  padding: 26px 23px 36px;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-sidebar);
`;

export const RightAside = styled.aside`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  padding: 26px 23px 36px;
  position: sticky;
  top: 0;
  background-color: var(--color-sidebar);
`;
