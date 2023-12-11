import styled from "styled-components";
import FormButton from "@/components/common/FormButton";

export const TimeBox = styled.div`
  font-size: 250px;
  text-align: center;
  margin: 130px 0;
  font-family: "Dongle", sans-serif;

  @media (max-width: 1400px) {
    font-size: 200px;
  }

  @media (max-width: 900px) {
    font-size: 150px;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const StartButton = styled(FormButton)`
  width: 160px;
  height: 70px;
  font-size: var(--font-medium);
  padding: 60px auto;

  @media (max-width: 1400px) {
    width: 130px;
    height: 60px;
  }

  @media (max-width: 900px) {
    width: 100px;
    height: 40px;
    font-size: var(--font-semi-small);
  }
`;
export const PauseButton = styled(StartButton)`
  background-color: var(--color-gray);
  &:hover {
    background-color: var(--color-gray-4);
  }
`;
export const StoptButton = styled(StartButton)`
  background-color: var(--color-brown);
  &:hover {
    background-color: var(--color-brown-2);
  }
`;
