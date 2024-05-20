import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import {
  Article,
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
import { useEffect, useState } from "react";
import { gatherPost } from "@/types";
import { getGather } from "@/api/gatherAPI";
import getDateFunc from "@/utils/getDate";

const GatherPage = () => {
  const navigate: NavigateFunction = useNavigate();
  const { _id } = useParams();
  const [gather, setGather] = useState<gatherPost>();

  useEffect(() => {
    (async () => {
      if (!_id) return;
      const response = await getGather(_id);
      setGather({
        ...response.post,
        createdAt: getDateFunc(response.post.createdAt),
      });
    })();
  }, []);

  if (!gather) return;
  if (!gather.createdAt) return;

  const endDate = new Date(gather.createdAt);
  endDate.setDate(endDate.getDate() + gather.term);
  const endDateString = endDate.toISOString().slice(0, 10);

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
        <MemoTitle>{gather.title}</MemoTitle>
        <Writer>
          <i>by</i>
          {(gather.author && gather.author.nickname) || "user"}
        </Writer>
        <WriteDate>
          {gather.createdAt.slice(0, 10)} {gather.createdAt.slice(11, 16)}
        </WriteDate>
      </MemoHeader>
      <BookBox>
        <BookTitle>{gather.book_info.title}</BookTitle>
        <BookImg src={gather.book_info.cover} />
      </BookBox>
      <ContentBox>
        <div>모임지기의 말</div>
        <div>{gather.description}</div>
        <div>인원: 0/{gather.member_length}</div>
        <div>
          기간: {gather.createdAt.slice(0, 10)}~ {endDateString}
        </div>
        <div>
          활동내용: <Article>{gather.content || ""}</Article>
        </div>
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
