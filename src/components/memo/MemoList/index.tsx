import { useEffect, useMemo, useRef, useState } from "react";
// 유틸리티 Import:
import getDateFunc from "@/utils/getDate";
//타입 및 상수 Import:
import { memo } from "@/types";
import { API_USER_IMG, CLIENT_PATH } from "@/constants/path";
//로딩 아이콘 및 API 호출 관련 Import:
import LoadingIcon from "@/components/common/LoadingIcon";
import { getAllMemo, getUserMemo } from "@/api/memoAPI";
//컴포넌트 Import:
import BasicUserIcon from "@/components/common/BasicUserIcon";
import UserLinkBox from "../UserLinkBox";
//SVG 아이콘 및 스타일 관련 Import:
import CalendalIcon from "@/assets/CalendarIcon.svg?react";
import {
  MemoListBox,
  MemoListItem,
  MemoTitle,
  Excerpt,
  LogoImg,
  BookImg,
  WriterNicName,
  WriterImg,
  WriteDate,
  WriterInfo,
  MemoInfo,
} from "./MemoList.style";

const MemoList = ({ user }: { user: string }) => {
  const [memoList, setMemoList] = useState<memo[]>([]);
  const [page, setPage] = useState(0); //스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [loading, setLoading] = useState(false);
  const [showLinkBox, setShowLinkBox] = useState<number | null>();

  const io = useMemo(() => observer(setPage), []);
  const pageEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchPins(page, setMemoList, setLoading, user);
  }, [page]);

  useEffect(() => {
    if (loading) {
      //로딩되었을 때만 실행
      if (pageEnd.current !== null) {
        //옵져버 탐색 시작
        io.observe(pageEnd.current);
      }
    }
  }, [loading]);

  const setShowLinkBoxFunc = (itemNumber: number) => {
    if (showLinkBox === itemNumber) setShowLinkBox(null);
    else setShowLinkBox(itemNumber);
  };

  return (
    <MemoListBox>
      {memoList.map((item, index) => {
        const { _id, title, author, description, createdAt, book_info } = item;
        return (
          <li key={index}>
            <MemoListItem
              to={_id ? CLIENT_PATH.MEMO.replace(":_id", _id) : "/"}
            >
              <div>
                <MemoTitle>{title}</MemoTitle>
                <MemoInfo>
                  <WriterInfo>
                    {author && author.profile ? (
                      <WriterImg
                        alt="UserImg"
                        src={API_USER_IMG + author.profile}
                      />
                    ) : (
                      <BasicUserIcon size={25} />
                    )}
                    <WriterNicName
                      onClick={(e) => {
                        e.preventDefault();
                        setShowLinkBoxFunc(index);
                      }}
                    >
                      <span>{(author && author.nickname) || "user"}</span>
                      <UserLinkBox
                        userId={(author && author._id) || ""}
                        showLinkBox={showLinkBox === index}
                      />
                    </WriterNicName>
                  </WriterInfo>
                  <WriteDate>
                    <CalendalIcon />
                    {createdAt && getDateFunc(createdAt).slice(0, 10)}
                  </WriteDate>
                </MemoInfo>
                <Excerpt>
                  <p>{description}</p>
                </Excerpt>
              </div>
              {book_info?.cover ? (
                <BookImg src={book_info?.cover} alt={book_info.title} />
              ) : (
                <LogoImg src="/logo_2.jpg" alt="logo" />
              )}
            </MemoListItem>
          </li>
        );
      })}
      <div ref={pageEnd} />
      {loading && <LoadingIcon />}
    </MemoListBox>
  );
};

export default MemoList;

const fetchPins = async (
  page: number,
  setMemoList: React.Dispatch<React.SetStateAction<memo[]>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  user: string
) => {
  setLoading(true);
  const response = user
    ? await getUserMemo(page, user)
    : await getAllMemo(page);
  const newList = response.memos;
  setMemoList((prev) => [...prev, ...newList]);
  setLoading(false);
};

const observer = (setPage: React.Dispatch<React.SetStateAction<number>>) => {
  return new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => ++prev);
      }
    },
    { threshold: 1 }
  );
};
