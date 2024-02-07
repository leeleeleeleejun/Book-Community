import styled from "styled-components";

const TopButton = styled.button<{ $visible: boolean }>`
  width: 36px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 50%;
  bottom: ${({ $visible }) => ($visible ? "30px" : "-40px")};

  border-radius: 50%;
  background-color: var(--color-sub);
  opacity: 0.5;

  z-index: 8;
  cursor: pointer;
  transition: bottom 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export default TopButton;
