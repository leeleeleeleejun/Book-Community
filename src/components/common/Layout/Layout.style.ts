import { css, styled } from "styled-components";
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

  @media (max-width: 800px) {
    padding: 20px 20px 170px;
  }
`;

export const Logo = styled(Link)`
  margin: 25px auto;

  img {
    width: 230px;

    @media (max-width: 400px) {
      width: 180px;
    }
  }
`;

export const LeftAside = styled.aside<{ $showMenu: boolean }>`
  height: 100vh;
  box-sizing: border-box;
  padding: 26px 23px 36px;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-sidebar);
  transition: transform 1s ease;

  .close {
    display: none;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: var(--font-regular);

    @media (max-width: 800px) {
      display: block;
    }
  }

  @media (max-width: 800px) {
    position: fixed;
    left: -400px;
  }

  ${({ $showMenu }) =>
    $showMenu &&
    css`
      transform: translateX(400px);
      z-index: 10;
    `}
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

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const Header = styled.header`
  display: none;

  @media (max-width: 800px) {
    display: flex;

    img {
      margin-left: -32px;
    }
  }
`;

export const FooterWrap = styled.div`
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px;
  width: 100vw;
  box-sizing: border-box;
  background-color: var(--color-sidebar);

  @media (max-width: 800px) {
    display: block;
  }
`;
