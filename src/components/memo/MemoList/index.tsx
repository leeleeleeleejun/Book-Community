import CalendalIcon from "@/assets/CalendarIcon";
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
import BasicUserIcon from "@/components/common/BasicUserIcon";
import { useEffect, useMemo, useRef, useState } from "react";
import LoadingIcon from "@/assets/LoadingIcon";
import { getAllMemo } from "@/api/memoAPI";
import { memo } from "@/types";
import { API_USER_IMG, CLIENT_PATH } from "@/constants/path";
import getDateFunc from "@/utils/getDate";
import { Link } from "react-router-dom";

const MemoList = () => {
  const [memoList, setMemoList] = useState<memo[]>([]);
  console.log(memoList);
  const [page, setPage] = useState(0); //스크롤이 닿았을 때 새롭게 데이터 페이지를 바꿀 state
  const [loading, setLoading] = useState(false);
  const io = useMemo(() => observer(setPage), []);
  const pageEnd = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchPins(page, setMemoList, setLoading);
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

  return (
    <MemoListBox>
      {memoList.map((item, index) => {
        const { _id, title, author, description, createdAt, book_info } = item;
        return (
          <Link
            key={index}
            to={_id ? CLIENT_PATH.MEMO.replace(":_id", _id) : "/"}
          >
            <MemoListItem>
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
                    <WriterNicName>
                      {(author && author.name) || "user"}
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
                <BookImg src={book_info?.cover} />
              ) : (
                <LogoImg src="logo_2.jpg" />
              )}
            </MemoListItem>
          </Link>
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
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setLoading(true);
  const response = await getAllMemo(page);
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
