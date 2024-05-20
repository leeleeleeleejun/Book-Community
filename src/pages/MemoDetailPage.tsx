import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavigateFunction, useParams } from "react-router-dom";
import { memo } from "@/types";
import { RootState } from "@/store";
import getDateFunc from "@/utils/getDate";
import { deleteMemo, getMemo } from "@/api/memoAPI";
import LeftArrowIcon from "@/assets/LeftArrowIcon.svg?react";
import {
  openWriteMemoModal,
  setMemoId,
} from "@/components/memo/WriteMemo/WriteMemoSlice";
import MetaTag from "@/components/common/SEO/MetaTag";

const MemoDetailPage = () => {
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);
  const { _id } = useParams();
  const [memo, setMemo] = useState<memo>();

  useEffect(() => {
    (async () => {
      if (!_id) return;
      const response = await getMemo(_id);
      setMemo({
        ...response.post,
        createdAt: getDateFunc(response.post.createdAt),
      });
    })();
  }, []);

  const deleteMemoFunc = async () => {
    const userAnswer = confirm("해당 글을 삭제하겠습니까?");

    if (userAnswer && _id) {
      const response = await deleteMemo(_id);
      if (response) return navigate(-1);
    }
  };

  if (!memo) return;

  return (
    <>
      <MetaTag title={`독서일기 | ${memo.title}`} content={memo.description} />
      <MemoHeader>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <LeftArrowIcon />
        </button>
        <MemoTitle>{memo.title}</MemoTitle>
        <Writer>
          <i>by</i>
          {(memo.author && memo.author.nickname) || "user"}
        </Writer>
        <WriteDate>
          {memo.createdAt && memo.createdAt.slice(0, 10)}{" "}
          {memo.createdAt && memo.createdAt.slice(11, 16)}
        </WriteDate>
      </MemoHeader>
      {memo.book_info && (
        <BookBox>
          <BookTitle>{memo.book_info.title}</BookTitle>
          <BookImg src={memo.book_info.cover} />
        </BookBox>
      )}
      <Article>{memo.content || ""}</Article>
      {memo.author && memo.author._id === user?._id && (
        <ButtonWrap>
          <Button
            $update={true}
            onClick={() => {
              dispatch(openWriteMemoModal());
              dispatch(setMemoId(memo._id));
            }}
          >
            수정
          </Button>
          <Button $update={false} onClick={deleteMemoFunc}>
            삭제
          </Button>
        </ButtonWrap>
      )}
    </>
  );
};

export default MemoDetailPage;

export const MemoHeader = styled.div`
  width: 90%;
  margin: auto;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;
  border-bottom: 1px solid var(--color-gray-3);

  button {
    margin-left: 10px;
    margin-right: auto;
    margin-bottom: 20px;
  }
`;

export const MemoTitle = styled.h3`
  font-size: var(--font-large);
  font-weight: var(--weight-semi-bold);
  word-break: break-word;
  margin-bottom: 5px;
`;

export const Writer = styled.span`
  font-size: var(--font-micro);
  color: var(--color-gray);
  font-weight: var(--weight-regular);
  i {
    font-style: italic;
    margin-right: 5px;
  }
`;

export const WriteDate = styled.span`
  font-size: var(--font-micro);
  font-weight: var(--weight-regular);

  color: var(--color-light-black);
`;

export const BookBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 40px;
`;

export const BookTitle = styled.h4`
  font-weight: var(--weight-semi-bold);
  text-align: center;
`;

export const BookImg = styled.img`
  width: 120px;
  border-radius: 4px;
  box-shadow: 0 0 5px #0006;
  margin: 20px auto 40px;
`;

const ArticleWrap = styled.div`
  width: 90%;
  padding: 30px 20px;
  margin: 0 auto;
  line-height: initial;
  h1 {
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }
  h2 {
    display: block;
    font-size: 1.5em;
    margin-top: 0.83em;
    margin-bottom: 0.83em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h3 {
    display: block;
    font-size: 1.17em;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h4 {
    display: block;
    font-size: 1em;
    margin-top: 1.33em;
    margin-bottom: 1.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h5 {
    display: block;
    font-size: 0.83em;
    margin-top: 1.67em;
    margin-bottom: 1.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  h6 {
    display: block;
    font-size: 0.67em;
    margin-top: 2.33em;
    margin-bottom: 2.33em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
  }

  strong {
    font-weight: bold;
  }

  ol {
    display: block;
    list-style-type: decimal;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-top: 1em;
    margin-bottom: 1 em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 40px;
  }

  em {
    font-style: italic;
  }

  blockquote {
    display: block;
    margin-top: 1em;
    margin-bottom: 1em;
    margin-left: 40px;
    margin-right: 40px;
  }

  @media (max-width: 768px) {
    img {
      max-width: 300px;
    }
  }
`;

export const Article = ({ children }: { children: string }) => {
  return <ArticleWrap dangerouslySetInnerHTML={{ __html: children }} />;
};

const Button = styled.button<{ $update: boolean }>`
  color: white;
  font-weight: var(--weight-light);
  border-radius: 8px;
  width: 50px;
  height: 30px;
  background-color: ${({ $update }) =>
    $update ? "var(--color-main)" : "var(--color-gray)"};
  margin: 5px;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    top: 85px;
  }
`;
