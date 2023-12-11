import { styled } from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  background-color: #00000073;
  align-items: center;
  z-index: 10;
`;

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  margin: auto;
  position: relative;

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: var(--font-regular);
  }

  @media (max-width: 400px) {
    height: 100%;
    box-sizing: border-box;
  }
`;
