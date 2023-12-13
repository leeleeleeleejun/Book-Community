import { styled } from "styled-components";

export const ImgBox = styled.div<{ $signUp: boolean }>`
  display: flex;
  justify-content: space-around;
  width: 380px;
  height: 55%;
  border-radius: 10px;
  overflow: hidden;
  ${({ $signUp }) => ($signUp ? null : "margin-top: 20%;")}
  filter: blur(1px);
  margin: auto;

  @media (max-width: 1400px) {
    width: 300px;
  }
`;

export const Img = styled.img<{ $visible: boolean }>`
  min-width: 380px;
  cursor: pointer;
  transition: opacity 0.5s ease-in-out;
  border-radius: 8px;
  opacity: ${({ $visible }) => ($visible ? 0.7 : 0)};

  @media (max-width: 1400px) {
    width: 300px;
  }
`;

export const TextBox = styled.div`
  width: 350px;
  height: 100px;
  margin: 20px auto;
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
