import styled from "styled-components";

export const RadioBox = styled.div`
  display: flex;
  font-size: var(--font-small);
  font-weight: var(--weight-light);
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 5px;
  }
  input {
    width: 15px;
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  height: 25px;
  border-radius: 4px;
  border: 1px solid var(--color-gray-2);
  padding: 5px 10px;
  margin-bottom: 8px;
`;
