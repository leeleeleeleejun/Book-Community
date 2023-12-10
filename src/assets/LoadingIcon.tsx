import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingIcon = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid #fff;
  border-radius: 50%;
  border-top-color: var(--color-main);
  animation: ${spin} 1s ease-in-out infinite;
  margin: 30px auto;
`;

export default LoadingIcon;
