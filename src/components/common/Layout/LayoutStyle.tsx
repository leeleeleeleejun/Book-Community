import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1600px;
  margin: auto;
`;

export const Main = styled.main`
  padding: 10px;
  width: 100%;
  min-height: 780px;
`;

export const Logo = styled.img`
  width: 100px;
  margin: 25px auto;
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
  height: 100vh;
  box-sizing: border-box;
  padding: 26px 23px 36px;
  position: sticky;
  top: 0;
  background-color: var(--color-sidebar);
`;
