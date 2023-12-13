import { useRef, useState } from "react";
import {
  TimeBox,
  StartButton,
  StoptButton,
  ButtonBox,
  PauseButton,
} from "./Timer.style";
import { pushReadTime, getUserInfo } from "@/api/userAPI";

const Timer = () => {
  const [running, setRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const intervalRef = useRef<number | undefined>(undefined);
  const today = new Date().getDay();

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

  const pushReadTimeFunc = async () => {
    const token = localStorage.getItem("token");

    const loginResponse = await getUserInfo();
    if (token && loginResponse?.ok) {
      console.log;
      const response = await pushReadTime({ day: today, active: time });
      if (response) {
        stopWatch();
        setTime(0);
        window.location.reload();
      }
    } else {
      alert("로그인이 필요합니다!");
    }
  };

  return (
    <>
      <TimeBox>{formatTime(time)}</TimeBox>
      <ButtonBox>
        <StartButton onClick={startWatch}>시작</StartButton>
        <PauseButton onClick={stopWatch}>중단</PauseButton>
        <StoptButton onClick={pushReadTimeFunc}>기록하기</StoptButton>
      </ButtonBox>
    </>
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
