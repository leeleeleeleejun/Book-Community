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

export const LoginModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  z-index: 10;
`;

export const LoginModalBox = styled.div`
  display: flex;
  width: 400px;
  height: 300px;
  margin: 0 auto;
  padding: 40px 10px;
  justify-content: center;

  flex-direction: column;
  background-color: white;
  border-radius: 8px;

  position: relative;

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: var(--font-regular);
  }

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
