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

export const LoginButtonContainer = styled.div`
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

  img {
    width: 120px;
    margin: 10px auto;
  }

  input {
    width: 250px;
    height: 30px;
    margin: 5px auto;
    padding: 5px 12px;
    border-radius: 4px;
    border: 1px solid var(--color-main);
    font-size: 14px;

    &:focus {
      outline: 3px solid var(--color-sub-2);
    }
  }

  button {
    width: 274px;
    height: 40px;
    margin: 10px auto;
    border-radius: 4px;
    background-color: var(--color-main);
    color: white;
  }

  div {
    display: flex;
    margin: 0 auto;
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
