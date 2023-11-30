import UserIcon from "@/assets/UserIcon";
import { styled } from "styled-components";

const BasicUserIcon = ({ size }: { size: number }) => {
  return (
    <UserIconWrap $size={size}>
      <UserIcon />
    </UserIconWrap>
  );
};

const UserIconWrap = styled.div<{ $size: number }>`
  display: flex;
  font-size: ${({ $size }) => $size}px;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-color: var(--color-light-black);
  text-align: center;
  border-radius: 50%;

  svg {
    margin: auto;
  }
`;

export default BasicUserIcon;
