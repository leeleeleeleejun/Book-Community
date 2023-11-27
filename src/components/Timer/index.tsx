import { useRef, useState } from "react";
import { TimeBox, StartButton, StoptButton, ButtonBox } from "./Timer.style";

const Timer = () => {
  const [running, setRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const intervalRef = useRef<number | undefined>(undefined);

  const startWatch = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setRunning(true);
    }
  };

  const stopWatch = () => {
    if (running) {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  return (
    <div>
      <TimeBox>{formatTime(time)}</TimeBox>
      <ButtonBox>
        <StartButton onClick={startWatch}>시작</StartButton>
        <StoptButton onClick={stopWatch}>종료</StoptButton>
      </ButtonBox>
    </div>
  );
};
export default Timer;

export const formatTime = (timeInMillis: number): string => {
  const second = timeInMillis % 60;
  const minute = Math.floor(timeInMillis / 60);
  const hour = Math.floor(minute / 60);
  const formattedTime = `${hour}:${minute < 10 ? "0" : ""}${minute}:${
    second < 10 ? "0" : ""
  }${second}`;
  return formattedTime;
};
