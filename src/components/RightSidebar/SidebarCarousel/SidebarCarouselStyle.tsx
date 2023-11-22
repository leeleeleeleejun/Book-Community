import { styled } from "styled-components";

export const Images = styled.div`
  display: flex;
  width: 400px;
  height: 80%;
  border-radius: 10px;
  overflow: hidden;
  margin: 6% 0;
`;

export const Img = styled.img<{ $visible: boolean }>`
  min-width: 380px;
  height: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ $visible }) => ($visible ? 0.7 : 0)};
`;

export const TextBox = styled.div`
  width: 390px;
  height: 100px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: var(--font-medium);
    font-weight: var(--weight-semi-bold);
    line-height: 1.2;
  }

  p {
    text-align: center;
    font-weight: var(--weight-semi-bold);
  }
`;
