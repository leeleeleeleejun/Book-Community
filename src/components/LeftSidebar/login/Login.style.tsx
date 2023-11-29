import { ModalBox } from "@/components/common/ModalContainer";
import styled from "styled-components";

export const LoginButtonBox = styled.button`
  min-width: 356px;
  padding: 20px;
  margin: 30px 0 238px;
  line-height: 25px;
  background-color: var(--color-light-black-3);
  border-radius: 5px;
  text-align: left;
  border: none;

  div {
    color: white;
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
  }
  p:last-child {
    color: var(--color-gray-4);
  }
`;

export const LoginModalBox = styled(ModalBox)`
  width: 400px;
  height: 300px;
  margin: 0 auto;
  padding: 40px 10px;

  img {
    width: 190px;
    margin: 10px auto 30px;
  }

  div {
    display: flex;
    margin: 10px auto;
  }

  p {
    font-weight: 300;
    margin-right: 5px;
  }

  a {
    color: var(--color-main);
    margin: 0 10px;
    text-decoration: underline;
  }
`;
