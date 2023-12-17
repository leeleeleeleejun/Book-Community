import { css, styled } from "styled-components";
import FormButton from "@/components/common/FormButton";
import { ModalBox } from "@/components/common/ModalContainer";
export const Header = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin-top: 7px;
    color: var(--color-gray-2);
    font-weight: 200;
  }
`;

export const EditUserModalBox = styled(ModalBox)`
  @media (max-height: 800px) {
    height: 100%;
    box-sizing: border-box;
  }
`;

export const Content = styled.div`
  overflow-y: auto;
  height: 100%;
  box-sizing: border-box;
`;

export const ProfileEditor = styled.div`
  margin: 20px;
`;

export const ProfileImageSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 10px 0;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: auto 0;
  }
`;

export const BasicUserIconWrap = styled.div`
  margin: auto 0;
`;

export const ProfileImageButton = styled.button<{ $isChange: boolean }>`
  width: 110px;
  font-size: 13px;
  font-weight: 300;
  color: white;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 5px 5px;
  ${({ $isChange }) =>
    $isChange
      ? css`
          background-color: var(--color-main);
          &:hover {
            background-color: var(--color-sub);
          }
        `
      : css`
          background-color: var(--color-gray);
          &:hover {
            background-color: var(--color-gray-light-3);
          }
        `}
`;

export const ImgFile = styled.input`
  display: none;
`;

export const WithdrawalButton = styled(FormButton)`
  background-color: var(--color-gray);
  margin: 5px auto;

  &:hover {
    background-color: var(--color-gray-light-3);
  }
`;
