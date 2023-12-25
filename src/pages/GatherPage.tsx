import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  BookBox,
  BookImg,
  BookTitle,
  MemoHeader,
  MemoTitle,
  WriteDate,
  Writer,
} from "./MemoDetailPage";
import LeftArrowIcon from "@/assets/LeftArrowIcon.svg?react";
import FormButton from "@/components/common/FormButton";
import styled from "styled-components";
const GatherPage = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <MemoHeader>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <LeftArrowIcon />
        </button>
        <MemoTitle>모여라~!</MemoTitle>
        <Writer>
          <i>by</i>
          이준석
        </Writer>
        <WriteDate>2023-12-13 18:19</WriteDate>
      </MemoHeader>
      <BookBox>
        <BookTitle>오광영편의점 - 2024 이재명 집권 프로젝트</BookTitle>
        <BookImg src="/logo.jpg" />
      </BookBox>
      <ContentBox>
        <div>모임지기의 말</div>
        <div>저와 함께 완독하실 분! 하루에 1페이지 씩</div>
        <div>인원: 4/5</div>
        <div>기간: 2023-12-21 ~ 2023-12-23</div>
        <div>활동내용: 1일 1페이지 독서 후 매주 금요일 소감 나누기 </div>
      </ContentBox>
      <FormButton>참가하기</FormButton>
    </>
  );
};

export default GatherPage;

const ContentBox = styled.div`
  margin-bottom: 50px;

  div {
    margin: 10px 0;
  }
`;
