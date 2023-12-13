import styled from "styled-components";

const FormButton = styled.button`
  width: 274px;
  height: 40px;
  margin: 10px auto;
  border-radius: 4px;
  background-color: var(--color-main);
  color: white;

  &:hover {
    background-color: var(--color-sub);
  }
`;
export default FormButton;
